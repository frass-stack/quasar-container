<template>
  <div id="item">
    <Input
      :text="element.question"
      ref="titleQuestion"
      type="question"
      @changed="change"
    />
    <Option
      v-for="(op, i) in element.opciones"
      :key="i"
      :text="op"
      :indexQuestion="props.index"
      :index="i"
      @deleteOption="onDeleteOption"
    />
    <!-- <Option />
    <Option /> -->
    <Option
      v-if="element.extra"
      text="Otros"
      class="question"
      :extra="true"
      @deleteOption="onDeleteExtra"
    />
    <AddOption
      v-if="isEditable"
      @addOption="onAddOption"
      @addOther="onAddOther"
      @delete="onDeleteQuestion"
    />
    <!-- <q-list dense padding class="rounded-borders">
      <p>item</p>
      <p>item</p>
    </q-list> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useForm } from "./useForm.js";
import Input from "./Input.vue";
import Option from "./Option.vue";
import AddOption from "./AddOption.vue";

const {
  toggleExtra,
  isEditable,
  deleteOption,
  updateTitleQuestion,
  deleteQuestion,
} = useForm();

const props = defineProps({
  // array: Array,
  // extra:Boolean,
  // id: String
  element: {
    _id: String,
    question: String,
    extra: Boolean,
    opciones: Array,
  },
  index: Number,
});
// const arrayOptions = ref([...props.element.opciones]);
const extraOption = ref(null);
const titleQuestion = ref(null);

const change = (text) => {
  // console.log(props.element._id);
  updateTitleQuestion(props.index, text);
};

const onAddOption = () => {
  props.element.opciones.push("Nueva Opcion");
};

const onAddOther = () => {
  if (!props.element.extra) {
    toggleExtra(props.element._id);
  }
};

const onDeleteOption = (index) => {
  deleteOption(props.element._id, index);
};

const onDeleteQuestion = () => {
  deleteQuestion(props.index);
};

const onDeleteExtra = () => {
  toggleExtra(props.element._id);
};
</script>

<style lang="scss">
.question {
  font-size: 24px;
}
</style>
