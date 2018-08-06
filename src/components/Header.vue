<template>
    <div class="header">
        <div class="info">
            <span class="icon">
                <img :src="nav" alt="" width="24">
            </span>
            <span class="text">{{appName}}</span>
            <span class="icon message" @click="gotoMeseeage">
                <img :src="info" alt="" width="24">
                <span class="info-num"><span class="iconfont icon icon-jiahao"></span>9</span>
            </span>
        </div>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data(){
            return {
                appName:"金昌诚园",
                nav:require("img/nav.gif"),
                info:require("img/info.png")
            }
        },
        methods:{
            gotoMeseeage(){
                this.$router.push({
                    path:"/home/myInfo"
                })
            }
        }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
    .header
        position: fixed
        left: 0
        top: 0
        z-index: 1000
        width: 100%
        height: 64px
        background: -webkit-linear-gradient(#97673F, #B99373);
        background: -o-linear-gradient(#97673F, #B99373);
        background: -moz-linear-gradient(#97673F, #B99373);
        background: linear-gradient(#97673F, #B99373);
        .info
            width: 100%;
            height: 24px
            box-sizing: border-box
            padding: 0 16px
            position: absolute
            left: 0
            bottom: 12px
            display: flex
            justify-content:space-between
            flex-wrap: nowrap
            align-items :center
            .icon img
                background: -webkit-linear-gradient(#97673F, #B99373);
                background: -o-linear-gradient(#97673F, #B99373);
                background: -moz-linear-gradient(#97673F, #B99373);
                background: linear-gradient(#97673F, #B99373);
            .text
                font-size: 18px
                color: #fff
            .message
                position: relative
                .info-num
                    width: 23px
                    height: 15px
                    border-radius :50%
                    background: red
                    font-size: 8px
                    color: #fff;
                    position: absolute
                    right: -5px
                    top: -5px
                    .icon
                        font-size: 8px
                        color: #fff

</style>