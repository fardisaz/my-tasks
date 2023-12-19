<template>
  <main>
    <!-- heading -->
    <header>
      <img src="./assets/Pinialogo.svg" alt="pinia logo" />
      <h1>My Tasks</h1>
    </header>
    <!-- task list -->
    <div class="task-list">
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>
<script setup>
import { useTaskStore } from "./stores/TaskStore";
import TaskDetails from "./components/TaskDetails.vue";
const taskStore = useTaskStore();
</script>

<style scoped></style>
