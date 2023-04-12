import { defineStore } from "pinia";
import axios from "../../Service/axios";
export const loginStore = defineStore("login", {
  state: () => {
    return {
      isLogin: localStorage.getItem("isLogin") == "true",
      role: localStorage.getItem("role"),
    };
  },
  actions: {
    async login(user_name, password) {
      if (password && user_name) {
        try {
          const admin = await axios.post("/admin/login", {
            user_name,
            password,
          });
          if (admin?.data?.status == 400) {
            return admin;
          } else if (admin?.data?.admin) {
            this.isLogin = true;
            this.role = admin.data.admin.is_creator ? "1" : "2";
            localStorage.setItem("token", admin.data?.token?.refresh_token);
            localStorage.setItem("isLogin", true);
            localStorage.setItem("username", admin.data?.admin?.user_name);
            localStorage.setItem(
              "role",
              admin.data?.admin?.is_creator ? "1" : "2"
            );
          }
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
});
