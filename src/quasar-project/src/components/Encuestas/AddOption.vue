<template>
    <div id="option">
        <div class="row-btn">
            <q-btn class="text" @click="addOption" >Agregar Opcion</q-btn>
            <q-btn class="text" @click="addOther" >Agregar 'Otros'</q-btn>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(['addOption', 'addOther'])

const addOption = () => {
    emit('addOption')
}

const addOther = () => {
    emit('addOther')
}

</script>

<style scoped>
#option {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-top: 10px;
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
    font-size: 24px;
}

.row-btn {
    display: flex;
    flex-direction: row;
    margin-right: 10px;
}
</style>