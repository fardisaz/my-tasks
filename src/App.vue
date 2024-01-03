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
    <!-- filter & reset -->
    <nav class="filter">
      <button @click="taskStore.$reset">reset state</button>
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">Favorite tasks</button>
    </nav>
    <!-- loading -->
    <!-- <div class="loading" v-if="loading">Loading tasks...</div> -->
    <!-- task list -->
    <div class="task-list" v-if="filter === 'all'">
      <p>You have {{ totalCount }} tasks left to do</p>
      <div v-for="task in tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>

    <div class="task-list" v-if="filter === 'favs'">
      <p>You have {{ favCount }} favs left to do</p>
      <div v-for="task in favs" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { useTaskStore } from "./stores/TaskStore";
import TaskDetails from "./components/TaskDetails.vue";
import { ref } from "vue";
import TaskForm from "./components/TaskForm.vue";

const taskStore = useTaskStore();
const { tasks, loading, favs, totalCount, favCount } = storeToRefs(taskStore);

// fetch tasks
taskStore.getTasks();
const filter = ref("all");
</script>

<style scoped></style>
