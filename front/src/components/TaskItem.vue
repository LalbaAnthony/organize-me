<template>
    <div class="task">
        <div id="task-text" :class="props.task.done ? 'task-text done' : 'task-text'">
            {{ props.task.libelle }}
        </div>
        <div class="task-clickable">
            <img src="/icons/clipboard.svg" class="task-clickable-copy" @click="copyToClipboard(props.task.libelle)">
            <div v-if="daysLate > 0" id="task-clickable-late-pill" class="task-clickable-late-pill"
                :style="`background-color: ${getColorFromNumberOfDaysLate(daysLate)}`">
                {{ daysLate }} {{ daysLate === 1 ? 'jour' : 'jours' }}
            </div>
            <input class="task-clickable-checkbox" type="checkbox" id="checkbox" name="checkbox"
                :checked="props.task.done ? true : false" @click="taskStore.toggleCheckTask(props.task.id)">
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useTaskStore } from '../stores/task'

const emit = defineEmits(['copiedNotify'])
const taskStore = useTaskStore()

const daysLate = computed(() => dayDelta(props.task.createdDate, new Date()))

function dayDelta(date1, date2) {
    const dateObj1 = new Date(date1);
    const dateObj2 = new Date(date2);
    const msDifference = dateObj2 - dateObj1;
    const daysDifference = msDifference / (1000 * 60 * 60 * 24);
    return Math.round(daysDifference);
}

function getColorFromNumberOfDaysLate(number) {
    const fade = ["#31f900", "#57f900", "#71f900", "#96f900", "#b5f900", "#d3f900", "#f6f900", "#f9d300", "#f9b100", "#f98f00", "#f98100", "#f96900", "#f95700", "#f93200", "#f91c00", "#fb0000"];
    if (number < 1) return fade[0];
    if (number > fade.length) return fade[fade.length - 1];
    return fade[number];
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
    emit('copiedNotify')
}

const props = defineProps({
    task: {
        type: Object,
        required: true,
    },
})

</script>

<style>
.task {
    background-color: var(--vt-c-white);
    padding: 0.5rem;
    margin: 0.5rem;
    border-radius: 0.5rem;
    border: var(--vt-c-white) 1px solid;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-between;
}

.task-text {
    color: black;
    text-decoration: none;
    max-width: 80%;
    margin-right: 0.5rem;
}

.task-text.done {
    color: rgb(179, 179, 179);
    text-decoration: line-through;
    max-width: 80%;
}

.task-clickable {
    display: flex;
}

.task-clickable-late-pill {
    padding-left: 5px;
    padding-right: 5px;
    color: var(--vt-c-white);
    text-align: center;
    border-radius: 10rem;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 15px;
}

input.task-clickable-checkbox {
    width: 20px;
    height: 20px;
    margin-top: auto;
    margin-bottom: auto;
}

.task-clickable-copy {
    width: 15px;
    height: 15px;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 15px;
    cursor: pointer;
}

</style>