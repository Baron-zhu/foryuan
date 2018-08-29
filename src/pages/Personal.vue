<template>
    <div class="home">
        <ShortcutBar />
        <h1>个人中心</h1>
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
    import { mapActions } from "vuex";
    import ShortcutBar from "@/components/ShortcutBar";
    export default {
        name: "PagesPersonal",
        components: {
            ShortcutBar
        },
        methods: {
            ...mapActions([
                "LOGIN_STATE"
            ])
        },
    }
</script>

<style scoped>

</style>