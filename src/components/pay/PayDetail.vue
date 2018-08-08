<template>
    <transition name="slide">
      <div class="pay-detail">
          <div class="app-header">
              <div class="info">
                  <span @click="back" class="icon iconfont icon-2fanhui"></span>
                  <span class="text">{{appName}}</span>
              </div>
          </div>
          <div class="app-split">
              <App-Split></App-Split>
          </div>
          <div class="middle">
              <div class="explain">
                  <span class="icon">
                      <img :src="explain.img" alt="" width="40">
                  </span>
                  <span class="text">{{explain.text}}</span>
              </div>
              <div class="momeny">
                  <div class="money">
                      <span class="icon iconfont icon-renminbi"></span>
                      <span class="text">{{money.num}}</span>
                  </div>
                  <div class="status">{{money.status}}</div>
              </div>
          </div>
          <div class="pay-info">
              <ul class="pay-type">
                  <li class="list" v-for="item in pay">
                      <span class="pay-list">{{item.info}}</span>
                      <span class="type-list">{{item.type}}</span>
                  </li>
              </ul>
          </div>
          <div class="pay-mode">请选择支付方式</div>
          <div class="pay-money">
              <ul class="modes">
                  <li class="pay-list" v-for="item in payMoney">
                      <div class="main">
                          <span class="select" @click="onSelect(item.id)" :class="{actives:currentId===item.id}">
                              <span class="circle" v-show="currentId===item.id"></span>
                          </span>
                          <span class="icon">
                              <img :src="item.iconImg" alt="" width="25" height="25">
                          </span>
                          <span class="pay-text">{{item.payText}}</span>
                      </div>
                  </li>
              </ul>
          </div>
          <div class="rest"></div>
          <footer class="footer">
              <div class="tatol">合计: <span class="sum">{{sum}}</span></div>
              <div class="goto-pay" @click="toPay">去支付</div>
          </footer>
          <div class="pay-box" v-show="isPayShow">
              <span class="pay-top">您需要支付人民币{{sum}}元</span>
              <div class="pay-bottom">
                  <span class="make-sure" @click="makePay">确定</span>
                  <span class="cancel" @click="hide">取消</span>
              </div>
          </div>
          <keep-alive>
              <router-view></router-view>
          </keep-alive>
      </div>
    </transition>
</template>

