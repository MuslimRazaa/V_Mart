export const handleLogout = () => {
  localStorage.removeItem("root");
  localStorage.removeItem("current");
};
