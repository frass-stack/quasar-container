<template>
  <div id="item">
    <Input :text="element.question" ref="question" type="question" />
    <Option v-for="(op,i) in element.opciones" :key="i" :text="op" :index="i" @deleteOption="onDeleteOption" />
    <!-- <Option />
    <Option /> -->
    <Option v-if="extraOption" text="Otros" class="question" :disabled="extraOption" />
    <AddOption @addOption="onAddOption" @addOther="onAddOther" />
    <!-- <q-list dense padding class="rounded-borders">
      <p>item</p>
      <p>item</p>
    </q-list> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import Input from "./Input.vue";
import Option from "./Option.vue";
import AddOption from './AddOption.vue';

const props = defineProps({
  // array: Array,
  // extra:Boolean,
  // id: String
  element: {
    _id: String,
    question: String,
    extra: Boolean,
    opciones: Array,
  }
})
// const arrayOptions = ref([...props.element.opciones]);
const extraOption = ref(null);


const onAddOption = () => {
  props.element.opciones.push('Nueva Opcion')
}

const onAddOther = () => {
  if(props.element.extra === false){
    extraOption.value = true
    console.log(extraOption.value)
  }else{
    extraOption.value = props.element.extra
    console.log(extraOption.value)
  }
}

const onDeleteOption = (id) => {
  if(props.element.opciones.length > 1){
    props.element.opciones.splice(id, 1)
  }
  return props.element.opciones
}

</script>

<style lang="scss">
.question {
  font-size: 24px;
}
</style>
