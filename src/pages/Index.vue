<template>
    <div class="home">
        <ShortcutBar />
        <h1>首页--福缘实体联盟</h1>
        <div>
            <router-link to="/login"><Button type="error">登录</Button></router-link>
            <router-link to="/register"><Button type="warning">注册</Button></router-link>
        </div>
        <div>
            <span>欢迎使用本站</span>
            <Button type="success" @click="loginOut">
                退出登录
            </Button>
        </div>
    </div>
</template>

<script>
    // 混入仓库数据
    import {mapActions, mapGetters, mapMutations} from "vuex";
    import ShortcutBar from "@/components/ShortcutBar";
    export default {
        name: "PagesIndex",
        components: {
            ShortcutBar
        },
        methods: {
            
            loginOut () {
                // this.$store.commit("LOGIN_STATE", !loginState);
            }
        },
        computed: {
            
            // loginState() {
            //     return this.$store.getters.loginState;
            // }
        },
    }
</script>

<style scoped>

</style>