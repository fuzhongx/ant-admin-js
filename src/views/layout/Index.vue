<template>
    <a-layout id="layout_main">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible width="250px">
        <Aside />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <Header  @collapsed="handerButton" />
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
            collapsed: JSON.parse(localStorage.getItem('collapsed')),
        })
        const handerButton=(value)=>{
            data.collapsed=value
            localStorage.setItem('collapsed',value)
        }
        return {
            ...toRefs(data),
            handerButton
        }
    }
}
</script>

<style lang="scss" scoped>

#layout_main{
    height: 100vh;
 
}
</style>