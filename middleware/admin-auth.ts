export default defineNuxtRouteMiddleware((to, from) => {
  const admin_access_token = useCookie("admin_access_token");
  if (!admin_access_token.value) {
    return navigateTo("/admin/login");
  }
});
