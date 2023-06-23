<template>
    <div class="SiderBar-box">
        <!-- 侧边栏 -->
        <transition>
            <div class="siderBar">
                <div class="close" @click="close">
                    <span>close</span>
                </div>
                <ul class="ul" v-show="show">
                    <li v-for="item in siderActive" :key="item.id">
                        <a @click="jump(item.router)">{{ item.name }}</a>
                    </li>
                </ul>
                <ul class="ul" v-show="!show">
                    <!-- 后台给入数据后也可以使用v-for -->
                    <li>
                        <router-link to="/home"><img class="img" src="@/assets/1.jpg" alt=""></router-link>
                    </li>
                    <li>
                        <router-link to="/person"><img class="img" src="@/assets/2.jpg" alt=""></router-link>
                    </li>
                    <li>
                        <router-link to="/intro"><img class="img" src="@/assets/3.jpg" alt=""></router-link>
                    </li>
                    <li>
                        <router-link to="/play"><img class="img" src="@/assets/777.jpg" alt=""></router-link>
                    </li>
                    <li>
                        <router-link to="/approve"><img class="img" src="@/assets/vue.svg" alt=""></router-link>
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>
<script>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
    name: 'siderBar',
    props: ['emit'],
    setup(props, { emit }) {
        const show = ref(true)
        const router = useRouter()
        const siderActive = reactive([{
            id: 1, name: 'HomePage', router: '/home'
        }, {
            id: 2, name: 'Personal Center', router: '/person'
        }, {
            id: 3, name: 'Information', router: '/intro'
        }, {
            id: 4, name: 'Play', router: '/play'
        }, {
            id: 5, name: 'approve', router: '/approve'
        }, {
            id: 6, name: 'Vue', router: ''
        }, {
            id: 7, name: 'React', router: ''
        }, {
            id: 8, name: 'JS'
        }, {
            id: 9, name: 'Css'
        }])

        //跳转函数
        const jump = (item) => {
            router.push(item)
        }
        const close = () => {
            show.value = !show.value
            emit('sider-bar')
        }
        return { siderActive, show, close, jump }
    }

}
</script>
<style scoped lang="less">
.main-box {
    // position: fixed;
    min-height: calc(100vh - 50px);
    padding-top: 50px;
    width: 100%;
    position: relative;
    overflow: hidden;
}
</style>