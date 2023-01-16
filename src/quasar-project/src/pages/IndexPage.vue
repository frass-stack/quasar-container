<template>
  <q-page class="flex flex-center">
    <formVue></formVue>
  </q-page>
</template>

<script setup>
import formVue from "src/components/Encuestas/Form.vue";
import { useForm } from "../components/Encuestas/useForm.js";

const form = useForm();

form.setEditable();
const data = {
  _id: "id de questionarie",
  title: "Encuesta lemon",
  subtitle: "ntoeuntoeu",
  questions: [
    {
      _id: "1", //id de la pregunta
      question: "Pregunta 1",
      opciones: ["A", "B", "C"],
      extra: true,
    },
    {
      _id: "2",
      question: "Pregunta 2",
      opciones: ["D", "E", "F"],
      extra: false,
    },
  ],
};

form.setID(data._id);
form.setTitle(data.title);
form.setSubtitle(data.subtitle);
form.setQuestions(data.questions);

//form.setPublish();
</script>
