<template>
    <transition name="slide">
        <div class="trading-area">
            <div class="app-header">
                <div class="info">
                    <span @click="back" class="icon iconfont icon-2fanhui"></span>
                    <span class="text">
                        <input type="text" placeholder="商品、商家名、服务内容" id="search">
                        <span class="icon-search iconfont icon-sousuo-copy"></span>
                    </span>
                </div>
            </div>
            <div class="area-nav">
                <ul class="nav-box">
                    <router-link to="/home/tradingarea/recommend" tag="li" class="list">热门推荐</router-link>
                    <router-link to="/home/tradingarea/discount" tag="li" class="list">限时优惠</router-link>
                    <router-link to="/home/tradingarea/trading" tag="li" class="list">园区商圈</router-link>
                    <router-link to="/home/tradingarea/service" tag="li" class="list">到家服务</router-link>
                </ul>
            </div>
            <router-view></router-view>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "TradingArea",
        data(){
            return {
                navList:[{
                    text:"热门推荐",
                    path:"recommend"
                },{
                    text:"限时优惠",
                    path:"discount"
                },{
                    text:"园区商圈",
                    path:"trading"
                },{
                    text:"到家服务",
                    path:"service"
                }]
            }
        },
        methods:{
            back(){
                this.$router.push({path:"/home"})
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .trading-area
        position:fixed
        left: 0
        top: 0
        bottom: 0
        width: 100%
        height: 100%
        z-index:1000
        background: #fff
        &.slide-enter-active,&.slide-leave-active
            transition: all 0.5s
        &.slide-enter, &.slide-leave-to
            transform: translate3d(100%, 0, 0)
        .app-header
            position: fixed
            left: 0
            top: 0
            z-index: 2000
            width: 100%
            height: 64px
            border-bottom:1px solid #e6e6e6
            .info
                width: 100%;
                height: 24px
                box-sizing: border-box
                padding: 0 16px
                position: absolute
                left: 0
                bottom: 12px
                display: flex
                justify-content: space-around
                align-items: center
                .text
                    width: 90%
                    height: 30px
                    font-size: 18px
                    text-align: center
                    line-height: 24px
                    font-weight: 400
                    position: relative
                    #search
                        width: 270px
                        height: 30px
                        line-height: 30px
                        box-sizing:border-box
                        padding-left: 32px
                        background: #f2f2f2;
                        border-radius:20px;
                        border:none;
                    .icon-search
                        width: 24px
                        height: 24px
                        text-align: center
                        line-height: 24px
                        position: absolute
                        left: 25px
                        top: 4px
                        font-size: 18px
                .icon
                    width: 24px
                    height: 24px
                    text-align: center
                    line-height: 24px
                    font-size: 18px
                    color: #1B1B1B
                    font-weight: 600


        .area-nav
           margin-top: 64px
           .nav-box
               width: 100%
               height: 45px
               display: flex
               justify-content: space-around
               align-items: center
               box-sizing: border-box
              .list
                  width: 25%
                  height: 100%
                  font-size: 14px
                  text-align: center
                  line-height: 45px
                  &.router-link-active
                     color: #0f0d34
                     border-bottom:1px solid red


</style>