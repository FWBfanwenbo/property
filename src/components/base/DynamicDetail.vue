<template>
    <transition name="slide">
        <div class="dynamic-detail">
            <div class="app-header">
                <div class="info">
                    <span @click="back" class="icon iconfont icon-2fanhui"></span>
                    <span class="text">动态详情</span>
                    <span class="icon iconfont icon-gengduo"></span>
                </div>
            </div>
            <div class="view">
                <AppVueSection :list="list"></AppVueSection>
                <div class="bottom-mi">
                    <ul class="mid">
                        <li class="like" @click="showPraise">
                            <div class="like-box">
                                <span class="icon iconfont icon-iconfontzhizuobiaozhun023148"></span>
                                <span class="num">565</span>
                            </div>
                            <span class="line" v-show="isLike"></span>
                        </li>
                        <li class="comment" @click="showComment">
                            <div class="comment-box">
                                <span class="icon iconfont icon-pinglun"></span>
                                <span class="num">32</span>
                            </div>
                            <span class="line" v-show="isComment"></span>
                        </li>
                    </ul>
                </div>
            </div>
            <Show ref="showHide">
                <div class="like-wrapper" ref="likeWrapper">
                    <AppScroll ref="scroll"  style="height: 100%;overflow: hidden;">
                        <div>
                            <ul class="like-box">
                                <li class="like-list" v-for="list in likelist">
                        <span class="like-photo">
                            <img :src="list.likeImg" alt="">
                        </span>
                                    <div class="like-info">
                                        <div class="like-mid">
                                            <span class="like-nickname">{{list.nick}}</span>
                                            <span class="like-posi">{{list.posi}}</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </AppScroll>
                </div>
            </Show>
            <Show ref="showCommemt">
                <div class="comment-wrapper" ref="commentWrapper">
                    <AppScroll ref="commentScroll" style="height: 100%;overflow: hidden;">
                        <div>
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
                                            <div class="author-right">
                                                <span class="praise-icon iconfont icon-iconfontzhizuobiaozhun023148"></span>
                                                <span class="comment-num">{{list.commentNum}}</span>
                                            </div>
                                        </div>
                                        <div class="comment-content">
                                            <p class="text">{{list.text}}</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </AppScroll>
                </div>
            </Show>
            <div class="bottom">
                <ul class="mid-posi">
                    <li class="like">
                        <div class="like-box">
                            <span class="icon iconfont icon-iconfontzhizuobiaozhun023148"></span>
                            <span class="num">点赞</span>
                        </div>
                    </li>
                    <li class="comment">
                        <div class="comment-box">
                            <span class="icon iconfont icon-pinglun"></span>
                            <span class="num">评论</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </transition>
</template>

