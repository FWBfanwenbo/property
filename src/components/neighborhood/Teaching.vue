<template>
    <div class="share">
        <div  v-for="list in activityList">
            <Section :list="list"></Section>
            <AppSplit></AppSplit>
        </div>
    </div>
</template>

<script>
    import AppSplit from "@/components/base/Split"
    import Section from "@/components/base/Section"
    export default {
        name: "Teaching",
        components:{
            AppSplit,
            Section
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
        }
    }
</script>

<style scoped>

</style>