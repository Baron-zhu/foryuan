<template>
    <div class="login">
        <OutHeader :register="true" />
        <div class="warning">
            <div class="warning-icon">
                <img src="../assets/images/warning.png" />
            </div>
            <p>
                依据《网络安全法》，为保障您的账户安全和正常使用，请尽快完成手机号验证！ 新版<router-link to="">《福缘隐私政策》</router-link>已上线，将更有利于保护您的个人隐私。
            </p>
        </div>
        <main>
            <div class="content">
                <div class="pic">
                    <img src="../assets/images/login-pic.png" />
                </div>
                <div class="login">
                    <div class="tab">
                        <div class="child" :class="{active: tabIndex == index}" v-for="(item,index) in logNav" :key="index" @click="tabIndex = index">
                            <router-link to="">{{item}}</router-link>
                        </div>
                    </div>
                    <!-- 二维码登录 -->
                    <div class="scan-login" v-if="tabIndex==0">
                        <div class="cont">
                            <div v-for="(item,index) in scanLogin" :key="index">
                                <img :src="item" />
                            </div>
                        </div>
                        <p class="prompt">
                            打开 <router-link to="">手机福缘</router-link>
                            <i>|</i>
                            扫描二维码
                        </p>
                    </div>
                    <!-- 账号登录 -->
                    <div class="account-login" v-else>
                        <form action="">
                            <div class="login-input">
                                <i><img src="../assets/images/user.png" /></i>
                                <input type="text" v-model="user.email" placeholder="您的账户名和登录名">
                            </div>
                            <div class="login-input">
                                <i><img src="../assets/images/locked.png" /></i>
                                <input type="password" v-model="user.password" placeholder="福缘密码">
                            </div>
                            <p><router-link to="">忘记密码</router-link></p>
                            <div class="login-input">
                                <input @click="login" type="button" value="登录">
                            </div>
                        </form>
                    </div>
                    <div class="other">
                        <div class="account">
                            <div v-for="(item,index) in otherAccount" :key="index">
                                <router-link to="">
                                    <img :src="item.imgUrl" />
                                    <span>{{item.title}}</span>
                                </router-link>
                            </div>
                        </div>
                        <div class="go-register">
                            <router-link to="/register">
                                <img src="../assets/images/icon-1.png" />
                                <span>立即注册</span>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <OutFooter />
    </div>
</template>

