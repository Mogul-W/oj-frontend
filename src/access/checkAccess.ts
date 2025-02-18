import ACCESS_ENUM from "@/access/accessEnum";

/**
 * 检查权限，判断当前登录用户是否有某个权限
 * @param loginUser
 * @param needAccess
 * @return boolean 有无权限
 */
const checkAccess = (
  loginUser: any,
  needAccess: string = ACCESS_ENUM.NOT_LOGIN
) => {
  //获取当前登录用户具有的权限（如果没有，默认就是未登录权限）
  const loginUserAccess = loginUser?.userRole ?? ACCESS_ENUM.NOT_LOGIN;
  if (needAccess === ACCESS_ENUM.NOT_LOGIN) {
    return true;
  }
  //如果用户登录才能访问
  if (needAccess === ACCESS_ENUM.USER) {
    //如果用户未登录，那么就是无权限
    if (loginUserAccess === ACCESS_ENUM.NOT_LOGIN) {
      return false;
    }
  }
  //如果需要管理员权限
  if (needAccess === ACCESS_ENUM.ADMIN) {
    //如果不为管理员，表示无权限
    if (loginUserAccess !== ACCESS_ENUM.ADMIN) {
      return false;
    }
  }
  return true;
};

export default checkAccess;
