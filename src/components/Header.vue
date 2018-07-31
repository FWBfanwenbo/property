<template>
    <div class="header">
        <div class="info">
            <span class="icon">
                <img :src="nav" alt="" width="24">
            </span>
            <span class="text">{{appName}}</span>
            <span class="icon">
                <img :src="info" alt="" width="24">
            </span>
        </div>
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
        }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
    .header
        width: 100%
        height: 64px
        background: -webkit-linear-gradient(#97673F, #B99373);
        background: -o-linear-gradient(#97673F, #B99373);
        background: -moz-linear-gradient(#97673F, #B99373);
        background: linear-gradient(#97673F, #B99373);
        position: relative
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
</style>