import { createStore } from "vuex";
import user from "./user";

export default createStore({
  mutations: {},
  actions: {
    // 把 getLoginUser 显式地放在 actions 中，带上命名空间
    // 使用类型断言，告诉 TypeScript user.actions 确定存在
    "user/getLoginUser": user.actions!.getLoginUser,
  },
  modules: {
    user,
  },
});
