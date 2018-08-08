<template>
  <div class="home">
    <App-Header></App-Header>
    <div>
      <div>
        <div>
          <div v-if="recommends.length" class="slider-wrapper">
            <App-Slider>
              <div v-for="item in recommends">
                <a :href="item.linkUrl">
                  <img :src="item.picUrl" alt="" height="150">
                </a>
              </div>
            </App-Slider>
          </div>
        </div>
        <div class="nav-lists">
          <ul class="navs">
            <li @click="onHandler(item.toKey)" class="nav-list" v-for="item in navList">
          <span class="nav-img">
            <img :src="item.imgUrl" alt="" height="56">
          </span>
              <span class="nav-text">{{item.text}}</span>
            </li>
          </ul>
        </div>
        <div class="hot-news">
       <span class="icon-news">
         <img :src="hotImg" alt="" width="20" height="15">
       </span>
          <ul class="hot-list">
            <li class="list">
              <a href="" class="list-a">
                <p class="list-p">中国接连公布航天大项目 中国接连公布航天大项目 中国接连公布航天大项目</p>
              </a>
            </li>
          </ul>
        </div>
        <AppMiddle></AppMiddle>
        <AppNewsBox></AppNewsBox>
      </div>
    </div>
    <AppFooter></AppFooter>
    <router-view></router-view>
  </div>
</template>

<script>
  import AppHeader from "@/components/Header"
  import AppSlider from "@/components/base/Slider"
  import AppMiddle from "@/components/middle/Middle"
  import AppNewsBox from "@/components/base/NewsBox"
  import AppFooter from "@/components/footer/Footer"
  import AppScroll from "@/components/base/Scroll"
export default {
  name: 'Home',
  components:{
      AppHeader,
      AppSlider,
      AppMiddle,
      AppNewsBox,
      AppFooter,
      AppScroll
  },
  data () {
    return {
        recommends:[
            {
              linkUrl:"https://hd.guahao.com/u/23843?H-3.1.0",
              picUrl:"https://kano.guahao.cn/LeD43684162?resize=750x336"
            },{
              linkUrl:"https://wy.guahao.com/patienteducation/detail/3d38441b-e4cc-4268-bb33-244a39d0a4ae?H-3.1.0",
              picUrl:"https://kano.guahao.cn/r5h44099261?resize=750x336"
            },{
              linkUrl:"https://wy.guahao.com/news/10778/?cs=zt118h5sy&H-3.1.0",
              picUrl:"https://kano.guahao.cn/kLv43896858?resize=750x336"
            },{
              linkUrl:"https://hd.guahao.com/u/23950?H-3.1.0",
              picUrl:"https://kano.guahao.cn/WmH43510636?resize=750x336"
            },{
              linkUrl:"https://hd.guahao.com/n/24004?chb=0174020020&H-3.1.0",
              picUrl:"https://kano.guahao.cn/Ms943961687?resize=750x336"
            }],
        navList:[
            {
              imgUrl:require("img/repair.png"),
              text:"报事报修",
              toKey:"repair"
            },{
              imgUrl:require("img/pay.png"),
              text:"物业缴费",
              toKey:"pay"
            },{
              imgUrl:require("img/trading-Area.png"),
              text:"园区商圈",
              toKey:"tradingarea"
            },{
                imgUrl:require("img/visitor.png"),
                text:"访客通行",
                toKey:"visitor"
            },{
              imgUrl:require("img/visitor.png"),
              text:"访客通行",
              toKey:"visitor"
        }],
        hotImg:require("img/hot.png")
    }
  },
  methods:{
      onHandler(toKey){
          this.$router.push({
              path: `/home/${toKey}`
          })
     }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~css/var.styl"
  .home
    width: 100%
    height: 100%
    .slider-wrapper
      margin-top: 64px
      position: relative
      width: 100%
      overflow: hidden
    .nav-lists
      margin-top: 13px
      width: 100%
      border-bottom:1px solid #E6E6E6;
      .navs
        padding: 0 0px 0 16px;
        display: flex;
        flex-wrap: wrap
        justify-content: space-between;
        .nav-list
          width: 72px
          .nav-img
            width: 56px
            display: block
          .nav-text
            width: 100%
            height: 39px
            line-height: 39px
            text-align: center
            font-size: 14px

    .hot-news
      width: 100%
      height: 35px
      background: #fff
      box-sizing: border-box
      padding: 0 24px;
      .icon-news
        float: left
        width: 20px
        height: 100%
        text-align: center
        line-height: 44px;
      .hot-list
        float: right
        width: 91%
        overflow: hidden
        .list
          height: 35px
          .list-p
            line-height: 35px
            font-size: 14px
            color: #000
            no-wrap();
</style>
