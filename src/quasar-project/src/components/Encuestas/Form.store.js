import { defineStore } from "pinia";

export const Store = defineStore("form", {
  state: () => ({
    id: null,
    title: null,
    subtitle: null,
    questions: [],
    editable: false,
    publish: false,
  }),
  getters: {
    getID: (state) => {
      return state.id;
    },
    getTitle: (state) => {
      return state.title;
    },
    getSubtitle: (state) => {
      return state.subtitle;
    },
    getQuestions: (state) => {
      return state.questions;
    },
    isEditable: (state) => {
      return state.editable;
    },
    isPublish: (state) => {
      return state.publish;
    },
  },
  actions: {
    setID(id) {
      this.id = id;
    },
    setTitle(payload) {
      this.title = payload;
    },
    setSubtitle(payload) {
      this.subtitle = payload;
    },
    setQuestions(array) {
      this.questions = array;
    },
    setEditable() {
      this.editable = true;
    },
    setNotEditable() {
      this.editable = false;
    },
    toggleExtra(id) {
      for (let question of this.questions) {
        if (question._id === id) {
          question.extra = !question.extra;
        }
      }
    },
    setPublish() {
      this.publish = true;
    },
    deleteOption(id, index) {
      for (let question of this.questions) {
        if (question._id === id) {
          if (question.opciones.length > 1) {
            question.opciones.splice(index, 1);
          }
        }
      }
    },

    updateTitleQuestion(index, payload) {
      this.questions[index].question = payload;
    },

    updateOptionQuestion(index, indexOpc, payload) {
      this.questions[index].opciones[indexOpc] = payload;
    },
    addQuestion() {
      this.questions.push({
        _id: null,
        question: "Pregunta nueva",
        opciones: ["Nueva opcion"],
        extra: false,
      });
    },
    deleteQuestion(index) {
      this.questions.splice(index, 1);
    },
  },
});
