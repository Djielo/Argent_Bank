export function storageToken() {
  const token = localStorage.getItem("user") || sessionStorage.getItem("user");
  return token ? JSON.parse(token) : "";
}
