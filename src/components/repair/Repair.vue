<template>
    <transition name="slide">
        <div class="repair">
            <App-Header :appName="nameTitle"></App-Header>
            <div class="app-split">
                <App-Split></App-Split>
            </div>
            <form action="">
            <div class="person-info">
                <div class="position">
                   <div class="inner">
                       <span class="icon">
                           <img :src="position.pImg" alt="" width="16" height="20">
                       </span>
                       <span class="text">{{position.pText}}</span>
                   </div>
                </div>
                <div class="person">
                    <span class="name">姓名:{{person.name}}</span>
                    <span class="phone">{{person.phone}}</span>
                </div>
            </div>
            <div>
                <App-Split></App-Split>
            </div>
            <div class="select">
                <div class="title">选择类型:</div>
            </div>
            <ul class="park">
                <li :class="{active:currentId===item.id}" @click="onSelect(item.id)" class="park-list" v-for="item in selectType">{{item.texts}}</li>
            </ul>
            <div>
                <App-Split></App-Split>
            </div>
            <div class="expect">
                <div style="width: 100%;height: 20px;display:flex;justify-content: space-between">
                    <div class="expect-title">期望维修时间:</div>
                    <div class="right">
                        <span class="time">{{expectTime}}</span>
                        <span class="icon iconfont icon-qianjin"></span>
                    </div>
                </div>
            </div>
            <div>
                <App-Split></App-Split>
            </div>
            <div class="type-desc">
                <p class="desc">{{typeDesc}}</p>
            </div>
                <div class="parent">
                    <input type="file">
                </div>
                <div class="sub">
                    <input type="submit" value="提交" id="submit">
                </div>
            </form>
        </div>
    </transition>
</template>

<script>
    import AppHeader from "@/components/base/App-Header"
    import AppSplit from "@/components/base/Split"
    export default {
        name: "Repair",
        components:{
            AppHeader,
            AppSplit
        },
        data(){
            return {
                nameTitle:"报事报修",
                position:{
                    pImg:require("img/position.png"),
                    pText:"富阳富春一号院-鹭影苑-1幢-301室"
                },
                person:{
                    name:"张三丰",
                    phone:12345678901
                },
                selectType:[{
                    id:0,
                    texts:"居家维修"
                },{
                    id:1,
                    texts:"园区维修"
                },{
                    id:2,
                    texts:"园区保洁"
                },"",{
                    id:4,
                    texts:"园区绿化"
                },{
                    id:5,
                    texts:"园区保安"}],
                expectTime:"2017-6-22",
                desc:{0:{id:0,"text":"按照国务院要求，国家药监局会同卫生健康委等部门组成由国家药监局党组书记、副局长李利任组长的核查组，赴武汉就武汉生物制品研究所有限责任公司（简称武汉生物）2017年效价不合格百白破疫苗处置工作开展核查。"},
                      1:{id:1,"text":"为进一步落实习近平总书记、李克强总理重要指示批示精神，保障人民群众身体健康，8月1日，按照国务院要求，国家药监局会同卫生健康委等部门组成由国家药监局党组书记、副局长李利任组长的核查组，赴武汉就武汉生物制品研究所有限责任公司（简称武汉生物）2017年效价不合格百白破疫苗处置工作开展核查。"},
                      2:{id:2,"text":"昨日，国家药监局新闻发言人就武汉生物制品研究所有限责任公司（以下简称武汉生物）百白破疫苗介绍有关情况。其表示，武汉生物该批次疫苗效价不合格主要原因是分装设备短时间故障，导致待分装产品混悬液不均匀，属于偶发。中国食品药品检定研究院对企业有效期内的其他批次百白破疫苗进行抽样检验，检验结果符合规定。"},
                      4:{id:4,"text":"按照国务院要求，国家药监局会同卫生健康委等部门组成由国家药监局党组书记、副局长李利任组长的核查组，赴武汉就武汉生物制品研究所有限责任公司（简称武汉生物）2017年效价不合格百白破疫苗处置工作开展核查。"},
                      5:{id:5,"text":"按照国务院要求，国家药监局会同卫生健康委等部门组成由国家药监局党组书记、副局长李利任组长的核查组，赴武汉就武汉生物制品研究所有限责任公司（简称武汉生物）2017年效价不合格百白破疫苗处置工作开展核查。"}},
                typeDesc:"按照国务院要求，国家药监局会同卫生健康委等部门组成由国家药监局党组书记、副局长李利任组长的核查组，赴武汉就武汉生物制品研究所有限责任公司（简称武汉生物）2017年效价不合格百白破疫苗处置工作开展核查",
                currentId:0
            }
        },
        methods:{
            onSelect(id){
                this.typeDesc=this.desc[id]["text"];
                this.currentId=id;
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .repair
    position:fixed
    left: 0
    top: 0
    bottom: 0
    width: 100%
    height: 100%
    z-index:1000
    background: #fff
    &.slide-enter-active,&.slide-leave-active
      transition: all 0.5s
    &.slide-enter, &.slide-leave-to
      transform: translate3d(100%, 0, 0)
    .app-split
      margin-top: 64px
    .person-info
      .position
        width: 100%
        height: 45px
        border-bottom:1px solid #E9E9E9;
        padding: 12px 13px
        box-sizing: border-box
        .inner
            width: 100%
            height: 20px
            line-height: 20px
            .icon
                float: left
                width: 16px
                height: 20px
            .text
                float: right
                width: 93%
                height: 20px
                line-height: 20px;
                font-size: 14px
      .person
          height: 45px
          width: 100%
          line-height: 45px
          padding: 0 13px;
          .name
              width: 30%
              float: left
              font-size: 14px
          .phone
              width: 40%
              float: right
              font-size: 14px

    .select
       .title
           width: 100%
           padding: 0 12px;
           height: 45px
           line-height: 45px
           font-size: 14px
           border-bottom:1px solid #E9E9E9;
    .park
      padding:15px 15px 15px 38px;
      display: flex
      flex-wrap: wrap
      justify-content: space-between
      align-content: flex-end
      .park-list
        width: 100px
        height: 32px
        text-align: center
        line-height: 32px
        font-size: 14px
        color: #4D4C4C;
        border:1px solid #C5C3C3;
        text-shadow: 0px 0px 1px #C5C3C3,0 0 0 #000;
        margin-bottom: 15px
        border-radius :3px
        &:nth-child(4)
          border:none;
          visibility:hidden;
          content:"";
          margin-bottom: 0
        &:nth-child(5)
          margin-bottom: 0
        &:nth-child(6)
          margin-bottom: 0
      .active
          color: red;
          border:1px solid red;
    .expect
        width: 100%
        height: 45px
        box-sizing: border-box
        padding: 12px 12px
        .expect-title
            width: 30%
            height: 20px
            text-align: left
            line-height: 20px
            font-size: 14px
        .right
            width: 25%
            height: 20px
            display: flex
            justify-content: space-between
            align-items: center
            .time
               font-size: 14px
            .icon
                font-size: 14px
                line-height: 18px

    .type-desc
      padding: 12px
      .desc
       height: 300px
       font-size: 14px
       line-height: 1.5
    .sub
        width: 100%
        height: 45px
        text-align: center
        position: absolute
        bottom: 30px
        left: 0
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