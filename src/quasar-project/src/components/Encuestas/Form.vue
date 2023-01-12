<template>
  <div class="q-pa-md q-gutter-sm form">
    <q-btn label="Console" color="primary" @click="clicked" />
    <Header ref="header" />
    <Question v-for="op in json" :key="op._id" :array="op.opciones" :extra="op.extra" :id="op._id" />
    <!-- <Question ref="" /> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import Header from "./Header.vue";
import Question from "./Question.vue";

const header = ref(null);

const clicked = () => {
  console.log(header.value.getData());
};


const json = ref([
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
])

</script>
<style scoped>
.form {
  min-width: 340px;
  width: 780px;
  min-height: 600px;
}
</style>
