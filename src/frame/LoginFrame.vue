<script setup lang="ts">
    import { reactive } from 'vue';
    import { sendLoginRequest } from '@/scripts/httpUtils';

    const formData = reactive({
        username: localStorage.getItem("username") ? localStorage.getItem("username") : "",
        password: localStorage.getItem("password") ? localStorage.getItem("password") : ""
    });
</script>

<template>
    <div class="login-frame">
        <el-form class="login-form" :model="formData">
            <el-form-item label="学号">
                <el-input v-model="formData.username" size="large" placeholder="请输入你的学号" clearable/>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="formData.password" size="large" placeholder="请输入你的密码" clearable type="password"/>
            </el-form-item>
            <el-button class="login-btn" type="primary" size="large" @click="sendLoginRequest(
                formData.username,
                formData.password
            )">一键登录</el-button>
        </el-form>
    </div>
</template>

<style lang="scss">
    @import url("./style/LoginFrame.scss");
</style>