<template>
    <div class="item" v-for="(img, index) in imgSrc" :key="img.id">
        <ElCard :body-style="{ padding: '0px' }" shadow="always" ref="target">
            <template #header>
                <div class="card-header">
                    <span>{{ img.name }}</span>
                </div>
            </template>
            <ElImage v-if="imgArr.length" :src="img.assets" class="image" :preview-src-list="imgArr"
                :initial-index="index" />
        </ElCard>
    </div>
</template>
<script>
import { ElCard, ElImage } from 'element-plus';
import { lazyImg } from '@/hooks/index.js'
import { ref, nextTick, onMounted } from 'vue';
export default {
    // 封装的字组件
    // 接收父级的参数有图片，后面会有预览照片的功能的实现
    props: {
        imgSrc: {
            type: Array,
            default: []
        }
    },
    components: {
        ElCard,
    },
    setup(props) {
        const imgArr = ref([])
        // 这里来处理预览图片操作
        // 这里就是对其数据进行导入，组件挂载前导入数据
        const getImg = () => {
            props.imgSrc.map((item) => {
                // 这里由于是require导入有一会一个一个加载
                imgArr.value.push(item.assets)
                // console.log(imgArr.value);
            })
        }
        //    这里是处理数据的懒加载的问题
        const { target } = lazyImg(getImg)
        return { imgArr, target }
    }
}
</script>
<style scoped lang="less">
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