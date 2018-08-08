<template>
    <div class="app-header">
        <div class="info">
            <span @click="back" class="icon iconfont icon-2fanhui"></span>
            <span class="text">{{appName}}</span>
            <span class="recode">{{recode}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Recode-Header",
        props:{
            appName:{
                type:String
            },
            recode:{
                type:String
            }
        },
        methods:{
            back(){
                this.$router.push({path:"/home"})
            }
        }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
    .app-header
        position: fixed
        left: 0
        top: 0
        z-index: 2000
        width: 100%
        height: 64px
        background: #fff
        border-bottom:1px solid #eee;
        .info
            width: 100%;
            height: 24px
            box-sizing: border-box
            padding: 0 16px
            position: absolute
            left: 0
            bottom: 12px
            display: flex
            justify-content: space-between
            align-items: center
            .text
                width: 100%
                height: 24px
                font-size: 18px
                text-align: center
                line-height: 24px
                font-weight: 400
            .icon
                width: 24px
                height: 24px
                text-align: center
                line-height: 24px
                font-size: 18px
                color: #1B1B1B
                font-weight: 800
            .recode
                width: 25%
                height: 24px
                font-size: 14px
                text-align: center
                line-height: 24px
                font-weight: 400
</style>