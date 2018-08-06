<template>
    <transition name="slide">
        <div class="Visitor">
            <App-Header :appName="nameTitle"></App-Header>
            <AppSplit></AppSplit>
            <form action="" id="form">
                <div class="position">
                   <span class="posi-icon">
                       <img :src="position.iconImg" alt="" width="16" height="20">
                   </span>
                    <span class="posi-text">{{position.posiText}}</span>
                    <span class="go-to iconfont icon-qianjin"></span>
                </div>
                <div class="person">
                    <div class="xm">姓名: <span class="name">{{person.name}}</span></div>
                    <div class="phone">{{person.phone}}</div>
                </div>
                <AppSplit></AppSplit>
                <div class="sex-column">
                    <div class="s-left">
                        <span class="s-notice">选择类型:</span>
                    </div>
                    <div class="s-right">
                        <span @click="selectOption(item,index)" v-for="(item,index) in sexTrue" class="r-man" :class="{active:item.status}">{{item.text}}</span>
                    </div>
                </div>
                <div class="reset">{{noticetext}}</div>
                <input type="submit" value="生成通行证" id="submit">
            </form>
        </div>
    </transition>
</template>

<script>
    import AppHeader from "@/components/base/Recode-Header"
    import AppSplit from "@/components/base/Split"
    export default {
        name: "Praise",
        components:{
            AppHeader,
            AppSplit
        },
        data(){
            return {
                nameTitle:"投诉表扬",
                position:{
                    iconImg:require("img/position.png"),
                    posiText:"富阳富春一号院-鹭影苑-1幢-301室"
                },
                person:{
                    name:"张三丰",
                    phone:"123456789098"
                },
                fk:{
                    name:"王宁"
                },
                sexTrue:[{
                    id:0,
                    text:"表扬",
                    status:false
                },{
                    id:1,
                    text:"投诉",
                    status:false
                }],
                dfTime:"2017-06-22",
                plate:{
                    num:"浙A58E3CL"
                },
                noticetext: "车牌识别系统中字符切分和识别技术的研究"
            }
        },
        methods:{
            selectOption(option,index){
                for(let i=0;i<this.sexTrue.length;i++){
                    (function (i,option) {
                        if(option[i].id>=0){
                            if(option[i]["id"]===index){
                                option[i].status=!option[i].status
                            }else{
                                option[i].status=false
                            }
                        }
                    })(i,this.sexTrue)
                }
            },
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .Visitor
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
        #form
            width: 100%
            height: 500px
            margin-top: 64px
            position: relative
            .position
                width: 100%
                height: 45px
                padding: 0 12px;
                border-bottom:1px solid #E4E9F3;
                display: flex
                align-items: center
                .posi-icon
                    width: 24px
                    height: 24px
                .posi-text
                    width: 82%
                    font-size: 14px
            .go-to
                font-size: 18px
                color: #BDBDBD
            .person
                width: 100%
                height: 45px
                padding: 0 12px;
                box-sizing: border-box
                display: flex
                justify-content: space-between
                align-items: center
                .xm
                    width: 30%
                    font-size: 14px
                .phone
                    width: 30%
                    font-size: 14px

            .sex-column
                width: 100%
                height: 45px
                padding: 0 12px
                border-bottom:1px solid #E4E9F3;
                box-sizing: border-box
                display: flex
                justify-content: space-between
                align-items: center
                .s-left
                    width: 20%
                    font-size: 14px
                .s-right
                    width: 40%
                    display: flex
                    justify-content: space-between
                    align-items: center
                    .r-man
                        width: 60px
                        height: 25px
                        border:1px solid #BFBFBF;
                        font-size: 14px
                        text-align: center
                        border-radius :3px
                        line-height: 25px
                    .active
                        border:1px solid red;
                        color: red
            .reset
                width: 100%
                height: 300px
                padding: 16px
                font-size: 14px
            #submit
                width: 250px
                height: 45px
                background: #545B9D;
                border-radius :20px
                font-size: 14px
                color: #fff;
                text-align: center
                line-height: 45px
                position: absolute
                left: 50%
                bottom: 20px
                transform translate(-50%,20px)

</style>