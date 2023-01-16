import { storeToRefs } from "pinia";
import { Store } from "./Form.store.js";

export const useForm = () => {

    const formStore = Store(); //actions
    const store = storeToRefs(formStore); //getter

    const getTitle = store.getTitle;
    const getSubtitle = store.getSubtitle;
    const getQuestion = store.getQuestions;
    const getOpciones = store.getOpciones

    const getForm = () => {
        console.log(getTitle.value)
        console.log(getSubtitle.value)
        // getQuestion.value.forEach(e => {
        //     console.log(e.question)
        //     console.log(e.opciones)
        // })
        console.log(getOpciones.value)
    }

    // const setUser = (user) => {
    //     formStore.setUser(user);
    // }

    // const updateStates = (payload) => {
    //     formStore.updateStates(payload);
    // }

    return{
        //!getters
        getTitle,
        getSubtitle,
        getQuestion,
        getForm,
        //!actions
        // setUser,
        // updateStates
    }
}