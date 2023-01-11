<template>
  <div id="item">
    <Input ref="question" type="question" />
    <Option />
    <Option />
    <Option />
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

const onAddOption = () => {
  console.log('Selecciono: onAddOption')
}

const onAddOther = () => {
  console.log('Selecciono: onAddOther')
}

</script>

<style lang="scss"></style>
