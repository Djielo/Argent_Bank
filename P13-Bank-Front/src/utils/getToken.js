export function getToken() {
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");
  return token ? token : "";
}