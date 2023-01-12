<template>
  <div id="option">
    <div class="check" @click="clicked"></div>
    <Input ref="input" type="question" />
    <button @click="deleteOption">X</button>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import Input from "./Input.vue";

let input = ref(null)

const props = defineProps({
  text: String,
  disabled: Boolean,
  index:Number
})

const emit = defineEmits(['deleteOption']);

const deleteOption = () => {
  emit('deleteOption', props.index)
}

const clicked = () => {
  console.log("Clicked");
};

onMounted(()=>{
  input.value.valueElement(props.text);
  if(props.disabled) {input.value.changeEditable()}
});

</script>

<style lang="scss" scoped>
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
</style>
