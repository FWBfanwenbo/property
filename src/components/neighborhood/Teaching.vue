<template>
    <div class="share">
        <div  v-for="list in activityList">
            <Section :list="list"></Section>
            <div class="report">
                <div class="mi" @click="report">
                    <span class="report-icon icon-jubao iconfont"></span>
                    <span class="report-text">举报</span>
                </div>
            </div>
            <AppSplit></AppSplit>
        </div>
        <AppMask ref="maskWrapper">
        </AppMask>
    </div>
</template>

<script>
    import AppSplit from "@/components/base/Split"
    import Section from "@/components/base/Section"
    import AppMask from "@/components/base/App-mask"
    export default {
        name: "Teaching",
        components:{
            AppSplit,
            Section,
            AppMask
        },
        data(){
            return {
                activityList:[{
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
                },{
                    id:2,
                    photo:require("img/activity_01.png"),
                    nickname:"天山童姥",
                    position:"金昌诚园",
                    time:"05-30 15:04",
                    text:"爱的传递,有你添翼,本次活动的第一站有每户参赛家庭赠书并在扉页上写上一句寄语的方式参与公益,献出...",
                    imgList:[{
                        url:require("img/activity_01.png")
                    },
                        {
                            url:require("img/activity_02.png")
                        },{
                            url:""
                        }],
                    status:"已结束"
                },{
                    id:3,
                    photo:require("img/activity_01.png"),
                    nickname:"天山童姥",
                    position:"金昌诚园",
                    time:"05-30 15:04",
                    text:"爱的传递,有你添翼,本次活动的第一站有每户参赛家庭赠书并在扉页上写上一句寄语的方式参与公益,献出...",
                    imgList:[{
                        url:require("img/activity_01.png")
                    },
                        {
                            url:require("img/activity_02.png")
                        },
                        {
                            url:require("img/activity_03.png")
                        }],
                    status:"已结束"
                }]
            }
        },
        methods:{
            report(){
                this.$refs.maskWrapper.show();
            },

        }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
   .share
      .report
          width: 100%
          height: 20px
          background: #E0E0E2
          text-align: center
          position: relative
          .mi
              width: 14%
              position: absolute
              left: 50%
              top: 0
              transform: translate(-50%,0)
              .report-icon
                  width:24px
                  font-size: 18px
              .report-text
                  float: right
                  font-size: 14px
                  display: block
                  line-height: 20px
      .cancel
          position: fixed
          bottom: 0
          left: 0
          width: 100%
          height: 40px
          background: #fff
          border-bottom:1px solid #E9E9EB
          text-align: center
          line-height: 40px
          font-size: 14px

</style>