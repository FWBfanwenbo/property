<template>
    <div class="vote-part">
        <ul class="vote-wrapper">
            <li class="part-box" v-for="list in partList">
                <div class="img-box">
                    <img :src="list.partImg" alt="" width="100%" height="160">
                </div>
                <div class="list-bottom">
                    <span class="title"  @click="select(list)">{{list.title}}</span>
                    <span class="part-time">{{list.time}}</span>
                    <span class="part-status" :class="{'end':list.isEnd}">{{list.status}}</span>
                </div>
            </li>
        </ul>
        <div class="views">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
    import AppSplit from "@/components/base/Split"
    export default {
        name: "VotePart",
        components:{
            AppSplit
        },
        data(){
            return {
                partList:[
                    {
                        id:1,
                        partImg:require("img/one.png"),
                        title:"谁的的旅行摄影制霸朋友圈.漳社区投票活动",
                        time:"2017-07-0-12至2017-06-15",
                        status:"进行中",
                        isEnd:false
                    },{
                        id:2,
                        partImg:require("img/two.png"),
                        title:"谁的的旅行摄影制霸朋友圈.漳社区投票活动",
                        time:"2017-07-0-12至2017-06-15",
                        status:"已结束",
                        isEnd:true
                    }
                ]
            }
        },
        methods:{
            select(list){
                this.$router.push({
                    path:`/property/vote/votePart/${list.id}`
                })
            }
        }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
    .vote-part
        .vote-wrapper
           .part-box
               width: 100%
               height: 260px
               border-radius :3px
               background: #fff
               margin-bottom: 12px
               box-shadow:-5px 0px -1px -3px rgba(0,0,0,0.1)
               .img-box
                   width: 100%
                   height: 160px
               .list-bottom
                   padding: 0 12px
                   .title
                       width: 100%
                       height: 40px
                       font-size: 14px
                       text-align: left
                       line-height: 40px
                   .part-time
                       display: block
                       width: 100%
                       height: 27px
                       line-height: 20px
                       font-size: 14px
                       color: #dbdbdb
                   .part-status
                       display: block
                       width: 50px
                       height: 20px
                       font-size: 12px
                       color: #fff
                       background: #c9656f
                       text-align: center
                       line-height: 20px
                       border-radius :3px
                       &.end
                           background: #d0d0d0

        .views
            background: #fff
</style>