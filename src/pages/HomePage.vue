<script setup lang="ts">
    import HeadModel from '@/model/HeadModel.vue';
    import LoginFrame from '@/frame/LoginFrame.vue';
</script>

<template>
    <div class="loginCqcfe-page-home">
        <main class="home-main">
            <HeadModel/>
            <div class="main-container">
                <LoginFrame/>
            </div>
        </main>
    </div>
</template>

<style lang="scss" scoped>
    @import url("./style/HomePage.scss");
</style>
