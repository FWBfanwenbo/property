<template>
    <div class="index" style="overflow: hidden;">
        <div class="header">
             <div @click="linkHome" class="mian"><span class="text">{{second}}&nbsp;</span>s跳过</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Index",
        data(){
            return {
                index:require('img/index.jpg'),
                second:3,
                timer:null
            }
        },
        methods:{
            func(){
                if(this.timer){
                    clearInterval(this.timer);
                }
                this.timer=setInterval(()=>{
                    this.second--
                    if(this.second<0){
                        this.$router.push({
                            path:"/home"
                        })
                    }
                },2000);
            },
            linkHome(){
                setTimeout(()=>{
                    this.$router.push({
                        path:"/home"
                    })
                },20)
            }
        },
        destroyed(){
            this.timer=null
        },
        mounted(){
            this.func()
        }

    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
    .index
        width: 100%
        height: 700px
        background:url('~img/index.jpg') no-repeat
        background-size :100% 100%
        .header
            width: 100%
            padding: 40px 12px 0 12px
            box-sizing: border-box
            height: 64px
            position: fixed
            left: 0
            top: 0
            text-align: right
            z-index:9999
            .mian
                float: right
                width: 60px
                height: 25px
                background: rgba(0,0,0,0.2)
                border-radius :20px
                text-align: center
                line-height: 25px
                color: #fff
                .text
                    color: red
</style>