<template>
    <transition name="slide">
        <div class="d-praise" v-show="isShow">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "DPraise",
        data(){
            return {
                isShow:false
            }
        },
        methods:{
            show(){
                this.isShow=true
            },
            hide(){
                this.isShow=false
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .d-praise
       &.slide-enter-active,&.slide-leave-active
          transition: all 0.5s
       &.slide-enter, &.slide-leave-to
          transform: translate3d(100%, 0, 0)
</style>