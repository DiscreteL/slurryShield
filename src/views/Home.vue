<template>
    <div>
        <el-button type="info" @click="logout">退出</el-button>
    </div>
</template>

<script>
export default {
    methods:{
        logout(){
            window.sessionStorage.clear();  //清除token记录，退出登录
            this.$router.push("/login");
        }
    }
};
</script>

<style>

</style>
