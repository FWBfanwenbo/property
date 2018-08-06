<template>
    <div class="notice">
        <div class="main">
            <ul class="info-box" ref="infoWrapper">
                <li class="info-list" v-for="list in infoList">
                    <span class="time">{{list.time}}</span>
                    <div class="list-box">
                        <div class="top">
                            <span class="type">{{list.type}}</span>
                            <p class="title">{{list.title}}</p>
                        </div>
                        <div class="content">
                            <p class="text">{{list.text}}</p>
                        </div>
                        <a href="" class="link">点击查看</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Notice",
        data(){
            return {
                infoList:[
                    {
                        time:"05-26",
                        type:"业主",
                        title:"业主信息审核:未通过",
                        text:"亲爱的用户:您提交的信息审核未通过,仔细核对后请重新填写"
                    },
                    {
                        time:"05-16",
                        type:"业主",
                        title:"本周六家庭团体环西湖15公里暴走活动",
                        text:"亲爱的用户:您提交的信息审核未通过,仔细核对后请重新填写"
                    },
                    {
                        time:"05-16",
                        type:"物业",
                        title:"共享单车禁止入园通知",
                        text:"亲爱的用户:您提交的信息审核未通过,仔细核对后请重新填写"
                    }
                ]
            }
        },
        methods:{
            colorList(){
                var ele=this.$refs.infoWrapper.getElementsByClassName("type");
                var color=["#ff4a5f","#738af0","orange"];
                for(var i=0;i<color.length;i++){
                    ele[i].style.backgroundColor=color[i]
                }
            }
        },
        mounted(){
            this.colorList()
        }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
    @import "~css/var.styl"
    .notice
        width: 100%
        .main
           .info-box
              .info-list
                  width: 100%
                  height: 150px
                  margin-top: 5px
                  padding: 12px
                  box-sizing:border-box
                  .time
                      display: block
                      width: 100%
                      height: 30px
                      text-align: center
                      line-height: 20px
                      font-size: 14px
                      color: #7d7d7d
                  .list-box
                      height: 118px
                      background: #fff
                      border-radius :3px
                      border:1px solid #eae9e9
                      padding: 12px
                      box-sizing: border-box
                      .top
                          width: 100%
                          height: 30px
                          display: flex
                          justify-content: space-between
                          align-items:center
                          .type
                              width: 40px
                              height: 20px
                              background:#ff4a5f
                              border-radius :3px
                              text-align: center
                              line-height: 20px
                              font-size: 12px
                              color: #fff
                          .title
                              font-weight: bold
                              width: 86%
                              padding-right: 5px
                              box-sizing: border-box
                              font-size: 16px
                              no-wrap()
                      .content
                          height: 40px
                          width: 100%
                          .text
                              font-size: 14px
                              line-height: 1.6
                      .link
                          display: block
                          width: 100%
                          height: 30px
                          text-align: right
                          line-height: 30px
                          font-size: 12px
                          color: #595959

</style>