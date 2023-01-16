<template>
  <div id="option">
    <div class="row-btn">
      <q-btn class="text" @click="addOption">Agregar Opcion</q-btn>
      <q-btn class="text" @click="addOther">Agregar 'Otros'</q-btn>
      <q-btn class="text" @click="deleteQuestion">Eliminar pregunta</q-btn>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["addOption", "addOther", "delete"]);

const addOption = () => {
  emit("addOption");
};

const addOther = () => {
  emit("addOther");
};
const deleteQuestion = () => {
  emit("delete");
};
</script>

<style scoped>
#option {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-top: 20px;
}

.check {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid grey;
  background-color: transparent;
  margin-right: 10px;
}

.text {
  font-size: 19px;
}

.row-btn {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-right: 10px;
}
</style>
