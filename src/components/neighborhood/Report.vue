<template>
    <div class="report">
        <div class="app-header">
            <div class="info">
                <span @click="back" class="icon iconfont icon-2fanhui"></span>
                <span class="text">{{appName}}</span>
            </div>
        </div>
        <div class="scroll">
            <div>
                <form action="" id="form">
                    <div class="reason-group">
                        <span class="notice-reason">请选择举报原因</span>
                        <ul class="reason-box">
                            <li class="reason-list" v-for="(list,index) in reportReason" @click="selectReason(list,index)" :class="{'active-list':nowIndex===list.id}">
                                <span class="reason-text">{{list.reason}}</span>
                                <span class="gou-icon iconfont icon-gou" :class="{'active-icon':nowIndex===list.id}"></span>
                            </li>
                        </ul>
                    </div>
                    <div class="proof-group">
                        <span class="notice-proof">请举证</span>
                        <ul class="proof-box">
                            <li class="proof-list" v-for="list in proof">
                                <span class="proof-type">附加说明</span>
                                <p class="proof-text">{{list.content}}</p>
                                <span class="icon iconfont icon-qianjin"></span>
                            </li>
                        </ul>
                    </div>
                    <div class="photo-group">
                        <div class="photo-column">
                            <div class="photo-type">上传照片</div>
                            <div class="right">
                                <span class="photo-notice">最多上传{{limit}}张照片</span>
                                <span class="icon iconfont icon-qianjin"></span>
                            </div>
                        </div>
                        <div class="photo-box">
                            <ul>
                                <li class="list"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="sub">
                        <input type="submit" value="提交" id="submit">
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Report",
        data(){
            return {
                appName:"举报非法内容",
                reportReason:[
                    {
                        id:0,
                        reason:"广告骚扰"
                    },{
                        id:1,
                        reason:"政治敏感"
                    },{
                        id:2,
                        reason:"散步色情内容"
                    },{
                        id:3,
                        reason:"涉毒"
                    },{
                        id:4,
                        reason:"其他原因"
                    },
                ],
                proof:[
                    {
                        id:0,
                        content:"该业主通过该平台发布带有色青信息的内容"
                    }
                ],
                limit:3,
                nowIndex:0
            }
        },
        methods:{
            back(){
                this.$router.push({
                    path:"/neighborhood/teaching"
                })
            },
            selectReason(list,index){
                this.nowIndex=list.id
            }
        }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
    @import "~css/var.styl"
    .report
        position: fixed
        left: 0
        top: 0
        z-index: 5000
        background: #fff
        width: 100%
        height: 100%
    .app-header
        position: fixed
        left: 0
        top: 0
        z-index: 5500
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
    .scroll
        margin-top: 64px
       #form
           width: 100%
           height: 650px
           background: #fbf9fb
           .reason-group
               background: #fff
               .notice-reason
                    padding: 0 12px
                    box-sizing: border-box
                    width: 100%
                    height: 40px
                    display: block
                    text-align: left
                    line-height: 40px
                    font-size: 14px
                    background: #f9f9f9
                    color: #767676
               .reason-box
                   .reason-list
                       padding: 0 12px
                       box-sizing: border-box
                       width: 100%
                       height: 45px
                       font-size: 14px
                       text-align: left
                       line-height: 45px
                       border-bottom: 1px solid #e8e7e8
                       .reason-text
                           float: left
                       .gou-icon
                           font-size: 16px
                           color: #fff
                           float: right
                   .active-list
                       background: #f9f9f9
                       .active-icon
                           color: #ee5565
           .proof-group
               background: #fff
               .notice-proof
                    padding: 0 12px
                    box-sizing: border-box
                    width: 100%
                    height: 40px
                    display: block
                    text-align: left
                    line-height: 40px
                    font-size: 14px
                    background: #f9f9f9
                    color: #767676
               .proof-box
                  .proof-list
                      padding: 0 12px
                      box-sizing: border-box
                      border-bottom: 1px solid #e8e7e8
                      width: 100%
                      height: 45px
                      font-size: 14px
                      text-align: left
                      line-height: 45px
                      display: flex 
                      justify-content: space-between
                      align-items: center
                      .proof-type
                          width: 80px
                          font-size: 16px
                          color: #020202
                      .proof-text
                          width: 80%
                          font-size: 14px
                          color: #424846
                          no-wrap()
                      .icon
                          width: 24px
                          font-size: 18px
                          color: #bebfc0
           .photo-group
               width: 100%
               height: 180px
               background: #fbf9fb
              .photo-column
                  padding: 0 12px
                  box-sizing: border-box
                  background: #fff
                  width: 100%
                  height: 45px
                  .photo-type
                      width: 30%
                      height: 45px
                      float: left
                      text-align: left
                      line-height: 45px
                      font-size: 16px
                      color: #202020
                  .right
                      width: 40%
                      height: 45px
                      display: flex
                      float: right
                      justify-content: space-between
                      align-items: center
                      .photo-notice
                          width: 80%
                          font-size: 14px
                          line-height: 45px
                          color: #787b7b
                          display: block
                      .icon
                          width: 24px
                          font-size: 16px
                          color: #bebfc0
                          

           .sub
                width: 100%
                height: 45px
                text-align: center
                margin-top: 10px
                #submit
                    width: 250px
                    height: 45px
                    background:#5E62A2
                    line-height: 45px
                    text-align: center
                    color: #fff
                    font-size: 18px
                    border-radius :20px
</style>