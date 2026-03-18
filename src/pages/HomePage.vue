<script setup lang="ts">
    import { onMounted } from 'vue';
    import HeadModel from '@/model/HeadModel.vue';
    import { open } from '@tauri-apps/plugin-shell';
    import { urlConfig } from '@/config/url-config';
    import LoginFrame from '@/frame/LoginFrame.vue';
    import OnlineFrame from '@/frame/OnlineFrame.vue';
    import { sendGetStatusRequest } from '@/scripts/httpUtils';
    import { useApplicationStore } from '@/stores/applicationStore';

    const applicationStore = useApplicationStore();
    onMounted((): void => sendGetStatusRequest()); // 获取在线用户状态
</script>

<template>
    <div class="loginCqcfe-page-home">
        <main class="home-main">
            <HeadModel/>
            <div class="main-container" v-loading="applicationStore.onRequesting">
                <OnlineFrame v-if="applicationStore.onlineStatus"/>
                <LoginFrame v-else/>
            </div>
        </main>
        <transition name="el-fade-in-linear">
            <div class="button-main" v-show="applicationStore.moreShowStatus">
                <el-button type="primary" plain @click="open(
                    urlConfig.zizhuService
                )">自助服务</el-button>
                <el-button type="primary" plain @click="open(
                    urlConfig.forgetPassword
                )">忘记密码</el-button>
                <el-button type="primary" plain @click="open(
                    urlConfig.useZhinan
                )">使用指南</el-button>
            </div>
        </transition>
    </div>
</template>

<style lang="scss" scoped>
    @import url("./style/HomePage.scss");
</style>
