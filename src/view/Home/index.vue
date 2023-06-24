<template>
    <div class="home-page">
        <div class="item">
            <ElCard :body-style="{ padding: '0px' }" shadow="always">
                <template #header>
                    <div class="card-header">
                        <span>Card name</span>
                    </div>
                </template>
                <img src="../../assets/a.jpg" class="image" />
            </ElCard>
        </div>
        <div class="item">
            <ElCard :body-style="{ padding: '0px' }" shadow="always">
                <template #header>
                    <div class="card-header">
                        <span>Card name</span>
                    </div>
                </template>
                <img src="../../assets/k.jpg" class="image" />
            </ElCard>
        </div>
        <div class="item">
            <ElCard :body-style="{ padding: '0px' }" shadow="always">
                <template #header>
                    <div class="card-header">
                        <span>Card name</span>
                    </div>
                </template>
                <img src="../../assets/c.jpg" class="image" />
            </ElCard>
        </div>
        <div class="item">
            <ElCard :body-style="{ padding: '0px' }" shadow="always">
                <template #header>
                    <div class="card-header">
                        <span>Card name</span>
                    </div>
                </template>
                <img src="../../assets/m.jpg" class="image" />
            </ElCard>
        </div>
        <div class="item">
            <ElCard :body-style="{ padding: '0px' }" shadow="always">
                <template #header>
                    <div class="card-header">
                        <span>Card name</span>
                    </div>
                </template>
                <img src="../../assets/j.jpg" class="image" />
            </ElCard>
        </div>
        <div class="item">
            <ElCard :body-style="{ padding: '0px' }" shadow="always">
                <template #header>
                    <div class="card-header">
                        <span>Card name</span>
                    </div>
                </template>
                <img src="../../assets/f.jpg" class="image" />
            </ElCard>
        </div>
    </div>
</template>
<script>
import { ElCard } from 'element-plus'
export default {
    name: 'Home',
    components: {
        ElCard
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