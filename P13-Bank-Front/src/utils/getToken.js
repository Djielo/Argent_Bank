export function getToken() {
  const token = localStorage.getItem("user") || sessionStorage.getItem("user");
  return token ? token : "";
}