<template>
    <section class="wrapper">
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
            <div class="more iconfont icon-gengduo"></div>
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
    </section>
</template>

<script>
    export default {
        name: "VueSection",
        props:{
            list:{
                type:Object
            }
        }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
    .wrapper
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
</style>