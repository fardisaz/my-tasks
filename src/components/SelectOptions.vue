<template>
  <div style="padding-top: 0.8rem; margin-left: auto">
    <select v-model="selected" @change="selectOption">
      <option disabled>Select a car</option>
      <option v-for="option in options" :key="option" :value="option.id">
        {{ option.value }}
      </option>
    </select>
  </div>
</template>
<script setup>
import { ref, defineEmits } from "vue";
const emit = defineEmits(["selectOption"]);
const props = defineProps({
  filter: {
    type: String,
    required: true,
  },
});
const selected = ref(props.filter);
const options = [
  { id: "all", value: "All" },
  { id: "favs", value: "Favorites" },
];
const selectOption = () => {
  emit("selectOption", selected);
};
</script>
<style scoped>
select {
  border: 2px solid #555;
  border-radius: 4px;
  font-size: 1em;
  cursor: pointer;
  background-color: #ffd859;
}
</style>
