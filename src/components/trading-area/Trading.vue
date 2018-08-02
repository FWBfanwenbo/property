<template>
    <div class="trading">
        <div class="inner">
            <div class="main">
                <ul class="inner-box">
                    <li class="inner-list" v-for="item in innerList">
                            <span class="img-box">
                                <img :src="item.innerImg" alt="" width="172" height="160">
                            </span>
                        <div class="bottom">
                            <div class="desc">
                                    <span class="hot-icon">
                                        <img :src="item.iconImg" alt="" width="30" height="15">
                                    </span>
                                <span class="hot-text">{{item.text}}</span>
                            </div>
                            <div class="posi-bottom">
                                    <span class="posi-icon">
                                        <img :src="item.poImg" alt="" width="10" height="12">
                                    </span>
                                <div class="posi-desc">
                                    <p class="posi-text">{{item.posiText}}</p>
                                    <p class="posi-info">{{item.posiDesc}}</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Trading",
        data(){
            return {
                innerList:[{
                    id:1,
                    innerImg:require("img/Fruits.png"),
                    iconImg:require("img/food.png"),
                    text:"小叶水果铺",
                    poImg:require("img/positi.png"),
                    posiText:"金河桥大道鉴湖景园1024号",
                    posiDesc:"距离我200米"
                },{
                    id:2,
                    innerImg:require("img/book.png"),
                    iconImg:require("img/bookStore.png"),
                    text:"韩寒图文",
                    poImg:require("img/positi.png"),
                    posiText:"金河桥大道鉴湖景园1024号",
                    posiDesc:"距离我200米"
                },{
                    id:2,
                    innerImg:require("img/book.png"),
                    iconImg:require("img/bookStore.png"),
                    text:"韩寒图文",
                    poImg:require("img/positi.png"),
                    posiText:"金河桥大道鉴湖景园1024号",
                    posiDesc:"距离我200米"
                },{
                    id:1,
                    innerImg:require("img/Fruits.png"),
                    iconImg:require("img/food.png"),
                    text:"小叶水果铺",
                    poImg:require("img/positi.png"),
                    posiText:"金河桥大道鉴湖景园1024号",
                    posiDesc:"距离我200米"
                }]
            }
        }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
    .trading
        .inner
            width: 100%
            background: #fcf5fc
            padding: 10px 3px
            box-sizing: border-box
            .main
                width: 100%
                .inner-box
                    display: flex
                    justify-content: space-around
                    flex-wrap: wrap
                    .inner-list
                        width: 172px
                        height: 250px
                        border-radius:3px;
                        background: #fff
                        box-shadow :1px -3px -1px 4px rgba(0,0,0,0.2);
                        margin-bottom: 20px
                        .img-box
                            display: block
                            width: 100%
                            height: 160px
                        .bottom
                            .desc
                                width: 80%
                                height: 37px
                                display: flex
                                justify-content: space-around
                                align-items: center
                                .hot-icon
                                    width: 21px
                                    height: 15px
                                .hot-text
                                    width: 60%
                                    font-size: 14px
                            .posi-bottom
                                display: flex
                                justify-content: space-between
                                .posi-icon
                                    width: 12px
                                    padding: 3px
                                    box-sizing: border-box
                                    vertical-align: top
                                .posi-desc
                                    width: 91%
                                    vertical-align: top
                                    .posi-text,.posi-info
                                        line-height: 2
                                        font-size: 12px
                                        color: #a2a2a2

</style>