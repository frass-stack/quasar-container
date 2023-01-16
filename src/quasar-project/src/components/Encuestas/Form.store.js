import { defineStore } from "pinia";

export const Store = defineStore("form", {
  state: () => ({
    header: {
        title:"Sin titulo",
        subtitle:"Sin descripcion"
    },
    question: [
      {
        _id:"1",
        question:"Pregunta 1",
        opciones:["A", "B", "C"],
        extra:true
      },
      {
        _id:"2",
        question:"Pregunta 2",
        opciones:["D", "E", "F"],
        extra:false
      }
    ]
  }),
  getters: {
    getTitle:(state) => {
        return state.header.title;
    },
    getSubtitle:(state) => {
        return state.header.subtitle;
    },
    getQuestions:(state) => {
      return state.question
    },
    getOpciones:(state) => {
      state.question.forEach(e => {
        console.log(e.question)
        e.opciones.forEach(e => console.log(e))
      })
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