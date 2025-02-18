import store from "@/store";
import router from "@/router";
import ACCESS_ENUM from "@/access/accessEnum";
import checkAccess from "@/access/checkAccess";

router.beforeEach(async (to, from, next) => {
  console.log("登录的用户信息", store.state.user.loginUser);
  const logUser = store.state.user.loginUser;
  //自动登录
  //如果之前没登录过，自动登录
  if (!logUser || !logUser.userRole) {
    //加await是为了等用户登录成功后，再执行后续的代码
    await store.dispatch("user/getLoginUser");
  }

  //权限校验+路由拦截
  const needAccess = (to.meta?.access as string) ?? ACCESS_ENUM.NOT_LOGIN;
  //要跳转的页面必须要登录
  if (needAccess !== ACCESS_ENUM.NOT_LOGIN) {
    //如果没登录，跳转去登录，然后再跳回来
    if (!logUser || !logUser.userRole) {
      next(`/user/login?redirect=${to.fullPath}`);
      return;
    }
    //如果已经登录，看看权限够不够
    if (!checkAccess(logUser, needAccess)) {
      next("/noAuth");
      return;
    }
  }
  next();
});
