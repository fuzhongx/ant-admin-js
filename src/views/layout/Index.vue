<template>
    <a-layout id="layout_main">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible class="side_width">
        <Aside />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <Header />
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
      <Main />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import { reactive, toRefs } from 'vue'
import Aside from "./components/Aside.vue"
import Header from "./components/Header.vue"
import Main from "./components/Main.vue"

export default {
    components: { Aside, Header, Main },
    setup(){
        const data=reactive({
            collapsed: false,
        })
        return {
            ...toRefs(data)
        }
    }
}
</script>

<style lang="scss" scoped>
.side_width{
    flex: 0 0 220px !important;
    max-width: 220px  !important;
    min-width: 220px  !important;
    width: 220px  !important;
    font-size: 14px;
}

#layout_main{
    height: 100vh;
 
}
</style>