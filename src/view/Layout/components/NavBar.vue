<template>
    <div class="NavBar">
        <div class="NavBar-box">
            <div class="logout">
                <div @click="logout">Logout</div>
            </div>
            <div class="Nav-title">
                <div class="title">
                    <h3>Programmer Management System</h3>
                </div>
                <!-- 头像 -->
                <div class="personal">
                    <img src="" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style scoped lang="less">
.NavBar {
    position: relative;
    height: 50px;
    overflow: hidden;
    background-color: #c6e2ff;
    border-bottom: 1px solid #fff;

    .NavBar-box {
        position: relative;

        .logout {
            cursor: default;
            padding: 5px;
            border-radius: 4px;
            background: #808080;
            position: absolute;
            text-align: center;
            right: 10px;
            color: #fff;
            top: 10px;
        }

        .Nav-title {
            display: flex;
            padding: 5px;
            justify-content: space-between;
            align-items: center;

            .title {


                h3 {
                    margin: 0;
                    color: #778899;
                    font-weight: normal;
                    font-size: 30px;
                }
            }

            .personal {
                background: #fff;
                border-radius: 50%;
                height: 30px;
                width: 30px;
                margin-right: 80px;
            }
        }
    }
}
</style>