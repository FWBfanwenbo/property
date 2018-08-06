<template>
    <div class="participate-in">
        <AppScroll class="scroll">
            <div>
                <div class="activity-wrapper">
                    <div  v-for="list in activityList">
                        <Section :list="list"></Section>
                        <AppSplit></AppSplit>
                    </div>
                </div>
            </div>
        </AppScroll>
    </div>
</template>

<script>
    import AppSplit from "@/components/base/Split"
    import Section from "@/components/base/Section"
    import AppScroll from "@/components/base/Scroll"
    export default {
        name: "ParticipateIn",
        components:{
            AppSplit,
            Section,
            AppScroll
        },
        data(){
            return {
                activityList:[
                    {
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
                    status:"进行中"
                },{
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
                },{
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
                    status:"进行中"
                }]
            }
        }
    }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
    .participate-in
        position: fixed
        left: 0
        top: 128px
        .scroll
            height: 525px
            overflow: hidden
</style>

