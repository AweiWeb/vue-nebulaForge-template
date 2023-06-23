<template>
    <div>
        <div class="layout">
            <div class="layoutWrap">
                <!-- 侧边栏 -->
                <siderBar :class="visible ? 'SiderBar-box' : 'hideBar'" @sider-bar="sider" />
                <div :class="visible === true ? 'main' : 'main2'">
                    <!-- 导航栏 -->
                    <div :class="visible === true ? 'nav' : 'nav2'">
                        <NavBar />
                    </div>
                    <!-- 主页 -->
                    <Main />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import siderBar from './components/SiderBar.vue';
import NavBar from './components/NavBar.vue'
import Main from './components/Main.vue'
export default {
    name: 'Layout',
    components: {
        siderBar,
        NavBar,
        Main
    },
    setup() {
        const visible = ref(true)
        const sider = () => {
            visible.value = !visible.value
        }
        return { visible, sider }
    }
}

</script>

<style scoped lang="less">
.layout {
    position: relative;
    height: 100%;
    width: 100%;

    .layoutWrap {
        width: 100%;
        top: 0;
        height: 100%;
        position: absolute;
        z-index: 999;
    }

    .nav {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 9;
        width: calc(100% - 200px);
        transition: width 0.28s;
    }

    .nav2 {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 9;
        width: calc(100% - 100px);
        transition: width 0.2
    }
}
</style>