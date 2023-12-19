<template>
  <div class="task">
    <h3>{{ task.title }}</h3>
    <div class="icons">
      <i class="material-icons" @click="taskStore.deleteTask(task.id)"
        >delete</i
      >
      <i
        class="material-icons"
        @click="taskStore.toggleFav(task.id)"
        :class="{ active: task.isFav }"
        >favorite</i
      >
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
import { useTaskStore } from "../stores/TaskStore";
defineProps({
  task: {
    type: Object,
    required: true,
  },
});
const taskStore = useTaskStore();
</script>
