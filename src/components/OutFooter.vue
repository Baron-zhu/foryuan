<template>
    <footer>
        <ul class="foot-nav">
            <li v-for="(item,index) in footLink" :key="index">
                <router-link to="">{{item}}</router-link>
            </li>
        </ul>
        <div class="copy">
            Copyright © 2004-2017  福缘健康商城 版权所有
        </div>
    </footer>
</template>

<script>
    export default {
        name: "OutFooter",
        data() {
            return {
                footLink: [
                    "免责条款",
                    "隐私保护",
                    "咨询热点",
                    "联系我们",
                    "公司简介",
                    "批发方案",
                    "配送方式"
                ]
            }
        },
    }
</script>

<style lang="less"scoped>
    @import '../assets/style.less';
    footer {
        height: 90px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: @textLight;
        .foot-nav {
            display: flex;
            width: 100%;
            justify-content: center;
            margin-bottom: 20px;
            li {
                padding: 0 5px;
                border-right: 1px solid @textLight;
                &:last-child {
                    border-right: none;
                }
                a {
                    color: @textLight;
                    &:hover {
                        color: @textDark;
                    }
                }
            
            }
        }
    }
</style>