<script>
    import AppHeader from "@/components/base/App-Header"
    import AppSplit from "@/components/base/Split"
    export default {
        name: "PayDetail",
        components:{
            AppHeader,
            AppSplit
        },
        data(){
            return {
                appName:"物业缴费",
                explain:{
                    img:require("img/exp.png"),
                    text:"2017年6月份代缴物业费"
                },
                money:{
                    num:"251.00",
                    status:"待支付"
                },
                pay:[{
                    info:"缴费说明",
                    type:"物业缴费"
                },{
                    info:"收款方",
                    type:"金昌物业服务管理有限公司"
                }],
                payMoney:[{
                    id:1,
                    iconImg:require("img/balance.png"),
                    payText:"余额支付"
                },
                    {
                        id:2,
                        iconImg:require("img/alipay.png"),
                        payText:" 支 付 宝"
                    },
                    {
                        id:3,
                        iconImg:require("img/WeChat.png"),
                        payText:"微信支付"
                    }],
                currentId:0,
                sum:"255.00",
                isPayShow:false
            }
        },
        methods:{
            onSelect(id){
                this.currentId=id;
            },
            back(){
                this.$router.push({path:"/home/pay"})
            },
            toPay(){
                if(!sessionStorage.loginInfo){
                    this.$router.push({
                        path:"/login"
                    })
                }
                this.isPayShow=true
            },
            hide(){
                this.isPayShow=false
            },
            makePay(){
                this.toPay();
                setTimeout(()=>{
                    this.hide()
                    this.$router.push({
                        path:'/paySuccess'
                    })
                },100)
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .pay-detail
      position:fixed
      left: 0
      top: 0
      bottom: 0
      width: 100%
      height: 100%
      z-index:5000
      background: #fcf5fc
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
        background: #fff
        .info
            width: 100%;
            height: 24px
            box-sizing: border-box
            padding: 0 16px
            position: absolute
            left: 0
            bottom: 12px
            .text
                float: right
                width: 90%
                height: 24px
                font-size: 18px
                text-align: center
                line-height: 24px
                font-weight: 400
            .icon
                float: left
                width: 24px
                height: 24px
                text-align: center
                line-height: 24px
                font-size: 18px
                color: #1B1B1B
                font-weight: 600
      .app-split
        margin-top: 64px
      .middle
          width: 100%
          height: 160px
          position: relative
          background: #fff
          border-bottom:1px solid #E9E8E9;
        .explain
          width: 60%
          height: 80px
          position: absolute
          left: 50%
          top: 0
          transform:translate(-50%,0)
          display: flex
          justify-content: space-between
          align-items: center
          .icon
              width: 40px
              height: 40px
          .text
              font-size: 16px
        .momeny
            width: 22%
            height: 80px
            position: absolute
            left: 50%
            top: 80px
            transform:translate(-50%,0)
            .money
                font-size: 20px
                font-weight: 900
                display: flex
                justify-content: space-between
                align-items: center
                .icon
                    font-size: 18px
                    font-weight: 800
            .status
                width: 100%
                color: #5E5C5C
                margin-top: 10px
                font-size: 14px
                text-align: center
                line-height: 20px
        .pay-info
            background: #fff
           .pay-type
               .list
                   width: 100%
                   height: 45px
                   box-sizing: border-box
                   padding: 0 12px;
                   font-size: 14px
                   display: flex
                   justify-content: space-between
                   align-items: center
                   border-bottom:1px solid #E9E8E9
                   &:nth-child(2)
                      border:none
                   .pay-list
                       color: #000
                   .type-list
                       color: #656364
        .pay-mode
            width: 100%
            height: 40px
            text-align: left
            line-height: 40px
            box-sizing: border-box
            padding: 0 12px;
            background: #F9F9F9;
            font-size: 14px
            color: #7B7B7B

        .pay-money
            width: 100%
            background: #fff
            .modes
                width: 100%
                box-sizing: border-box
                padding-right:25px;
                .pay-list
                    height: 45px
                    width: 100%;
                    box-sizing: border-box
                    border-bottom:1px solid #D6D6D6;
                    &:last-child
                        border:none
                    .main
                        padding-left: 12px
                        width: 50%
                        height: 45px
                        float: left
                        display: flex
                        justify-content: space-around
                        align-items: center
                        .select
                            width: 16px
                            height: 16px
                            border:1px solid #A0A5A0;
                            border-radius :50%;
                            padding:2px;
                            box-sizing: border-box
                            position: relative
                            .circle
                                width: 8px
                                height: 8px
                                border-radius :50%;
                                border:1px solid #B05161;
                                background: red
                                position: absolute
                                left: 50%
                                top: 50%
                                transform: translate(-50%,-50%)
                        .actives
                            border:1px solid #B05161;
                        .icon
                            width: 25px
                            height: 25px
                        .pay-text
                            width: 87px
                            font-size: 14px

        .rest
            width: 100%
            height: 165px
            background: #FBF9FB
        .footer
            width: 100%
            height: 50px
            z-index :3000;
            background: #fff;
            padding: 0 12px;
            border-bottom:1px solid #E1E0E3;
            position: fixed
            left: 0
            bottom: 0
            display: flex
            justify-content: space-between
            box-sizing: border-box
            align-items: center
            .tatol
               width: 30%
               font-size: 14px
               .sum
                   color: red
                   font-size: 14px
            .goto-pay
                width: 82px
                height: 30px
                background: #6466A2;
                font-size: 14px
                color: #fff
                text-align: center
                line-height: 30px;
                border-radius:3px;
        .pay-box
            width: 250px
            height: 150px
            z-index: 4000
            background: #000
            color: #fff
            opacity :0.8
            border-radius :10px;
            position: absolute
            top: 50%
            left: 50%
            transform: translate(-50%,-50%)
            padding: 20px
            box-sizing: border-box
            &.slide-enter-active,&.slide-leave-active
                transition: all 0.5s
                opacity :0
            &.slide-enter, &.slide-leave-to
                opacity :1
            .pay-top
                display: block
                width: 100%
                height: 50px
                font-size: 14px
                text-align: center
                line-height: 50px
                border-bottom:1px solid #7d7d7d;
            .pay-bottom
                margin-top: 20px
                width: 100%
                height: 50px
            .make-sure
                width: 50%
                font-size: 14px
                border-radius :5px
                text-align: center
                line-height: 50%
                float: left
            .cancel
                width: 50%
                font-size: 14px
                border-radius :5px
                text-align: center
                line-height: 50%
                float: left
</style>