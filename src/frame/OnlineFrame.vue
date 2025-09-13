<script setup lang="ts">
  import { sendLogoutRequest } from '@/scripts/httpUtils';
</script>

<template>
    <div class="online-frame">
        <el-result icon="success" title="校园网已连接">
        <template #extra>
          <el-button type="danger" @click="sendLogoutRequest()">注销连接</el-button>
        </template>
      </el-result>
    </div>
</template>

<style lang="scss" scoped>
    @import url("./style/OnlineFrame.scss");
</style>