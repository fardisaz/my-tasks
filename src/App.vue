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

    <!-- loading -->
    <!-- <div class="loading" v-if="loading">Loading tasks...</div> -->
    <!-- task list -->
    <div style="max-width: 700px; margin-left: auto; margin-right: auto">
      <div class="task-list" v-if="filter === 'all'">
        <div class="aligneItems">
          <p>You have {{ totalCount }} task(s) left to do</p>
          <SelectOptions :filter="filter" @selectOption="selectFilter" />
        </div>
        <div v-for="task in tasks" :key="task.id">
          <TaskDetails :task="task" />
        </div>
      </div>

      <div class="task-list" v-if="filter === 'favs'">
        <div class="aligneItems">
          <p>You have {{ favCount }} favorite(s) left to do</p>
          <SelectOptions :filter="filter" @selectOption="selectFilter" />
        </div>
        <div v-for="task in favs" :key="task.id">
          <TaskDetails :task="task" />
        </div>
      </div>
      <!-- reset -->
      <nav class="filter">
        <button v-show="tasks.length > 0" @click="taskStore.$reset">
          reset state
        </button>
      </nav>
    </div>
  </main>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { useTaskStore } from "./stores/TaskStore";
import TaskDetails from "./components/TaskDetails.vue";
import { ref } from "vue";
import TaskForm from "./components/TaskForm.vue";
import SelectOptions from "./components/SelectOptions.vue";

const taskStore = useTaskStore();
const { tasks, favs, totalCount, favCount } = storeToRefs(taskStore);

// fetch tasks
taskStore.getTasks();
const filter = ref("all");
const selectFilter = (selected) => {
  filter.value = selected.value;
};
</script>

<style scoped></style>
