<template>
  <div id="item">
    <Input ref="question" type="question" />
    <Option v-for="(op,i) in array" :key="i" :text="op"/>
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
  array: Array,
  extra:Boolean,
  id: String
})
const array = ref([...props.array]);
const extraOption = ref(null);

const onAddOption = () => {
  console.log('Selecciono: onAddOption')
  array.value.push('nuevoPregunta')
}

const onAddOther = () => {
  // console.log('Selecciono: onAddOther')
  // console.log(extraOption.value)
  console.log(extraOption.value)
  console.log(props.extra)
  if(props.extra === false){
    extraOption.value = true
    console.log(props.extra)
    console.log(extraOption.value)
  }else{
    extraOption.value = props.extra
  }
}

</script>

<style lang="scss">
.question {
  font-size: 24px;
}
</style>
