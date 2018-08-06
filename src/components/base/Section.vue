<template>
    <div>
        <section class="wrapper" ref="sectionWrapper">
            <div class="right-triangle" :class="{'active-end':list.status==='已结束'}"><span class="span-text">{{list.status}}</span></div>
            <div class="top">
                <div class="left">
                <span class="photo">
                     <img :src="list.photo" alt="">
                </span>
                    <div class="info">
                        <span class="nickname">{{list.nickname}}</span>
                        <div class="pos-time">
                            <span class="posi">{{list.position}}</span>
                            <span class="time">{{list.time}}</span>
                        </div>
                    </div>
                </div>
                <div class="more iconfont icon-gengduo" @click="select"></div>
            </div>
            <div class="middle">
                <p class="text"><em class="ac">#活动#</em>{{list.text}}</p>
            </div>
            <div class="photo-column">
                <ul class="photo-box">
                    <li class="photo-list" v-for="item in list.imgList">
                        <img :src="item.url" alt="" width="113" height="113">
                    </li>
                </ul>
            </div>
            <div class="bottom">
                <ul class="mid">
                    <li class="like">
                        <div class="like-box">
                            <span class="icon iconfont icon-iconfontzhizuobiaozhun023148"></span>
                            <span class="num">565</span>
                        </div>
                    </li>
                    <li class="comment">
                        <div class="comment-box">
                            <span class="icon iconfont icon-pinglun"></span>
                            <span class="num">32</span>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    export default {
        name: "Section",
        props:{
            list:{
                type:Object
            }
        },
        methods:{
            select(){
                this.$root.eventHub.$emit("changel",this.list);
                this.$router.push({
                    path:`/neighborhood/share/${this.list.id}`
                });
            }
        },
        mounted(){
        }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
            .wrapper
                position: relative
                .right-triangle
                    width: 0;
                    height: 0;
                    border-top: 50px solid #ff515b;
                    border-right: 50px solid transparent;
                    text-align: center
                    position: absolute
                    left: 0
                    top: 0
                   .span-text
                      display: block
                      width: 100px
                      height: 30px
                      text-align: center
                      transform:rotate(-45deg)
                      line-height: 30px
                      color:#fff
                      position: absolute
                      left: -34px;
                      top: -47px;
                .active-end
                    border-top: 50px solid #2e4080;
                .top
                    padding: 6px 12px
                    box-sizing: border-box
                    height: 60px
                    display: flex
                    justify-content: space-between
                    align-items: center
                    .left
                        width: 60%
                        display: flex
                        justify-content: space-between
                        align-items: center
                        .photo
                            width: 40px
                            height: 40px
                            border-radius:50%;
                            img
                                width: 40px
                                height: 40px
                                border-radius:50%;
                        .info
                            width: 75%
                            .nickname
                                width: 100%
                                font-size: 14px
                                color: #42578C
                            .pos-time
                                margin-top: 5px
                                .posi
                                    float: left
                                    width: 62px
                                    font-size: 14px
                                    color: #A7A7A7
                                .time
                                    float: right
                                    width:80px
                                    font-size: 14px
                                    color: #878787
                    .more
                        width: 24px
                        height: 24px
                        font-size: 18px
                        color: #919191
                .middle
                    padding: 6px 12px
                    box-sizing: border-box
                    width: 100%
                    height: 60px
                    .text
                        font-size: 13px
                        line-height: 1.5
                        text-overflow: ellipsis
                        overflow: hidden
                        white-space: wrap
                        .ac
                            font-size:14px
                            font-style :normal;
                            color: #FF316A
                .photo-column
                    padding: 6px 12px
                .photo-box
                    width: 100%
                    height: 113px
                    display: flex
                    justify-content: space-between
                    .photo-list
                        width: 113px
                        height: 113px
                .bottom
                    padding:0 12px
                    box-sizing: border-box
                    width: 100%
                    margin-top: 12px
                    height: 34px
                    border-top:1px solid #E8E8E8;
                    border-bottom:1px solid #E8E8E8;
                    .mid
                        display: flex
                        justify-content: space-between
                        align-items: center
                        box-sizing: border-box
                        .like
                            width: 50%
                            padding: 12px
                            box-sizing: border-box
                            .like-box
                                width: 117%
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