<template>
  <div>

    <AppLayout />

    <BottomActionHabits />

    <main>
      <div class="center-message-no-content" v-if="habitStore.habits.length === 0">
        No habits
      </div>
      <div v-else>
        <draggable class="dragable-list" v-model="habitStore.habits" itemKey="" @start="dragging = true"
          @end="dragging = false; habitStore.saveHabitsToLocal()">
          <template #item="{ element }">
            <HabitItem :key="element.id" :habit="element" />
          </template>
        </draggable>
      </div>
    </main>

  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, computed, watch } from 'vue'
import { useHabitStore } from '../stores/habit'
import { useToast } from 'vue-toastification'; // ? https://blog.logrocket.com/selecting-best-vue-3-toast-notification-library/ https://vue-toastification.maronato.dev/
import draggable from 'vuedraggable' // ? https://github.com/SortableJS/vue.draggable.next
import HabitItem from '../components/HabitItem.vue'
import AppLayout from '../components/AppLayout.vue'
import BottomActionHabits from '../components/BottomActionHabits.vue'

const toast = useToast();
const habitStore = useHabitStore()

const dragging = ref(false)

const allHabitsDone = computed(() => habitStore.habits.every(habit => habit.done))

onMounted(() => {
  if (new Date(Number(localStorage.getItem('lastTimeHabitsOpened'))).getDate() !== new Date().getDate()) { // reset habits if last time opened was yesterday
    habitStore.clearHabitsFromLocal()
  }
  habitStore.loadHabitsFromLocalOrBlank()
  localStorage.setItem('lastTimeHabitsOpened', Date.now())
})

onUnmounted(() => {
  habitStore.saveHabitsToLocal()
})

watch(allHabitsDone, () => {
  if (allHabitsDone.value === true) {
    toast.success('Congrats! All habits marked as done!', {
      position: "top-right",
      timeout: 5000,
      hideProgressBar: true,
      closeButton: false,
    })
  }
})

</script>