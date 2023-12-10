import { defineStore } from 'pinia'

export const useHabitStore = defineStore('habits', {
  state: () => ({
    habits: [],
    blankHabits: [
      { id: 1, order: 1, libelle: "Drink coffee", isMainOfTheDay: false, done: false, },
    ],
  }),

  actions: {

    clearHabitsFromLocal() {
      localStorage.removeItem('habits')
    },

    saveHabitsToLocal() {
      localStorage.setItem('habits', JSON.stringify(this.habits))
    },

    resetHabitsFromBlank() {
      this.habits = this.blankHabits
      this.saveHabitsToLocal()
    },

    resetHabitsOrder() {
      this.habits.sort((a, b) => a.order - b.order);
      this.saveHabitsToLocal()
    },

    toggleCheckHabit(habitId) {
      const habit = this.habits.find(t => t.id === habitId)
      habit.done = !habit.done
      this.saveHabitsToLocal()
    },

    loadHabitsFromLocalOrBlank() {
      this.habits = JSON.parse(localStorage.getItem('habits'))
      if (!this.habits) {
        this.resetHabitsFromBlank()
      }
      this.saveHabitsToLocal()
      return this.habits
    },

  },
})
