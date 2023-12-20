<template>
  <main>
    <!-- heading -->
    <header>
      <img src="./assets/Pinialogo.svg" alt="pinia logo" />
      <h1>My Tasks</h1>
    </header>

    <!-- new task form -->
    <div class="new-task-form">
      <TaskForm />
    </div>
    <!-- filter -->
    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">Favorite tasks</button>
    </nav>
    <!-- loading -->
    <div class="loading" v-if="taskStore.loading">Loading tasks...</div>
    <!-- task list -->
    <div class="task-list" v-if="filter === 'all'">
      <p>You have {{ taskStore.totalCount }} tasks left to do</p>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>

    <div class="task-list" v-if="filter === 'favs'">
      <p>You have {{ taskStore.favCount }} favs left to do</p>
      <div v-for="task in taskStore.favs" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>
<script setup>
import { useTaskStore } from "./stores/TaskStore";
import TaskDetails from "./components/TaskDetails.vue";
import { ref } from "vue";
import TaskForm from "./components/TaskForm.vue";
const taskStore = useTaskStore();

// fetch tasks
taskStore.getTasks();
const filter = ref("all");
</script>

<style scoped></style>
