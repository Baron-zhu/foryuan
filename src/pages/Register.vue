<template>
    <div class="register">
        <!-- 头部 -->
        <div class="shadow">
            <OutHeader :login="true"/>
        </div>
        <!-- 注册表单 -->
        <main>
            <div class="register-form">
                <form class="form-input" action="">
                    <p>用户名</p>
                    <div class="input err">
                        <input type="text" v-model="user.email" placeholder="您的账户名和登录名">
                        <div class="reminder" v-show="errors.email">{{errors.email}}</div>
                    </div>
                    <p>设置密码</p>
                    <div class="input err">
                        <input type="password" v-model="user.password" placeholder="设置福缘密码（不少于6位）">
                        <div class="reminder" v-show="errors.password">{{errors.password}}</div>
                    </div>
                    <p>确认密码</p>
                    <div class="input">
                        <input type="password" placeholder="请再次输入密码">
                    </div>
                    <p>手机号码</p>
                    <div class="input">
                        <select class="area-code">
                            <option value="中国大陆 +86">中国大陆 +86</option>
                            <option value="美国 +81">美国 +81</option>
                            <option value="英国 +82">英国 +82</option>
                            <option value="古巴 +26">古巴 +26</option>
                            <option value="澳大利亚 +36">澳大利亚 +36</option>
                        </select>
                        <input type="text" placeholder="建议使用常用手机">
                    </div>
                    <p>所在区域</p>
                    <div class="input">
                        <select>
                            <option value="" disabled selected>建议填写常住地址</option>
                            <option value="2">中国大陆 +86</option>
                            <option value="3">美国 +81</option>
                            <option value="4">英国 +82</option>
                            <option value="5">古巴 +26</option>
                            <option value="6">澳大利亚 +36</option>
                        </select>
                    </div>
                    <p>验证码</p>
                    <div class="input">
                        <input type="text" v-model="user.verifiy" placeholder="请再次输入密码">
                        <span @click="verifiyDate = new Date().getTime()">
                            <img :src="url" />
                        </span>
                    </div>
                    <p>短信验证</p>
                    <div class="input">
                        <input type="text" placeholder="请输入手机验证码">
                        <button type="button">获取验证码</button>
                    </div>
                    <div class="input">
                        <input type="button" @click="register" value="立即注册">
                    </div>
                </form>
            </div>
            <div class="register-pic">
                <img :src="imgUrl" />
            </div>
        </main>
        <!-- 底部 -->
        <OutFooter />
    </div>
</template>

<script>
    import axios from "axios"
    import OutFooter from "@/components/OutFooter";
    import OutHeader from "@/components/OutHeader";
    export default {
        name: "PagesRegister",
        data() {
            return {
                imgUrl: require("../assets/images/register-pic.png"),
                verifiyDate: new Date().getTime(),
                errors: {
                    email: "",
                    password: "",
                    verifiy: ""
                },
                user: {
                    email: "",
                    password: "",
                    verifiy: ""
                }
            }
        },
        components: {
            OutHeader,
            OutFooter,
        },
        methods: {
            register() {
                axios
                .post("/api?action=register",this.user)
                .then(({data}) => {
                    console.log(data);
                    if (data.code == 0) {
                        this.errors = data.error;
                        return;
                    }
                    if (data.code ==1) {
                        this.$Modal.confirm({
                            title: "账号注册",
                            content:"您已注册成功,是否跳转到登录页面",
                            okText: "跳转",
                            cancelText: "取消",
                            onOk: () => {
                                this.$router.push("/login");
                            }
                        })
                    }
                })
                .catch(err => {
                    console.log(err);
                })
                
            }
        },
        computed: {
            url () {
                return "/api/verifiycode.gif?" + this.verifiyDate;
            }
        }
    }
</script>

<style lang="less" scoped>
    .shadow {
        width: 100%;
        -moz-box-shadow: 0px 5px 6px #f0f0f0; /* 老的 Firefox */
        box-shadow: 0px 5px 6px #f0f0f0;
    }
    main {
        width: 1200px;
        margin: 0 auto;
        padding: 30px 60px;
        display: flex;
        justify-content: space-around;
        .register-form,
        .register-pic {
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
        }
        .register-form {
            border-right: 1px solid #e6e6e6;
            .form-input {
                width: 70%;
                margin: 0 auto;
                color: #323232;
                p {
                    padding-bottom: 6px;
                }
                .err {
                    flex-direction: column;
                    .reminder {
                        font-size: .75px;
                        color: red;
                    }
                }
                .input {
                    width: 100%;
                    padding-bottom: 20px;
                    display: flex;
                    &:last-child {
                        padding: 0;
                        input {
                            padding: 0;
                            background: #29a1f7;
                            color: #ffffff;
                            cursor: pointer;
                            &:hover {
                                background: #158ce1;
                                transition: background 0.5s linear;
                            }
                        }
                    }
                    select {
                        width: 100%;
                        height: 40px;
                        outline: none;
                        border-radius: 4px;
                        border: 1px solid #e6e6e6;
                        background: #ffffff;
                        &.area-code {
                            margin-right: 12px;
                        }
                    }
                    input {
                        width: 100%;
                        height: 40px;
                        line-height: 40px;
                        border-radius: 4px;
                        border: 1px solid #e6e6e6;
                        padding-left: 10px;
                    }
                    span {
                        display: block;
                        height: 40px;
                        margin-left: 12px;
                        border-radius: 4px; 
                        background: #e6e6e6;
                        box-sizing: border-box;
                        overflow: hidden;
                        cursor: pointer;
                        img {
                            display: block;
                            width: 100%;
                        }
                    }
                    button {
                        display: block;
                        height: 40px;
                        width: 152px;
                        margin-left: 12px;
                        border-radius: 4px; 
                        background: #e6e6e6;
                        border: none;
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>