<template>
  <div class="q-pa-md q-gutter-sm form">
    <q-btn label="Submit" color="primary" @click="clicked" />
    <q-btn label="Agregar pregunta" color="primary" @click="add" />
    <Header ref="header" />
    <Question
      v-for="(op, index) in json"
      :key="index"
      :element="op"
      :index="index"
    />
    <!-- <Question ref="" /> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import Header from "./Header.vue";
import Question from "./Question.vue";
import { useForm } from "./useForm.js";

const header = ref(null);
const { getQuestion, getSubtitle, getTitle, getForm, addQuestion } = useForm();

const json = getQuestion;

const clicked = () => {
  getForm();
};

const add = () => {
  addQuestion();
};

// const json = ref([
//   {
//     _id:"1",
//     question:"Pregunta 1",
//     opciones:["A", "B", "C"],
//     extra:true
//   },
//   {
//     _id:"2",
//     question:"Pregunta 2",
//     opciones:["D", "E", "F"],
//     extra:false
//   }
// ])
</script>
<style scoped>
.form {
  min-width: 340px;
  width: 780px;
  min-height: 600px;
}
</style>
