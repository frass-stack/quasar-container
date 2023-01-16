<template>
  <div class="container">
    <div
      :contenteditable="canEdit"
      ref="element"
      @keydown="noEnter"
      @keyup="save"
      :class="type"
    >
      {{ text }}
    </div>
    <span></span>
  </div>
</template>
<script setup>
import { ref, computed, onUpdated } from "vue";
import { useForm } from "./useForm.js";

const { isEditable, isPublish } = useForm();

const props = defineProps({
  type: String,
  text: String,
  extra: Boolean,
});

const emits = defineEmits(["changed"]);

const canEdit = computed(() => {
  if (isEditable.value && !props.extra) return true;
  if (isEditable.value && props.extra) return false;
  if (isPublish.value && !props.extra) return false;
  return true;
});

const element = ref(null);
// const editable = ref(true)

// const toText = () => {
//   return element.value.innerText;
// };

// const valueElement = (text) => {
//   element.value.innerText = text
// }

// const changeEditable = () => {
//   editable.value = false;
// }

const noEnter = (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    return;
  }

  // console.log(e.target.innerText + e.key);
};

const save = () => {
  // console.log(element.value.innerText);
  emits("changed", element.value.innerText);
};

// defineExpose({ toText });
</script>

<style scoped>
.container {
  width: 100%;
}

div {
  /* font-size: 54px; */
  margin: 0;
  max-width: 100%;
  outline: none;
  height: 100px;
  height: max-content;
  position: relative;
  /* border-bottom: 1px solid #7f7f7f; */
  color: rgb(63, 63, 63);
}

span {
  position: absolute;
  border-bottom: 3px solid #1c87c9;
  width: 0;
  bottom: 0;
  left: 0;
  transition: all 0.3s ease-out;
}

div:focus ~ span {
  width: 100%;
}

.title {
  font-size: 54px;
}

.subtitle {
  font-size: 32px;
}

.question {
  font-size: 24px;
}
</style>
