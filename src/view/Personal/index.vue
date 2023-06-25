<template>
    <div class="person-page">
        <div class="perItem">
            <!-- 这里是轮博图 -->
            <Carousel :sliders="carImg" :autoPlay="true" />
        </div>
        <Card :imgSrc="CardImg" />
    </div>
</template>

<script>
import Card from '@/components/Card.vue';
import Carousel from '@/components/Carousel.vue'
import { reactive } from 'vue';
export default {
    name: 'person',
    components: {
        Carousel,
        Card
    },
    setup() {
        // 轮博图的数据
        const carImg = reactive([{
            id: 1, assets: require('@/assets/p.jpg')
        }, {
            id: 2, assets: require('@/assets/q.jpg')
        }, {
            id: 3, assets: require('@/assets/r.jpg')
        }, {
            id: 4, assets: require('@/assets/s.jpg')
        }, {
            id: 5, assets: require('@/assets/t.jpg')
        }])
        // 卡片的数据
        const CardImg = reactive([{
            id: 1, assets: require('@/assets/u.jpg'), name: 'SuoLong'
        }, {
            id: 2, assets: require('@/assets/v.jpg'), name: 'SuoLong'
        }, {
            id: 3, assets: require('@/assets/w.jpg'), name: 'SuoLong'
        }, {
            id: 4, assets: require('@/assets/x.jpg'), name: 'SuoLong'
        }, {
            id: 5, assets: require('@/assets/y.jpg'), name: 'SuoLong'
        }, {
            id: 6, assets: require('@/assets/z.jpg'), name: 'SuoLong'
        }, {
            id: 7, assets: require('@/assets/aa.jpg'), name: 'SuoLong'
        }, {
            id: 8, assets: require('@/assets/bb.jpg'), name: 'SuoLong'
        }, {
            id: 9, assets: require('@/assets/cc.jpg'), name: 'SuoLong'
        }])

        // 数据的懒加载
        return { carImg, CardImg }
    }

}

</script>

<style scoped lang="less">
.person-page {
    padding: 10px;
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 10px;
    /* 行间距 */
    grid-column-gap: 5px;
    /* 列间距 */
}

.perItem {
    width: 1200px;
    height: 500px;
    grid-row: 1 / span 2;
    grid-column: 1 / span 3;
    border-radius: 10px;
}
</style>