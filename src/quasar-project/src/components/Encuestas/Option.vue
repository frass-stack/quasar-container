<template>
  <div id="option">
    <div class="check" :class="selected && 'checked'" @click="clicked"></div>
    <Input
      :text="text"
      ref="input"
      type="question"
      :extra="extra"
      @changed="change"
    />
    <button v-if="isEditable" @click="deleteOption">X</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Input from "./Input.vue";
import { useForm } from "./useForm.js";
const { isEditable, updateOptionQuestion } = useForm();

let input = ref(null);
const selected = ref(false);

const props = defineProps({
  text: String,
  disabled: Boolean,
  extra: { type: Boolean, default: false },
  index: Number,
  indexQuestion: Number,
});

const emit = defineEmits(["deleteOption"]);

const deleteOption = () => {
  emit("deleteOption", props.index);
};

const clicked = () => {
  selected.value = !selected.value;
};

const change = (text) => {
  updateOptionQuestion(props.indexQuestion, props.index, text);
};
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

.checked {
  background-color: rgba(255, 0, 0, 0.748);
}
</style>