<script>
    import AppVueSection from "@/components/neighborhood/VueSection"
    import Show from "@/components/neighborhood/DPraise"
    import AppScroll from "@/components/base/Scroll"
    import {recommendListMixin,commentListMixin} from 'js/mixin'
    export default {
        name: "DynamicDetail",
        mixins:[recommendListMixin,commentListMixin],
        components:{
            AppVueSection,
            AppScroll,
            Show
        },
        data(){
            return {
                list:{
                    id:1,
                    photo:require("img/activity_01.png"),
                    nickname:"天山童姥",
                    position:"金昌诚园",
                    time:"05-30 15:04",
                    text:"爱的传递,有你添翼,本次活动的第一站有每户参赛家庭赠书并在扉页上写上一句寄语的方式参与公益,献出...",
                    imgList:[{
                        url:require("img/activity_01.png")
                    }],
                    status:"进行中"
                },
                isLike:false,
                isComment:false
            }
        },
        methods:{
            onHandlePlaylist(likelist){
                const bottom=likelist.length>0?'60px':'';
                this.$refs.likeWrapper.style.bottom=bottom;
                this.$refs.scroll.refresh();
            },
            onHandlecommentList(commentList){
                const bottom=commentList.length>0?'60px':'';
                this.$refs.commentWrapper.style.bottom=bottom;
                this.$refs.commentScroll.refresh();
            },
            back(){
                this.$router.back()
            },
            showPraise(){
                this.$refs.showHide.show();
                this.$refs.showCommemt.hide()
                setTimeout(()=>{
                    this.$refs.scroll.refresh();
                },100)
                this.isLike=true;
                this.isComment=false
            },
            showComment(){
                this.$refs.showHide.hide();
                this.$refs.showCommemt.show()
                setTimeout(()=>{
                    this.$refs.commentScroll.refresh();
                })
                this.isLike=false;
                this.isComment=true
            }
        },
        mounted(){
            this.$refs.showHide.show();
            this.isLike=true;
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .dynamic-detail
        position:fixed
        left: 0
        top: 0
        bottom: 0
        width: 100%
        height: 100%
        z-index:5000
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
            background: #fff
            border-bottom: 1px solid #E8E8E8
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


        .view
            margin-top: 64px
            background: #fff
            .bottom-mi
                box-sizing: border-box
                width: 100%
                margin-top: 12px
                z-index: 2000
                height: 45px
                border-top:1px solid #E8E8E8;
                border-bottom:1px solid #E8E8E8;
                .mid
                    display: flex
                    width: 60%
                    justify-content: space-between
                    align-items: center
                    background: #fff
                    box-sizing: border-box
                    .like
                        width: 50%
                        padding: 12px
                        box-sizing: border-box
                        position: relative
                        .like-box
                            width: 86%
                            justify-content: space-between
                            align-items: center
                            box-sizing: border-box
                            text-align: center
                            .icon,.num
                                width: 45%
                                font-size: 14px
                        .line
                            width: 40%
                            height: 2px
                            position: absolute
                            left: 50%
                            bottom: 12%
                            background: red
                            transform:translate(-50%,0)
                    .comment
                        width: 50%
                        padding: 12px
                        box-sizing: border-box
                        position: relative
                        .comment-box
                            width: 100%
                            justify-content: space-between
                            align-items: center
                            box-sizing: border-box
                            text-align: center
                            .icon,.num
                                width: 45%
                                font-size: 14px
                        .line
                            width: 40%
                            height: 2px
                            position: absolute
                            left: 50%
                            bottom: 12%
                            background: red
                            transform:translate(-50%,0)
        .like-wrapper
            width: 100%
            position: fixed
            left: 0
            top: 370px
            height: 242px
           .like-box
              .like-list
                 width: 100%
                 height: 60px
                 padding-left: 10px
                 box-sizing: border-box
                 display: flex
                 justify-content: space-between
                 align-items: center
                 .like-photo
                     width: 30px
                     height: 30px
                     border-radius :50%;
                     img
                         width: 30px
                         height: 30px
                         border-radius :50%;
                 .like-info
                     width: 90%
                     height: 100%
                     border-bottom:1px solid #E3E9F3;
                     .like-mid
                         width: 100%
                         height: 40px
                         padding-top: 10px
                         .like-nickname
                             display: block
                             width: 50%
                             height: 20px;
                             line-height: 20px
                             font-size: 14px
                             color: #00398A
                         .like-posi
                             display: block
                             width: 40%
                             height: 20px;
                             .text
                                 line-height: 20px
                                 font-size: 14px
                                 color: #858382

        .comment-wrapper
            width: 100%
            position: fixed
            left: 0
            top: 370px
            height: 242px
            .comment-box
               .comment-tr
                   width: 100%
                   height: 128px
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
                       border-bottom:1px solid #E3E9F3;
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
        .bottom
             box-sizing: border-box
             background:#fff
             width: 100%
             height: 50px
             z-index: 2000
             border-top:1px solid #E8E8E8;
             position: fixed
             left: 0
             bottom: -8px
             .mid-posi
                 display: flex
                 padding: 0
                 justify-content: space-between
                 align-items: center
                 .like
                     width: 50%
                     padding: 12px
                     box-sizing: border-box
                     .like-box
                         justify-content: space-between
                         align-items: center
                         box-sizing: border-box
                         border-right:1px solid #e9e9e9
                         text-align: center
                         .icon,.num
                             width: 45%
                             font-size: 14px
                 .comment
                     width: 50%
                     padding: 12px
                     box-sizing: border-box
                 .comment-box
                     width: 100%
                     justify-content: space-between
                     align-items: center
                     box-sizing: border-box
                     text-align: center
                 .icon,.num
                     width: 45%
                     font-size: 14px
</style>