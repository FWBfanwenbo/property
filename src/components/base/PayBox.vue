<template>
    <div class="pay-box" v-show="isShow">
        <span class="pay-top">您需要支付人民币{{sum}}元</span>
        <div class="pay-bottom">
            <span class="make-sure" @click="makePay">确定</span>
            <span class="cancel" @click="hide">取消</span>
        </div>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    export default {
        name: "PayBox",
        props:{
            sum:{
                type:String
            }
        },
        data(){
            return {
                isShow:false
            }
        },
        methods:{
            show(){
                this.isShow=true
            },
            hide(){
                this.isShow=false
            },
            makePay(){
                setTimeout(()=>{
                    this.$router.push({
                        path:'/home/pay/paySuccess'
                    },100)
                })
            }
        }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
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