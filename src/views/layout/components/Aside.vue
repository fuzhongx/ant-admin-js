<template>
    <h1 class="logo"><img :src="data.src" class="png" alt="若依"></h1>
    <a-menu mode="inline" theme="dark" :inline-collapsed="data.collapsed" v-model:openKeys="data.openKeys"
        v-model:selectedKeys="data.selectedKeys" @click="selectMenu" @openChange="openMenu" class="aside-menu">
        <template v-for="items in routers" :key="items.path">
            <template v-if="!items.hidden">
                <a-menu-item :key="items.path" v-if="!items.children">
                    <router-link :to="items.path">
                        <span>
                            <svg-icon :icon-name="items.meta && items.meta.icon" class="icon aside-icon-size-20 mb--4"></svg-icon>
                            <!-- <i class="icon aside-icon-size-20 mb--4" :class="items.meta && items.meta.icon"></i> -->
                            {{ items.meta && items.meta.title }}
                        </span>
                    </router-link>
                </a-menu-item>
                <!--子级-->
                <a-sub-menu v-else>
                    <template #title>
                        <span>
                            <svg-icon :icon-name="items.meta && items.meta.icon" class="icon aside-icon-size-20 mb--4"></svg-icon>
                            <!-- <i class="icon aside-icon-size-20 mb--4" :class="items.meta && items.meta.icon"></i> -->
                            {{ items.meta && items.meta.title }}
                        </span>
                    </template>

                    <template v-if="items.children.length">
                        <a-menu-item v-for="child in items.children" :key="child.path">
                            <router-link :to="child.path"> 
                                <span>
                                    <!-- <i class="icon aside-icon-size-20 mb--4" :class="items.meta && child.meta.icon"></i> -->
                                    <svg-icon :icon-name="child.meta && child.meta.icon" class="icon aside-icon-size-20 mb--4"></svg-icon>
                                    {{ child.meta && child.meta.title }}
                                </span>
                            </router-link>
                        </a-menu-item> 
                    </template>

                </a-sub-menu>
            </template>
        </template>
    </a-menu>
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
export default {
    setup() {
        //路由
        const { options } = useRouter()
        const routers = options.routes

        const data = reactive({
            collapsed: false,
            selectedKeys: localStorage.getItem('selectedKeys') ? [localStorage.getItem('selectedKeys')] : [],//默认被选中哪一个
            openKeys: localStorage.getItem('openKeys') ? [localStorage.getItem('openKeys')] : [],//展开菜单
            src: 'https://foruda.gitee.com/images/1699583663424602079/6ae13aa7_1151004.png'
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
        return {
            data,
            routers,
            selectMenu, openMenu
        }
    }

}
</script>

<style lang="scss" scoped>
.logo {
    display: flex;
    height: 50px;
    align-items: center;
    justify-content: center;

    img {
        height: 30px;
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