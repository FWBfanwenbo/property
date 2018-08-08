<template>
    <transition name="slide">
        <div class="my-data">
            <div class="app-header">
                <div class="info">
                    <span @click="back" class="icon iconfont icon-2fanhui"></span>
                    <span class="text">{{appName}}</span>
                </div>
            </div>
            <div style="margin-top: 64px;">
                <AppSplit></AppSplit>
            </div>
            <div class="data-wrapper">
                <div class="column-data">
                    <div class="photo-tr">
                        <span class="photo-left">{{photo.type}}</span>
                        <div class="photo-right">
                            <span class="photo-box">
                                <img :src="photo.imgUrl" alt="">
                            </span>
                            <span class="photo-icon iconfont icon-qianjin"></span>
                        </div>
                    </div>
                    <div class="data-tr" v-for="list in dataList">
                        <span class="tr-left">{{list.type}}</span>
                        <div class="tr-right">
                            <span class="data-text">{{list.name}}</span>
                            <span class="icon iconfont icon-qianjin"></span>
                        </div>
                    </div>
                </div>
                <div class="column-data" style="margin-top: 15px;">
                    <div class="edit-tr">
                        <span class="edit-left">修改登录密码</span>
                        <span class="edit-icon iconfont icon-qianjin"></span>
                    </div>
                    <div class="edit-tr">
                        <span class="edit-left">重置支付密码</span>
                        <span class="edit-icon iconfont icon-qianjin"></span>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import AppSplit from "@/components/base/Split"
    export default {
        name: "MyData",
        components:{
            AppSplit
        },
        data(){
            return {
                appName:"我的资料",
                photo:{
                  type:"头像",
                  imgUrl:require('img/img_02.png')
                },
                dataList:[
                    {
                        type:"姓名",
                        name:"张三丰"
                    },
                    {
                        type:"昵称",
                        name:"笑傲江湖"
                    },{
                        type:"手机号码",
                        name:"12345678909"
                    },{
                        type:"性别",
                        name:"男"
                    },{
                        type:"出生日期",
                        name:"1895-05-27"
                    },
                ]
            }
        },
        methods:{
            back(){
                this.$router.push({path:"/myMessage/setUp"})
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .my-data
        position:fixed
        left: 0
        top: 0
        bottom: 0
        width: 100%
        height: 100%
        z-index:4000
        background: #f3f4f8
        &.slide-enter-active,&.slide-leave-active
            transition: all 0.5s
        &.slide-enter, &.slide-leave-to
            transform: translate3d(100%, 0, 0)
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
        .data-wrapper
            width: 100%
            height: 600px
            background: #F3F4F8
            .column-data
                background :#fff
                .data-tr,.edit-tr
                    width: 100%
                    height: 50px
                    padding: 0 12px
                    box-sizing: border-box
                    border-bottom:1px solid #F3F4F8
                    .tr-left,.edit-left
                        display: block
                        width: 30%
                        height: 100%
                        float: left
                        line-height: 50px
                        font-size: 14px
                    .tr-right
                        width: 33%
                        height: 100%
                        float: right
                        display: flex
                        justify-content: space-between
                        align-items: center
                        .data-text
                            width: 80%;
                            text-align: right
                            font-size: 14px
                        .icon
                            font-size: 18px
                    .edit-icon
                        float: right
                        display: block
                        width: 20px
                        height: 100%
                        font-size: 18px
                        line-height: 50px
                .photo-tr
                    width: 100%
                    height: 100px
                    padding: 0 12px
                    box-sizing: border-box
                    border-bottom:1px solid #F3F4F8
                    .photo-left
                        display: block
                        width: 30%
                        height: 100%
                        float: left
                        line-height: 100px
                        font-size: 14px
                    .photo-right
                        width: 22%
                        height: 100%
                        float: right
                        display: flex
                        justify-content: space-between
                        align-items: center
                        .photo-box
                            width: 50px
                            height: 50px
                            border-radius :50%
                            float: right
                            font-size: 14px
                            img
                                width: 50px
                                height: 50px
                                border-radius :50%
                        .data-icon
                            font-size: 18px
                            color: #F3F4F8
</style>