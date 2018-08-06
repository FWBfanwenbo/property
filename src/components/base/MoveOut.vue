<template>
    <transition name="move-out">
        <div class="move-out" v-show="isShow">
            <ul class="report-box">
                <li class="list" v-for="(list,index) in reportList" @click="selectItem(list,index)">
                    <span class="text">{{list.name}}</span>
                </li>
            </ul>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "MoveOut",
        data(){
            return {
                isShow :false,
                datas:[],
                reportList:[
                    {
                        id:0,
                        name:"举报",
                        path:"report"
                    },{
                        id:1,
                        name:"赞过的人",
                        path:"praiseMan"
                    },{
                        id:2,
                        name:"评论过的人",
                        path:"commentMan"
                    }
                ]
            }
        },
        methods:{
            show(){
                this.isShow=true
            },
            hide(){
                this.isShow=false
            },
            selectItem(list,index){
                alert(index)
            }
        }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
   .move-out
       width: 100%
       max-height :200px
       position: fixed
       z-index: 4000
       left: 0
       bottom: 0
       transition: all 0.5s
       &.move-out-enter-active,&.move-out-leave-active
           transition: all 0.5s
           transform: translate3d(0, -50px, 0)
       .report-box
           margin-bottom: 50px
          .list
              width: 100%
              height: 40px
              background: #fff
              border-bottom:1px solid #E9E9EB
              text-align: center
              line-height: 40px
              font-size: 14px
          .cancel
              margin-top: 5px
</style>