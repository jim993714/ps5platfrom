<!--
 * @Description: 
 * @Author: 
 * @Date: 2022-08-09 20:18:01
 * @LastEditors: wangzijian
 * @LastEditTime: 2022-08-10 11:34:35
-->
<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
const title = ref("nnnnnn");
let a = 1;
</script>

<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 100rpx;
  color: #8f8f94;
}
</style>
