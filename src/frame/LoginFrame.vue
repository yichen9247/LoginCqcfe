<script setup lang="ts">
    import { reactive } from 'vue';
    import { loginFormType } from '@/types';
    import{ Pointer } from '@element-plus/icons-vue';
    import { sendLoginRequest } from '@/scripts/httpUtils';
    import { useApplicationStore } from '@/stores/applicationStore';

    const applicationStore = useApplicationStore();
    const loginForm = reactive<loginFormType>({
        username: applicationStore.username,
        password: applicationStore.password
    });
</script>

<template>
    <div class="login-frame">
        <el-form class="login-form" :model="loginForm">
            <el-form-item label="学号">
                <el-input v-model="loginForm.username" size="large" placeholder="请输入你的学号" clearable/>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="loginForm.password" size="large" placeholder="请输入你的密码" clearable type="password"/>
            </el-form-item>
            <div class="button-box">
                <el-button class="login-btn" type="primary" size="large" @click="sendLoginRequest(
                    loginForm.username, loginForm.password
                )">一键登录</el-button>
                <el-button class="service-btn" type="primary" size="large" :icon="Pointer" @click="
                    applicationStore.toggleMoreShow()
                "></el-button>
            </div>
        </el-form>
    </div>
</template>

<style lang="scss">
    @import url("./style/LoginFrame.scss");
</style>
