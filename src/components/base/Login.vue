<template>
    <div class="login">
        <div class="img-box">
            <img :src="img" alt="" width="100%" height="250px">
        </div>
        <div class="login-info">
            <form action="" id="form">
                <div class="name-tr">
                    <span class="user-icon iconfont icon-user-msg"></span>
                    <span class="user">
                         <input type="text" v-model="userKey" name="user" id="user" placeholder="请输入用户名">
                    </span>
                </div>
                <div class="pass-tr">
                    <span class="pass-icon iconfont icon-mima"></span>
                    <span class="pass">
                         <input type="text" v-model="passKey" name="pass" id="pass" placeholder="请输入密码">
                    </span>
                </div>
                <input type="button" id="submit" value="登录" @click="submitInfo">
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return {
                img:require("img/user_info.png"),
                userKey:"",
                passKey:""
            }
        },
        methods:{
            submitInfo(){
                if(this.userKey && this.passKey){
                    sessionStorage.loginInfo=this.userKey;
                    this.$router.back()
                }
            }
        }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
    .login
        .img-box
            width: 100%
            height: 250px
        .login-info
            margin-top: 80px
            width: 100%
            height: 100px
            padding: 0 60px
            box-sizing: border-box
            .name-tr
                height: 40px
                display: flex
                border-bottom: 1px solid #E0E0E2;
                justify-content: space-between
                align-items: center
                .user-icon
                    width: 24px
                    font-size: 20px
                    color: #828282
                .user
                    width: 80%
                    height: 100%
                    #user
                        width: 100%
                        height: 40px
                        font-size: 14px
            .pass-tr
                margin-top: 20px
                width: 100%
                height: 40px
                display: flex
                border-bottom: 1px solid #E0E0E2;
                justify-content: space-between
                align-items: center
                .pass-icon
                    width: 24px
                    font-size: 20px
                    color: #828282
                .pass
                    width: 80%
                    height: 100%
                    #pass
                        height: 40px
                        font-size: 14px

            #submit
                margin-top: 50px
                width: 250px;
                height: 45px;
                background: #5e62a2;
                line-height: 45px;
                text-align: center;
                color: #fff;
                font-size: 18px;
                border-radius: 20px;
                border: none;
                float: left;
                zoom:1;
                outline: medium;
</style>