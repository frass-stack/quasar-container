import { defineStore } from "pinia";

export const AnswerStore = defineStore("answer", {
  state: () => ({
    id: null,
  }),
  getters: {
    getTitle: (state) => {
      return state.header.title;
    },
  },
  actions: {
    setTitle(payload) {
      this.header.title = payload;
    },
  },
});
