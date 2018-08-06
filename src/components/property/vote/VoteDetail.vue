<template>
    <transition name="slide">
        <div class="vote-detail" ref="voteDetail">
            <div class="app-header">
                <div class="info">
                    <span @click="back" class="icon iconfont icon-2fanhui"></span>
                    <span class="text">{{appName}}</span>
                </div>
            </div>
            <div class="vote-detail-wrapper">
                <AppScroll class="scroll" ref="scroll">
                    <div>
                        <div class="title-posi">
                            <div class="tp" style="border-bottom: 1px solid #E3E9F3;">
                                <div class="titles">{{infoList.title}}</div>
                                <div class="posi">
                                    <span class="pos">{{infoList.posi}}</span>
                                    <div class="right">
                                        <span class="time">{{infoList.time}}</span>
                                        <span class="fabu">{{infoList.status}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mian">
                            <div class="img-box">
                                <img :src="img" alt="" width="100%" height="160">
                            </div>
                            <div class="article">
                                <p class="text">{{article}}</p>
                            </div>
                            <div class="vote-notice">
                                <span class="vote-title">感谢参与</span>
                                <p class="main-content">感谢参与,亲,本次选票每个账户只能头一次 为您喜欢的一方投上一票吧</p>
                            </div>
                        </div>
                        <form class="vote-box" ref="percentWrapper" action="">
                            <div style="border-bottom: 1px solid #eee;">
                                <ul class="content">
                                    <li class="vote-list" v-for="(option,index) in options">
                                        <div class="option-content">
                                            <div class="option clearfix">
                                                <div style="width: 15%;">
                                                 <span class="circle-box" @click="selectOption(option,index)" :class="{actives:option.status}">
                                                      <span class="inside-circle" :class="{active:option.status}"></span>
                                                 </span>
                                                </div>
                                                <div class="votexx-content">
                                                    <span class="option-text">{{option.cart}}、</span>
                                                    <span class="option-cart">{{option.optiontext}}</span>
                                                </div>
                                            </div>
                                            <div class="percent-wrapper">
                                                <div class="percent-box">
                                                    <span class="percent"></span>
                                                </div>
                                                <span class="percent-num">{{option.percent*100}}%</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div class="sub">
                                    <input type="submit" value="提交" id="submit">
                                </div>
                            </div>
                        </form>
                        <form action="" id="send-form" ref="sendFrom">
                            <textarea name="" id="input-content" placeholder="请输入内容"></textarea>
                            <div class="send-box">
                                <input type="submit" value="发送" id="send-btn">
                            </div>
                        </form>
                        <div class="comment-wrapper">
                            <div class="comment-total">评论共<span>{{total}}</span>条</div>
                            <ul class="comment-box" v-for="list in commentList">
                                <li class="comment-tr">
                                    <span class="author-photo">
                                        <img :src="list.likeImg" alt="">
                                    </span>
                                    <div class="tr-column">
                                        <div class="author-column">
                                            <div class="author-info">
                                                <span class="author-nickname">{{list.nick}}</span>
                                                <div class="position-info">
                                                    <span class="posi">{{list.posi}}</span>
                                                    <span class="time">{{list.time}}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="comment-content">
                                            <p class="text">{{list.text}}</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </AppScroll>
            </div>
        </div>
    </transition>
</template>

<script>
    import AppScroll from "@/components/base/Scroll"
    import {commentListMixin} from 'js/mixin'
    export default {
        name: "VoteDetail",
        mixins:[commentListMixin],
        components:{
            AppScroll
        },
        data(){
            return {
                appName:"大众选票详情",
                infoList:{
                    title:"谁的的旅行摄影制霸朋友圈.漳社区投票活动",
                    posi:"金昌物业",
                    time:"2017-09-07",
                    status:"发布"
                },
                img:require("img/article.png"),
                article:"《意见》还要求，优化退役军人创业环境，政府投资或社会共建的创业孵化基地和创业园区可设立退役军人专区，有条件的地区可专门建立退役军人创业孵化基地。退役军人创办中小企业，享受金融和税收优惠，鼓励社会资本设立退役军人创业基金，拓宽资金保障渠道。建立健全服务体系，加快建设全国贯通、实时共享、上下联动的退役军人就业创业服务信息平台，成立就业创业指导团队，引入社会力量支持退役军人就业创业。",
                options:[
                    {
                        id:0,
                        cart:"A",
                        optiontext:"周六组织烧烤活动",
                        percent:0.23,
                        status:false
                    },{
                        id:1,
                        cart:"B",
                        optiontext:"周六组织去春游",
                        percent:0.41,
                        status:false
                    },{
                        id:2,
                        cart:"C",
                        optiontext:"周六组织烧烤活动",
                        percent:0.23,
                        status:false
                    },{
                        id:3,
                        cart:"D",
                        optiontext:"周六组织去春游",
                        percent:0.41,
                        status:false
                    }
                ],
                sendContent:{
                    id:"",
                    likeImg:require("img/img_02.png"),
                    nick:"丐帮帮主",
                    posi:"金昌诚园",
                    commentNum:32,
                    text:"",
                    time:"2018-08-03"
                }
            }
        },
        computed:{
            total(){
                return this.commentList.length
            }
        },
        methods:{
            onHandlecommentList(commentList){
                const bottom=commentList.length>0?'60px':'';
                this.$refs.voteDetail.style.bottom=bottom;
                this.$refs.scroll.refresh();
            },
            back(){
                this.$router.push({path:"/property/vote/votePart"})
            },
            _initWidth(){
                let percentEl=this.$refs.percentWrapper.getElementsByClassName("percent");
                let percentBox=this.$refs.percentWrapper.getElementsByClassName("percent-box");
                let offsetWidth=percentBox[0].getBoundingClientRect().width;
                var arr=[].slice.call(percentEl);
                for(var i=0;i<arr.length;i++){
                    percentEl[i].style.width=`${this.options[i].percent*offsetWidth}px`
                }
            },
            selectOption(option,index){
                 for(let i=0;i<this.options.length;i++){
                     (function (i,option) {
                         if(option[i].id>=0){
                             if(option[i]["id"]===index){
                                 option[i].status=!option[i].status
                             }else{
                                 option[i].status=false
                             }
                         }
                     })(i,this.options)
                }
            },
        },
        mounted(){
            this._initWidth()
        }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
    @import "~css/var.styl"
    .vote-detail
        position:fixed
        left: 0
        top: 0
        width: 100%
        height: 100%
        z-index:3000
        background: #eee
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
            border-bottom:1px solid #E3E9F3;
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
        .vote-detail-wrapper
            position: absolute
            background: #fff
            left: 0
            top: 64px
            .scroll
                height:630px
                overflow: hidden
                .title-posi
                    height: 66px
                    padding: 0 12px
                    .titles
                        width: 100%
                        height: 35px
                        font-size: 16px
                        line-height: 35px
                    .posi
                        width: 100%
                        height: 27px
                        .pos
                            display: block
                            width: 40%
                            height: 100%
                            float: left
                            line-height: 16px
                            font-size: 12px
                            color: #000356
                        .right
                            width: 28%
                            height: 100%
                            float: right
                            .time
                                float: left
                                font-size: 12px
                                color: #7F7F7F
                                line-height: 16px
                            .fabu
                                float: right
                                font-size: 12px
                                color: #7F7F7F
                                line-height: 16px
                .mian
                    width: 100%
                    padding: 12px
                    box-sizing: border-box
                    .img-box
                        width: 100%
                        height: 160px
                    .article
                        margin-top: 16px
                        .text
                            font-size: 12px
                            line-height: 1.6

                    .vote-notice
                        margin-top: 34px
                        width: 100%
                        height: 90px
                        border-left:2px dashed red;
                        border-right:2px dashed red;
                        border-top:1px dashed red
                        border-bottom:1px dashed red;
                        position: relative
                        .vote-title
                            width: 180px
                            height: 35px
                            background: #FF4C60;
                            border-radius :20px;
                            font-size: 14px
                            color: #fff;
                            text-align: center
                            line-height: 35px
                            position: absolute
                            left: 50%
                            top: -18px
                            transform: translate(-50%,0)
                        .main-content
                            width: 100%
                            padding: 35px 16px 0 16px
                            box-sizing: border-box
                            text-align: center
                            line-height: 1.5
                            font-size: 16px
                .vote-box
                    margin-top: 15px
                    padding: 12px
                    box-sizing: border-box
                    .content
                       .vote-list
                           height: 100px
                           line-height: 100px
                           padding: 20px 0
                           box-sizing: border-box
                           border-bottom:1px solid #E3E9F3;
                           .option-content
                               width: 100%
                               height: 60px
                              .option
                                 height: 30px
                                 width: 60%
                                 display: flex
                                 justify-content: space-around
                                 align-items: center
                                 .circle-box
                                    display: block
                                    width: 12px
                                    height: 12px
                                    border-radius:50%;
                                    padding: 2px
                                    border:1px solid #000
                                    position: relative
                                    .inside-circle
                                        display: block
                                        width: 10px
                                        height: 10px
                                        border-radius:50%;
                                        background: #fff
                                        position: absolute
                                        left: 50%
                                        top: 50%
                                        transform: translate(-50%,-50%)
                                 .actives
                                     border:1px solid #B05161;
                                     .active
                                         background: red
                                 .votexx-content
                                     width: 80%
                                     height: 30px
                                     font-size: 14px
                                     line-height: 30px
                              .percent-wrapper
                                  width: 100%
                                  height: 30px
                                  padding-left: 10%
                                  box-sizing: border-box
                                  display: flex
                                  justify-content: space-around
                                  align-items: center
                                  .percent-box
                                      width: 60%
                                      height: 4px
                                      background: #f5f5f5
                                      line-height: 30px
                                      .percent
                                          width: 0
                                          display: block
                                          height: 4px
                                          background: red
                                  .percent-num
                                      display: block
                                      width: 10%
                                      height: 100%
                                      text-align: center
                                      line-height: 30px
                                      font-size: 14px
                                      color: red

                    .sub
                        width: 100%
                        height: 45px
                        text-align: center
                        margin-top: 30px
                        margin-bottom: 30px
                        #submit
                            width: 250px
                            height: 45px
                            background:#5E62A2
                            line-height: 45px
                            text-align: center
                            color: #fff
                            font-size: 18px
                            border-radius :20px
                #send-form
                    width: 100%
                    padding: 12px
                    box-sizing: border-box
                    #input-content
                        width: 100%
                        padding: 12px
                        box-sizing: border-box
                        height: 100px
                        border-radius :5px
                        border:1px solid #eee
                    .send-box
                        width: 100%
                        height:45px
                        #send-btn
                            margin-top: 15px
                            float: right
                            width: 100px
                            height: 45px
                            background:#5E62A2
                            line-height: 45px
                            text-align: center
                            color: #fff
                            font-size: 18px
                            border-radius :4px
                .comment-wrapper
                    width: 100%
                    padding: 12px
                    box-sizing: border-box
                    position: relative
                    .comment-total
                        width: 50%
                        height: 45px
                        text-align: left
                        line-height: 45px
                        position: absolute
                        left: 12px
                        top: -45px
                        font-size: 18px
                    .comment-box
                        .comment-tr
                            width: 100%
                            padding: 12px 0 12px 12px
                            box-sizing: border-box
                            display: flex
                            justify-content: space-between
                            .author-photo
                                width: 40px
                                height: 40px
                                border-radius :50%
                                img
                                    width: 40px
                                    height: 40px
                                    border-radius :50%
                            .tr-column
                                width: 87%
                                height: 100%
                                border-bottom:1px solid #eee
                                .author-column
                                    width: 100%
                                    height: 40px
                                    display: flex
                                    justify-content: space-between
                                    align-items: center
                                    .author-info
                                        width: 50%
                                        height: 100%
                                        .author-nickname
                                            display: block
                                            padding: 0 0 12px 12px
                                            width: 100%
                                            font-size: 14px
                                            color: #00398a
                                        .position-info
                                            width: 100%
                                            height: 20px
                                            padding: 0 12px
                                            .posi
                                                float: left
                                                font-size: 13px
                                                text-align: left
                                                color: #858382
                                            .time
                                                float: right
                                                font-size: 13px
                                                color: #858382
                                                text-align: right
                                    .author-right
                                        width: 20%
                                        height: 30px
                                        .praise-icon
                                            font-size: 18px
                                        .comment-num
                                            font-size: 14px

                                .comment-content
                                    width: 100%
                                    font-size: 12px
                                    padding: 12px
                                    box-sizing: border-box
                                    .text
                                        line-height: 1.6
                                        font-size: 14px
                                        color: #232323
</style>