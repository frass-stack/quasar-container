<template>
  <div id="item">
    <span></span>
    <Input :text="title" type="title" />
    <Input :text="subtitle" type="subtitle" />
    <!-- <q-list dense padding class="rounded-borders">
      <p>item</p>
      <p>item</p>
    </q-list> -->
  </div>
</template>

<script setup>
// import { ref } from "vue";
import Input from "./Input.vue";
import { useForm } from './useForm.js'

const { getTitle, getSubtitle } = useForm()

// const title = getHeader.value.title
const title = getTitle
const subtitle = getSubtitle

// const title = ref(null);
// const subtitle = ref(null);

// const data = () => {
//   return {
//     title: title.value.toText(),
//     subtitle: subtitle.value.toText(),
//   };
// };

// defineExpose({ getData: data });
</script>

<style lang="scss" scoped>
span {
  position: absolute;
  width: 100%;
  height: 10px;
  background-color: #1c87c9;
  top: 0;
  left: 0;
}
</style>
