<template>
    <div id="header">
        <div @click="handerCollapsed" v-if="data.collapsed"><svg-icon iconName="collapsed" class="svg-collapsed" /></div>
        <div @click="handerCollapsed" v-else><svg-icon iconName="uncollapsed" class="svg-collapsed" /></div>
        <div class="header_nemu">
            <a-dropdown>
                <a class="ant-dropdown-link" @click.prevent>
                    <img src="../../../assets/image/admin.png" />
                </a>
                <template #overlay>
                    <a-menu>
                        <a-menu-item key="0">
                            <div class="menu-item menu-lang "><span class="current">18289586042</span></div>
                        </a-menu-item>
                        <a-menu-item key="1">
                            <div class="menu-item menu-lang">
                                <span :class="{ 'current': data.lang_currge == lang.value }" @click="togglelang(lang.value)"
                                    v-for="lang in data.lang" :key=lang.value>{{ lang.label }}</span>
                            </div>
                        </a-menu-item>
                        <a-menu-divider />
                        <a-menu-item>
                            <div class="menu-item menu-lang">{{ $t('header_menu.logout') }}</div>
                        </a-menu-item>
                    </a-menu>
                </template>
            </a-dropdown>
        </div>
    </div>
</template>

<script>
import bus from '../../../unilt/Bus.js'
import { useI18n } from 'vue-i18n'
import { DownOutlined } from '@ant-design/icons-vue';
import { reactive, getCurrentInstance } from 'vue';
export default {
    components: {
        DownOutlined,
    },
    setup() {
        const { emit } = getCurrentInstance()
        const data = reactive({
            lang: [
                { label: '中文', value: 'zh' },
                { label: '英文', value: 'en' }
            ],
            lang_currge: 'zh',
            collapsed:''

        })
       
        const handerCollapsed = () => {
            data.collapsed=!data.collapsed
            emit('collapsed',data.collapsed)
            bus.emit('evenBus',data.collapsed)
        }
        const { locale } = useI18n({ useScope: 'global' })
        //扩展语言
        const togglelang = (lang) => {
            locale.value = lang
            data.lang_currge = lang
        }
        return {
            data, togglelang,
            handerCollapsed
        }
    }
}
</script>

<style lang="scss" scoped>
.svg-collapsed {
    font-size: 20px;
    float: left;
    margin-top: 20px;
}

#header {
    padding: 0 20px;
    height: 64px;
}

.header_nemu {
    float: right;
}

.ant-dropdown-link {
    img {
        width: 40px;
        height: 40px;
    }
}

.ant-dropdown-link[data-v-08031c8a] {
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.menu-item {
    padding: 0 20px;
    font-size: 14px;
    font-family: "黑体";
    color: #333333;
}

.menu-lang {
    color: #aeaeae;

    span {
        margin-right: 10px;
    }

    .current {
        color: #333333;
    }
}</style>