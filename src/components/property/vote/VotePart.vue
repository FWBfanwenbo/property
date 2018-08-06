<template>
    <div class="vote-part" ref="votePart">
        <AppScroll ref="scroll" style="height: 100%;overflow: hidden;">
            <div>
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
            </div>
        </AppScroll>
        <div class="views">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
    import AppSplit from "@/components/base/Split"
    import AppScroll from "@/components/base/Scroll"
    import {playlistMixin} from 'js/mixin'
    export default {
        name: "VotePart",
        mixins:[playlistMixin],
        components:{
            AppSplit,
            AppScroll
        },
        data(){
            return {
            }
        },
        methods:{
            onHandlePlaylist(playlist){
                const bottom=playlist.length>0?'60px':'';
                this.$refs.votePart.style.bottom=bottom;
                this.$refs.scroll.refresh();
            },
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
        position: fixed
        z-index: 6000
        left: 0
        top:143px
        bottom: 0
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