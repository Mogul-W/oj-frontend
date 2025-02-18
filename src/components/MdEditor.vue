<template>
  <Editor :value="value" :plugins="plugins" @change="handleChange" />
</template>

<script setup lang="ts">
import gfm from "@bytemd/plugin-gfm";
import highlight from "@bytemd/plugin-highlight";
import { Editor, Viewer } from "@bytemd/vue-next";
import { ref, withDefaults, defineProps } from "vue";

/**
 * 定义属性，要把MdEditor当前输入的值暴露给父组件，便于父组件去使用，同时也是提高组件的通用性，
 * 需要定义属性，把value和handleChange事件交给父组件去管理
 */
interface Props {
  value: string;
  handleChange: (v: string) => void;
}
//未传参数时的默认值和默认函数
const props = withDefaults(defineProps<Props>(), {
  value: () => "",
  handleChange: (v: string) => {
    console.log();
  },
});
const plugins = [
  gfm(),
  highlight(),
  // Add more plugins here
];
</script>

<style>
.bytemd-toolbar-icon.bytemd-tippy.bytemd-tippy-right:last-child {
  display: none;
}
</style>
