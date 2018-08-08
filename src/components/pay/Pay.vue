<template>
    <transition name="slide">
        <div class="pay">
            <App-Header :appName="nameTitle" :recode="recode"></App-Header>
            <div class="list">
                <span class="photo">
                    <img :src="posiInfo.photoImg" alt="" width="50" height="50">
                </span>
                <div class="person">
                    <div class="info">
                        <span class="name">{{posiInfo.name}}</span>
                        <span class="type">
                            <img :src="posiInfo.typeImg" alt="" width="24" height="13">
                        </span>
                    </div>
                    <div class="posi-info">
                        <span class="posi">
                            <img :src="posiInfo.posiImg" alt="" width="15" height="18">
                        </span>
                        <span class="posi-text">{{posiInfo.posiText}}</span>
                    </div>
                </div>
            </div>
            <AppSplit></AppSplit>
            <div class="recode-list">
                <ul class="recodes">
                    <li class="list-d" v-for="item in recodes">
                        <div class="lists">
                            <div class="recodes">
                                <span class="select"
                                      :class="{active:item.check}"
                                      @click="onSelect(item)"
                                >
                                     <span class="circle" v-show="item.check"></span>
                                </span>
                                <span class="icon">
                                    <img :src="item.moneyImg" alt="" width="40" height="40">
                                </span>
                                <div class="main">
                                    <span class="num">{{item.num.toFixed(2)}}</span>
                                    <span class="expect">{{item.expect}}</span>
                                </div>
                            </div>
                            <span class="go-to iconfont icon-qianjin" @click="selectItem(item.id)"></span>
                        </div>
                        <AppSplit></AppSplit>
                    </li>
                </ul>
            </div>
            <div class="rest"></div>
            <footer class="footer">
                <div style="width: 14%;" class="box" @click="allSelect">
                   <span class="select" :class="">
                     <span class="circle" v-show="status"></span>
                </span><span class="tyexty">全选</span>
                </div>
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
            <div style="background: #fcf5fc">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </div>
        </div>
    </transition>
</template>

<script>
    import AppHeader from "@/components/base/Recode-Header"
    import AppSplit from "@/components/base/Split"
    import AppPaySuccess from "@/components/pay/PaySuccess"
    export default {
        name: "Pay",
        components:{
            AppHeader,
            AppSplit,
            AppPaySuccess
        },
        data(){
            return {
                nameTitle:"物业缴费",
                recode:"缴费记录",
                posiInfo:{
                    photoImg:require("img/photo.png"),
                    name:"张山峰",
                    typeImg:require("img/type.png"),
                    posiImg:require("img/posi.png"),
                    posiText:"富阳富春一号院-鹭影苑-1幢-301室"
                },
                recodes:[{
                    id:1,
                    moneyImg:require("img/money.png"),
                    num:255,
                    expect:"2017年6月份代缴物业费",
                    check:false
                },{
                    id:2,
                    moneyImg:require("img/money.png"),
                    num:255,
                    expect:"2017年6月份代缴物业费",
                    check:false
                }],
                pay:[],
                isPayShow:false
            }
        },
        computed:{
            sum(){
                var that=this;
                var sums=0;
                this.recodes.forEach(function (item) {
                    if(item.check){
                        sums+=item.num
                    }
                })
                return sums.toFixed(2)
            },
            status(){
               var sta=this.recodes.every((item)=>{
                    return item.check;
                })
                return sta;
            }
        },
        methods:{
            onSelect(obj){
                obj.check=!obj.check;
            },
            selectItem(id){
                this.$router.push({
                    path:`/home/pay/${id}`,params:id
                })
            },
            allSelect(){
                var that=this;
                this.recodes.forEach(function (item) {
                    item.check=!item.check;
                })
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
                this.hide()
                this.$router.push({
                    path:'/paySuccess'
                })
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .pay
        position:fixed
        left: 0
        top: 0
        bottom: 0
        width: 100%
        height: 100%
        z-index:1000
        background: #fcf5fc
        &.slide-enter-active,&.slide-leave-active
            transition: all 0.5s
        &.slide-enter, &.slide-leave-to
            transform: translate3d(100%, 0, 0)
        .list
            margin-top: 64px
            background: #fff
            width: 100%
            height: 80px
            padding: 6px 12px
            display: flex
            justify-content:space-between;
            align-items: center
            .photo
                width: 50px
                height: 50px
            .person
               background: #fff
               width: 84%
               .info
                  width: 23%
                  height: 25px
                  display: flex
                  justify-content:space-between;
                  align-items: center
                  .name
                    width: 83%
                    font-size: 14px
                  .type
                    width: 24px
               .posi-info
                  width: 90%
                  display: flex
                  justify-content:space-between;
                  align-items: center
                  .posi
                    width: 15px
                    height: 18px
                  .posi-text
                    width: 91%
                    font-size: 14px


        .recode-list
           background: #fff
           width: 100%
           height: 80px
           .recodes
              background: #fff
              .lists
                 width: 100%
                 height: 80px
                 box-sizing: border-box
                 display: flex
                 justify-content:space-between
                 align-items: center
                 .recodes
                   width: 60%
                   display: flex
                   justify-content:space-around
                   align-items: center
                   .select
                      display: block
                      width: 12px
                      height: 12px
                      border-radius:50%;
                      border:1px solid red;
                      padding: 2px
                      position: relative
                      .circle
                          display: block
                          width: 10px
                          height: 10px
                          border-radius:50%;
                          border:1px solid red;
                          background: red
                          position: absolute
                          left: 50%
                          top: 50%
                          transform: translate(-50%,-50%)
                  .actives
                     border:1px solid #B05161;
                  .icon
                      display: block
                      width: 40px
                      height: 40px
                  .main
                      width: 50%
                      .num
                          display: block
                          width: 50%
                          height: 17px
                          font-size: 14px
                          color: #FF243B
                      .expect
                          display: block
                          width:140%
                          height: 17px
                          font-size: 14px
                          color: #000
                  .go-to
                      width: 24px
                      height: 24px
                      font-size: 18px
                      color: #B7B7B7
        .rest
            width: 100%
            height: 323px
            background: #FBF9FB
            position: absolute
            bottom: 0
            left: 0
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
            .box
               display: flex
               justify-content:space-between
               align-items: center
               .select
                   display: block
                   width: 12px
                   height: 12px
                   border-radius:50%;
                   border:1px solid red;
                   padding: 2px
                   position: relative
                   .circle
                       display: block
                       width: 10px
                       height: 10px
                       border-radius:50%;
                       border:1px solid red;
                       background: red
                       position: absolute
                       left: 50%
                       top: 50%
                       transform: translate(-50%,-50%)
               .actives
                   border:1px solid #B05161;
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