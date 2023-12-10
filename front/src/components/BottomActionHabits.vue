<template>
    <div>
        <div :class="bottomActionOpened ? 'bottom-action-panel open' : 'bottom-action-panel'">
            <!-- <div>
                <button class="bottom-action-panel-item green">
                    <img src="/icons/bottom-action/check-all.svg" alt="Check all icon">
                </button>
            </div> -->
            <div>
                <button class="bottom-action-panel-item yellow" @click="habitStore.resetHabitsOrder()">
                    <img src="/icons/bottom-action/sort-numeric-down.svg" alt="Reset check icon">
                </button>
            </div>
            <div>
                <button class="bottom-action-panel-item red" @click="habitStore.resetHabitsFromBlank()">
                    <img src="/icons/bottom-action/arrow-clockwise.svg" alt="Reset order icon">
                </button>
            </div>
        </div>

        <button class="bottom-action-button" @click="toggleTools()">
            <img src="/icons/pencil-square.svg" alt="Add icon">
        </button>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useHabitStore } from '../stores/habit'

const habitStore = useHabitStore()

const bottomActionOpened = ref(false)

function toggleTools() {
    bottomActionOpened.value = !bottomActionOpened.value;
}

watch(bottomActionOpened, () => {
    if (bottomActionOpened.value === false) return;
    setTimeout(() => {
        bottomActionOpened.value = false;
    }, "10000");
})

</script>

<style>
.bottom-action-button {
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 1rem;
    padding: 1rem;
    border-radius: 50%;
    background-color: var(--primary);
    color: #fff;
    border: none;
    z-index: 10;
}

.bottom-action-button:active {
    background-color: var(--primary-darker);
}

.bottom-action-panel {
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 1rem;
    padding-bottom: 4.5rem;
    border-radius: 30px;
    background-color: var(--vt-c-white);
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
    display: none;
    z-index: 5;
    animation-name: slide-bottom-action-panel-anim;
    animation-duration: 0.5s;
}

@keyframes slide-bottom-action-panel-anim {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
}

.bottom-action-panel.open {
    display: block;
}

.bottom-action-panel-item {
    padding: 1rem;
    border-radius: 50%;
    border: none;
    margin: 3px;
}

.bottom-action-panel-item.green {
    background-color: rgb(61, 184, 30);
}

.bottom-action-panel-item.green:active {
    background-color: rgb(44, 136, 21);
}

.bottom-action-panel-item.yellow {
    background-color: rgb(216, 198, 39);
}

.bottom-action-panel-item.yellow:active {
    background-color: rgb(148, 136, 30);
}

.bottom-action-panel-item.red {
    background-color: rgb(211, 38, 38);
}

.bottom-action-panel-item.red:active {
    background-color: rgb(155, 28, 28);
}
</style>