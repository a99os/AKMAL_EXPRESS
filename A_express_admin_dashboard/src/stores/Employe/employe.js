import { defineStore } from "pinia";
import axios from "../../Service/axios";
export const employeStore = defineStore("employe", {
  state: () => {
    return {
      employes: null,
    };
  },
  getters: {
    getterEmployes(state) {
      return state.employes;
    },
  },
  actions: {
    async addEmploye(full_name, user_name, hashed_password) {
      try {
        const employe = await axios.post("/admin", {
          full_name,
          user_name,
          hashed_password,
        });
        if (employe?.data?.status == 400) {
          return employe;
        } else if (employe?.data?.status == 201) {
          return false;
        }
      } catch (error) {
        console.log(error);
      }
    },

    async getEmployes() {
      try {
        const result = await axios.get("/admin");
        this.employes = result.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
