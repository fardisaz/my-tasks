<template>
  <form @submit.prevent="handleSubmit" class="task-form">
    <input type="text" placeholder="I need to ..." v-model="newTask" />
    <button class="taskpage-button">Add</button>
  </form>
</template>
<script setup>
import { useTaskStore } from "@/stores/TaskStore";
import { ref } from "vue";

const taskStore = useTaskStore();
const newTask = ref("");
const handleSubmit = () => {
  if (newTask.value) {
    taskStore.addTask({
      title: newTask.value,
      isFav: false,
    });
  }
  newTask.value = "";
};
</script>
