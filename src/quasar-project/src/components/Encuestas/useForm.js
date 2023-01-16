import { storeToRefs } from "pinia";
import { Store } from "./Form.store.js";

export const useForm = () => {
  const formStore = Store(); //actions
  const store = storeToRefs(formStore); //getter

  const getTitle = store.getTitle;
  const getSubtitle = store.getSubtitle;
  const getQuestion = store.getQuestions;
  const getOpciones = store.getOpciones;
  const isEditable = store.isEditable;
  const isPublish = store.isPublish;

  const setID = formStore.setID;
  const setTitle = formStore.setTitle;
  const setQuestions = formStore.setQuestions;

  const setSubtitle = formStore.setSubtitle;
  const setEditable = formStore.setEditable;
  const setNotEditable = formStore.setNotEditable;
  const setPublish = formStore.setPublish;
  const deleteOption = formStore.deleteOption;
  const updateTitleQuestion = formStore.updateTitleQuestion;
  const updateOptionQuestion = formStore.updateOptionQuestion;
  const addQuestion = formStore.addQuestion;
  const toggleExtra = formStore.toggleExtra;
  const deleteQuestion = formStore.deleteQuestion;
  const getForm = () => {
    console.log(getTitle.value);
    console.log(getSubtitle.value);
    // getQuestion.value.forEach(e => {
    //     console.log(e.question)
    //     console.log(e.opciones)
    // })
    console.log(getOpciones.value);
  };

  // const setUser = (user) => {
  //     formStore.setUser(user);
  // }

  // const updateStates = (payload) => {
  //     formStore.updateStates(payload);
  // }

  return {
    //!getters
    getTitle,
    getSubtitle,
    getQuestion,
    isEditable,
    isPublish,
    getForm,
    //!actions
    setID,
    setTitle,
    setSubtitle,
    setQuestions,
    setEditable,
    setNotEditable,
    toggleExtra,
    setPublish,
    deleteOption,
    updateTitleQuestion,
    updateOptionQuestion,
    addQuestion,
    deleteQuestion,
    // setUser,
    // updateStates
  };
};
