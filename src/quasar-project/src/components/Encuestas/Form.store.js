import { defineStore } from "pinia";

export const Store = defineStore("form", {
  state: () => ({
    header: {
        title:"Sin titulo",
        subtitle:"Sin descripcion"
    },
    text:'hola'
  }),
  getters: {
    getTitle:(state) => {
        return state.header.title;
    },
    getSubtitle:(state) => {
        return state.header.subtitle;
    }
  },
  actions: {
    setTitle(payload){
        this.header.title = payload
    },
    setSubtitle(payload){
        this.header.subtitle = payload
    },
  },
});