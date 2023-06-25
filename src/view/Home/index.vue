<template>
    <div class="home-page">
        <Card :imgSrc="assets" />
    </div>
</template>
<script>
// import { ElCard } from 'element-plus'
import Card from '@/components/Card.vue'
import { reactive } from 'vue';
export default {
    name: 'Home',
    components: {
        Card
    },
    setup() {
        // 模拟数据， 此数据存在内存中
        const assets = reactive([{
            id: 1, assets: require("@/assets/a.jpg"), name: 'LuFei'
        }, {
            id: 2, assets: require("@/assets/b.jpg"), name: 'LuFei'
        }, {
            id: 3, assets: require("@/assets/c.jpg"), name: 'LuFei'
        }, {
            id: 4, assets: require("@/assets/d.jpg"), name: 'LuFei'
        }, {
            id: 5, assets: require("@/assets/e.jpg"), name: 'LuFei'
        }, {
            id: 6, assets: require("@/assets/f.jpg"), name: 'LuFei'
        }, {
            id: 7, assets: require("@/assets/g.jpg"), name: 'LuFei'
        }, {
            id: 8, assets: require("@/assets/h.jpg"), name: 'LuFei'
        }, {
            id: 9, assets: require("@/assets/i.jpg"), name: 'LuFei'
        }, {
            id: 10, assets: require("@/assets/j.jpg"), name: 'LuFei'
        }, {
            id: 11, assets: require("@/assets/k.jpg"), name: 'LuFei'
        }, {
            id: 12, assets: require("@/assets/l.jpg"), name: 'LuFei'
        }, {
            id: 13, assets: require("@/assets/m.jpg"), name: 'LuFei'
        }, {
            id: 14, assets: require("@/assets/n.jpg"), name: 'LuFei'
        }, {
            id: 15, assets: require("@/assets/o.jpg"), name: 'LuFei'
        }])
        //图片预览事件
        // const previewImg = (index) => {
        //     VuePreview.open(assets.value, index)
        // }
        return { assets }
    }
}
</script>
<style scoped lang="less">
.home-page {
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 10px;
}

.item {
    width: 400px;
    height: 340px;
    // background-color: pink;
}

.image {
    width: 100%;
    height: 300px;
    border-radius: 3px;
}

.card-header {
    height: 10px;
}
</style>