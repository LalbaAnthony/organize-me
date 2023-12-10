<template>
    <div :class="props.habit.isMainOfTheDay ? 'habit is-main' : 'habit'"
        @click="habitStore.toggleCheckHabit(props.habit.id)">
        <div id="habit-text" :class="props.habit.done ? 'habit-text done' : 'habit-text'">
            {{ props.habit.libelle }}
        </div>
        <div class="habit-clickable">
            <input class="habit-clickable-checkbox" type="checkbox" id="checkbox" name="checkbox"
                :checked="props.habit.done ? true : false">
        </div>
    </div>
</template>

<script setup>
import { useHabitStore } from '../stores/habit'

const habitStore = useHabitStore()

const props = defineProps({
    habit: {
        type: Object,
        required: true,
    },
})

</script>

<style>
.habit {
    color: var(--vt-c-black);
    background-color: var(--vt-c-white);
    padding: 0.5rem;
    margin: 0.5rem;
    border-radius: 0.5rem;
    border: var(--vt-c-white) 1px solid;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-between;
}

/* .habit.is-main {
    color: var(--vt-c-white);
    background-color: var(--primary-ligher);
} */

.habit-text {
    text-decoration: none;
    max-width: 80%;
    margin-right: 0.5rem;
}

.habit-text.done {
    color: rgb(179, 179, 179);
    text-decoration: line-through;
    max-width: 80%;
}

.habit-clickable {
    display: flex;
}

input.habit-clickable-checkbox {
    width: 20px;
    height: 20px;
    margin-top: auto;
    margin-bottom: auto;
}
</style>