<template>
    <div class="main-box">
        <!-- 主页 -->
        <router-view></router-view>
    </div>
</template>
<script>
export default {

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