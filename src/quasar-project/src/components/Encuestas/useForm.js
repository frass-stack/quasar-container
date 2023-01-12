import { storeToRefs } from "pinia";
import { Store } from "./Form.store.js";

export const useForm = () => {

    const formStore = Store(); //actions
    const store = storeToRefs(formStore); //getter

    const getTitle = store.getTitle;
    const getSubtitle = store.getSubtitle;

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
        //!actions
        // setUser,
        // updateStates
    }
}