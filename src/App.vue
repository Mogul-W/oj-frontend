<script setup lang="ts">
import BasicLayout from "./layouts/BasicLayout.vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

/**
 * 全局初始化函数，有全局单次调用的代码，都可以写到这里面
 */
const doInit = () => {
  console.log("hello,欢迎来到我的项目");
};

onMounted(() => {
  doInit();
});
</script>

<template>
  <div id="app">
    <!--    根据路由去区分多套布局-->
    <template v-if="route.path.startsWith('/user')">
      <router-view />
    </template>
    <template v-else>
      <BasicLayout />
    </template>
  </div>
</template>

<style>
#app {
}
</style>
