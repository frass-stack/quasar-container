<template>
  <div id="item">
    <Input ref="question" type="question" />
    <Option v-for="(op,i) in array" :key="i" :text="op" :index="i" @deleteOption="onDeleteOption" />
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
const arrayOptions = ref([...props.array]);
const extraOption = ref(null);

const onAddOption = () => {
  props.array.value.push('nuevoPregunta')
}

const onAddOther = () => {
  if(props.extra === false){
    extraOption.value = true
  }else{
    extraOption.value = props.extra
  }
}

const onDeleteOption = (id) => {
  console.log(props.array.value)
  // if(props.array.length > 1){
  //   props.array.value.splice(id,1);
  // }
}

</script>

<style lang="scss">
.question {
  font-size: 24px;
}
</style>
