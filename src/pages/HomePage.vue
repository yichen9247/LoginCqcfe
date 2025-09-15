<script setup lang="ts">
    import { onMounted } from 'vue';
    import HeadModel from '@/model/HeadModel.vue';
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
    </div>
</template>

<style lang="scss" scoped>
    @import url("./style/HomePage.scss");
</style>