<script>
    import axios from "axios"
    import OutFooter from "@/components/OutFooter";
    import OutHeader from "@/components/OutHeader";
    import { mapActions } from "vuex";
    export default {
    name: "PagesLogin",
    data() {
        return {
            errors: {
                email: "",
                password: "",
                verifiy: ""
            },
            user: {
                email: "1@qq.com",
                password: "qwer1234",
                verifiy: ""
            },
            logNav: ["扫码登录", "账号登录"],
            tabIndex: "1",
            show: true,
            scanLogin: [
                require("../assets/images/qrcode.jpg"),
                require("../assets/images/iphone-app.png")
            ],
            otherAccount: [
                {
                imgUrl: require("../assets/images/qq.png"),
                title: "QQ"
                },
                {
                imgUrl: require("../assets/images/wechat.png"),
                title: "微信"
                }
            ]
        }
    },
    methods: {
        // ...mapActions([
        //     "LOGIN_STATE"
        // ]),
        toggle () {
            
        },
        login() {
            // console.log(this.user);
            // axios.post(path,arg)向服务器发送请求
            axios
            .post("/api?action=login",this.user) // post() 发起 post 请求
            .then(({data}) => { // then(res=>{}) 获取结果  ({data})对象解构模式
                console.log(data);
                if (data.code ==0) {
                    this.errors = data.error;   
                    this.$router.push("/personal");
                    return;
                };
                if (data.code == 1) {
                    this.$router.push("/personal");
                }
                // this.LOGIN_STATE(true);
                // this.setUser(this.user);
            })
            .catch (err => { // catch() 获取错误
                console.log(err);
            });
        }
    },
    components: {
        OutHeader,
        OutFooter
    }
    };
    </script>

    <style lang="less" scoped>
    .warning {
    width: 100%;
    height: 40px;
    background: #fff8f0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fd9e33;
    .warning-icon {
        width: 16px;
        height: 16px;
        margin-right: 6px;
    }
    p {
        font-size: 0.75em;
        text-align: center;
        a {
        color: #646464;
        }
    }
    }
    main {
    width: 100%;
    background: #97c735;
    padding: 50px 0;
    .content {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        .pic {
        padding: 24px 68px 0 110px;
        }
        .login {
        width: 475px;
        height: 400px;
        display: flex;
        flex-direction: column;
        margin: 0 76px;
        background: #ffffff;
        .tab {
            display: flex;
            justify-content: space-around;
            line-height: 50px;
            width: 100%;
            height: 50px;
            font-size: 1.4em;
            padding: 5px 0;
            border-bottom: 1px solid #e6e6e6;
            .child {
                width: 50%;
                text-align: center;
                border-right: 1px solid #e6e6e6;
                line-height: 40px;
                &:last-child {
                    border-right: none;
                }
                &.active {
                    color: #29a1f7;
                }
            }
            
        }
        .scan-login {
            height: 280px;
            .cont {
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-top: 25px;
            div:first-child {
                img {
                display: block;
                padding: 5px;
                border: 1px solid #e6e6e6;
                }
            }
            }
            .prompt {
            padding: 24px 0;
            color: #646464;
            text-align: center;
            a {
                color: #23aaf8;
            }
            i {
                font-style: normal;
                color: #e6e6e6;
                padding: 0 5px;
            }
            }
        }
        .account-login {
            height: 280px;
            padding: 30px;
            .login-input {
                height: 44px;
                margin-bottom: 25px;
                border-radius: 4px;
                border: 1px solid #e6e6e6;
                display: flex;
                align-items: center;
                font-size: 14px;
                i {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 44px;
                    height: 42px;
                    border-top-left-radius: 4px;
                    border-bottom-left-radius: 4px;
                    border-right: 1px solid #e6e6e6;
                    background: #f0f0f0;
                    img {
                        width: 24px;
                        height: 24px;
                    }
                }
                input {
                    border: none;
                    height: 42px;
                    flex: 1;
                    padding-left: 12px;
                }
                &:nth-child(2) {
                    img {
                        width: 19px;
                        height: 23px;
                    }
                }
                &:last-child {
                    input {
                        border-radius: 4px;
                        border: none;
                        color: #ffffff;
                        cursor: pointer;
                        background: #29a1f7;
                        padding: 0;
                        &:hover {
                            background: #158ce1;
                            transition: background 0.5s linear;
                        }
                    }
                }
            }
            p {
                margin-bottom: 25px;
                text-align: right;
                line-height: 14px;
                a {
                    font-size: 14px;
                }
            }
        }
        .other {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex: 1;
            background: #f0f0f0;
            border-top: 1px solid #e6e6e6;
            .account {
            width: 200px;
            height: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            div {
                width: 100px;
                border-right: 1px solid #c8c8c8;
                display: flex;
                box-sizing: border-box;
                justify-content: space-around;
                &:last-child {
                border-right: none;
                }
                a {
                display: flex;
                height: 28px;
                line-height: 28px;
                // vertical-align: middle;
                color: #646464;
                img {
                    display: block;
                    width: 28px;
                    height: 28px;
                    margin-right: 10px;
                }
                span {
                    display: block;
                    height: 28px;
                }
                }
            }
            }
            .go-register {
            margin-right: 20px;
            a {
                display: flex;
                height: 28px;
                line-height: 28px;
                vertical-align: middle;
                color: #646464;
                img {
                display: block;
                width: 28px;
                height: 28px;
                margin-right: 10px;
                }
                span {
                display: block;
                height: 28px;
                }
            }
            }
        }
        }
    }
    }
</style>