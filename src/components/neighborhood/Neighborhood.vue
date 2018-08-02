<template>
    <div class="neighborhood">
        <div class="app-header">
            <div class="info">
                <span @click="back" class="icon iconfont icon-2fanhui"></span>
                <span class="text">邻里</span>
                <span class="recode">发布</span>
            </div>
        </div>
        <ul class="header-nav">
            <router-link tag="li" to="/neighborhood/share" class="nav-list">
                <span class="tab-text">爱分享</span>
            </router-link>
            <router-link tag="li" to="/neighborhood/activeCenter" class="nav-list">
                <span class="tab-text">活动</span>
            </router-link>
            <router-link tag="li" to="/neighborhood/business" class="nav-list">
                <span class="tab-text">商管</span>
            </router-link>
            <router-link tag="li" to="/neighborhood/healthy" class="nav-list">
                <span class="tab-text">健康</span>
            </router-link>
            <router-link tag="li" to="/neighborhood/teaching" class="nav-list">
                <span class="tab-text">教学</span>
            </router-link>
        </ul>
        <div class="as">
            <AppSplit></AppSplit>
        </div>
        <div class="view">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
        <AppFooter></AppFooter>
    </div>
</template>

<script>
    import AppFooter from "@/components/footer/Footer"
    import AppSplit from "@/components/base/Split"
    export default {
        name: "Neighborhood",
        components:{
            AppFooter,
            AppSplit
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
        background: #fff
        width: 100%
        height: 64px
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
                width: 25%
                height: 24px
                font-size: 18px
                text-align: center
                line-height: 24px
                font-weight: 400
            .icon
                width:6%
                height: 24px
                text-align: center
                line-height: 24px
                font-size: 18px
                color: #1B1B1B
                font-weight: 600
            .recode
                width: 12%
                height: 24px
                font-size: 18px
                text-align: center
                line-height: 24px
                font-weight: 400

    .header-nav
       position: fixed
       left: 0
       top: 64px
       z-index:2000
       background: #fff
       width: 100%
       height: 64px
       display: flex
       justify-content: space-around
       align-items: center
       .nav-list
          width: 20%
          height: 100%
          padding: 12px
          text-align: center
          line-height: 64px;
          box-sizing: border-box
          .tab-text
             font-size: 14px
             padding-bottom: 10px
          &.router-link-active
             .tab-text
                color: #181A55
                border-bottom:1px solid red
    .as
       width: 100%
       position: fixed
       left: 0
       top: 128px
       z-index:2000
    .view
       margin-top: 138px
</style>