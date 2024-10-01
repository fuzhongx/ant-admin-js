<template>
    <a-menu mode="inline" theme="dark" v-model:openKeys="data.openKeys"
        v-model:selectedKeys="data.selectedKeys" @click="selectMenu" @openChange="openMenu" class="aside-menu">
        <a-menu-item class="pl-0">
           <div v-if="collapsed"><span class="anticon "><i class="icon aside-icon-size-20 mb--4 ruoyi "></i></span><span class="Logo-title-fs-18"> 云平台 </span></div> 
           <div  v-else> <span class="anticon "><i class="icon aside-icon-size-20 mb--4 ruoyi ml-60"></i></span> <span class="Logo-title-fs-18"> 云平台 </span></div>  
        </a-menu-item>
        <template v-for="items in routers" :key="items.path">
            <template v-if="!items.hidden">
                <a-menu-item :key="items.path" v-if="hasOnlychildren(items)">
                    <router-link :to="items.children[0].path">
                        <span class="anticon"> <svg-icon :icon-name="items.meta && items.meta.icon"
                                class="icon mr-5 aside-icon-size-20 mb--4"></svg-icon></span>
                        <span>
                            <!-- <i class="icon aside-icon-size-20 mb--4" :class="items.meta && items.meta.icon"></i> -->
                            {{ items.children[0].meta && items.children[0].meta.title }}
                        </span>
                    </router-link>
                </a-menu-item>
                <!--子级-->
                <a-sub-menu v-else>
                    <template #title>
                        <span class="anticon"> <svg-icon :icon-name="items.meta && items.meta.icon"
                                class="icon mr-5 aside-icon-size-20 mb--4"></svg-icon></span>
                        <span>
                            {{ items.meta && items.meta.title }}
                        </span>
                    </template>
                   
                    <template v-if="items.children.length">
                        <a-menu-item v-for="child in items.children" :key="child.path">
                            <template v-if="!child.children">
                            <router-link :to="child.path">
                                <svg-icon :icon-name="child.meta && child.meta.icon"
                                    class="icon mr-5 aside-icon-size-20 mb--4"></svg-icon>
                                <span>
                                    {{ child.meta && child.meta.title }}
                                </span>
                            </router-link>
                        </template>
                        </a-menu-item>
                
                    </template>
                </a-sub-menu>
            </template>
        </template>
    </a-menu>
</template>

<script>
import bus from '../../../unilt/Bus.js'
import { onMounted,onUnmounted, reactive,ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
    setup() {
        //路由
        const { options } = useRouter()
        const routers = options.routes
        const collapsed=ref('')
        const data = reactive({   
            selectedKeys: localStorage.getItem('selectedKeys') ? [localStorage.getItem('selectedKeys')] : [],//默认被选中哪一个
            openKeys: localStorage.getItem('openKeys') ? [localStorage.getItem('openKeys')] : [],//展开菜单
            src: 'https://foruda.gitee.com/images/1699583663424602079/6ae13aa7_1151004.png'
        })
       //兄弟传值
      const off= onMounted(()=>{
         bus.on('evenBus',data=>{
            collapsed.value=data
        })
       })
       
//   // 当组件卸载时，取消事件订阅以避免内存泄漏
       onUnmounted(()=>{
       
       })
         
        
        // 选择菜单
        const selectMenu = ({ item, key, keyPath }) => {
            data.selectedKeys = [key]
            localStorage.setItem('selectedKeys', key)
        }
        // 展开菜单
        const openMenu = (openKeys) => {
            data.openKeys = openKeys
            localStorage.setItem('openKeys', openKeys)
        }
        //检测是否自有一个子路由
        const hasOnlychildren=(data)=>{
         //不存在子集的情况   
         if(!data.children){return false}
        //  过滤隐藏的子集路由
         const routers=data.children.filter(item=>item.children ? false : true)
         //判断最终结果
         if(routers.length==1){
            return true
         }else{
            return false
         }
        }
        return {
            data,
            routers,
            selectMenu, openMenu,hasOnlychildren,onMounted,collapsed
        }
    }

}
</script>

<style lang="scss" scoped>
.Logo-title-fs-18{
    font-size: 18px;
}
.pl-0 {
    padding-left: 0px;
}

.ruoyi {
    background-image: url('~@/assets/image/ruoyi.png');
}

.logo {
    display: flex;
    height: 40px;
    align-items: center;
    justify-content: center;

    img {
        height: 40px;
    }
}

.aside-menu {

    i.icon {
        opacity: .6;
    }

    .ant-menu-item-selected {
        i.icon {
            opacity: 1;
        }
    }

    .ant-menu-submenu-open {
        >div {
            i.icon {
                opacity: 1;
            }
        }

    }
}
</style>