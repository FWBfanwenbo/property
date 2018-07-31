<template>
    <div class="footer">
        <ul class="footer-wrapper">
            <router-link tag="li" :to="{path:'/home'}" class="footer-list">
                <span class="icon iconfont icon-home"></span>
                <span class="footer-text">首页</span>
            </router-link>
            <router-link tag="li" :to="{path:'/property'}" class="footer-list">
                <span class="icon iconfont icon-wuye"></span>
                <span class="footer-text">物业</span>
            </router-link>
            <router-link tag="li" :to="{path:'/telephone'}" class="footer-list">
                <span class="icon iconfont icon-haofangtuo400iconfontdianhuaanniu"></span>
                <span class="footer-text">常用电话</span>
            </router-link>
            <router-link tag="li" :to="{path:'/neighborhood'}" class="footer-list">
                <span class="icon iconfont icon-linli"></span>
                <span class="footer-text">邻里</span>
            </router-link>
            <router-link tag="li" :to="{path:'/myMessage'}" class="footer-list">
                <span class="icon iconfont icon-wode"></span>
                <span class="footer-text">我的</span>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
    .footer
      width: 100%
      height: 50px
      z-index: 1000
      position: fixed
      left: 0
      bottom:0px
      background: #fff
      border-top: 1px solid #ede9ed;
      .footer-wrapper
        width: 100%
        height: 100%
        display: flex
        flex-wrap: nowrap
        justify-content:space-around
        align-items: center
        .footer-list
          .footer-text
            height: 22px
            line-height: 22px
            display:block
            font-size: 14px
          .icon
            display: block
            font-size: 20px
            text-align: center
            height: 22px
            line-height: 22px
          &.router-link-active
            .footer-text,.icon
              color: #897c6c
              text-shadow: 0px 0px 1px #af998e,0 0 0 #000;

</style>