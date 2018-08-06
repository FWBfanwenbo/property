<template>
    <transition name="mask">
        <div class="mask" v-show="isShow">
            <AppMoveOut ref="moveOut"></AppMoveOut>
            <div class="cancel" @click="cancelRE">
                <span class="cancel-text">取消</span>
            </div>
        </div>
    </transition>
</template>

<script>
    import AppMoveOut from "@/components/base/MoveOut"
    export default {
        name: "App-Mask",
        components:{
            AppMoveOut
        },
        data(){
            return {
                isShow:false
            }
        },
        methods:{
            show(){
                this.isShow=true;
                this.$refs.moveOut.show()

            },
            hide(){
                this.isShow=false
            },
            cancelRE(){
                this.isShow=false;
                this.$refs.moveOut.hide()
            }
        }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
     .mask
         position: fixed
         left: 0
         top: 0
         bottom: 0
         width: 100%
         z-index: 3000
         background: rgba(0,0,0,0.2)
         &.mask-active,&.mask-leave-active
             transition: all 0.5s
             opacity :1
         &.mask-enter, &.mask-leave-to
             opacity :0
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
             z-index: 5000

</style>