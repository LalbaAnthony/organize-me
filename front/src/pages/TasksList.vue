
<template>
  <div>

    <AppLayout />

    <main>
      <div class="center-message-no-content" v-if="taskStore.tasks.length === 0">
        No tasks
      </div>
      <div v-else>
        <div class="task-list-title-date">
          Jeudi 8 juin
        </div>
        <draggable v-model="taskStore.tasks" itemKey="" @start="dragging = true" @end="dragging = false">
          <!-- <template #header>
            ...
          </template> -->
          <template #item="{ element }">
            <TaskItem :key="element.id" :task="element" @copied-notify="toastNotify('Copied!', 'info')" />
          </template>
        </draggable>
      </div>
    </main>

  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useTaskStore } from '../stores/task'
import draggable from 'vuedraggable' // ? https://github.com/SortableJS/vue.draggable.next
import TaskItem from '../components/TaskItem.vue'
import AppLayout from '../components/AppLayout.vue'
import { useToast } from 'vue-toastification'; // ? https://blog.logrocket.com/selecting-best-vue-3-toast-notification-library/ https://vue-toastification.maronato.dev/

const toast = useToast();
const taskStore = useTaskStore()
const dragging = ref(false)

onMounted(async () => {
  taskStore.loadTasks()
})

function toastNotify(message, type = 'info') {
  if (type === 'error') {
    toast.error(message, {
      position: "top-right",
      timeout: 2000,
      hideProgressBar: true,
      closeButton: false,
    });
    return
  }

  if (type === 'success') {
    toast.success(message, {
      position: "top-right",
      timeout: 2000,
      hideProgressBar: true,
      closeButton: false,
    });
    return
  }
  if (type === 'info') {
    toast.info(message, {
      position: "top-right",
      timeout: 2000,
      hideProgressBar: true,
      closeButton: false,
    });
    return
  }
}

</script>

<style>
.task-list-title-date {
  margin-top: 3rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
  font-size: 1.5em;
  font-weight: 500;
  border-radius: 0.5rem;
  color: black;
}
</style>