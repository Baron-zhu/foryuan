<template>
    <div class="out-header">
        <div class="cont">
            <div class="logo">
                <router-link to="/">
                    <img src="../assets/images/logo.png" />
                </router-link>
            </div>
            <div class="wel" v-show="register">欢迎登录</div>
            <div class="wel" v-show="login">欢迎注册</div>
            <div class="goreg" v-show="register">
                没有账号?
                <router-link to="/register">立即注册</router-link>
            </div>
            <div class="golog" v-show="login">
                已有账号?
                <router-link to="/login">请登录</router-link>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "OutHeader",
        props: {
            register: Boolean,
            login: Boolean
        }
    }
</script>

<style lang="less" scoped>
    @import "../assets/style";
    .out-header {
        width: 100%;
        .cont {
            width: 1200px;
            height: 100px;
            color: @textDark;
            margin: 0 auto;
            display: flex;
            .logo {
                display: flex;
                align-items: center;
                padding: 0 20px;
                img {
                    display: block;
                    width: 103px;
                    height: 65px;
                }
            }
            .wel {
                flex: 1;
                font-size: 1.5em;
                font-weight: 600;
                padding-left: 28px;
                padding-top: 40px;
            }
            .goreg,
            .golog {
                color: @textLight;
                padding-top: 60px;
                a {
                    color: @textDark;
                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }
    }

</style>