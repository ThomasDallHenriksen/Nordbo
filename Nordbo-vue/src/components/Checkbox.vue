<template>
    <div :class="['checkbox', customClass]">
        <div class="steps">
            <h1>{{ step }}</h1>
        </div>
        <div class="description">
            <p id="checkP">{{ content }}</p>
        </div>
        <input class="check" type="checkbox" :id="checkboxId" :checked="isChecked" @change="toggleCheckbox">
    </div>
</template>
<script>
import {computed} from 'vue';
import { useCheckboxStore } from '@/stores/checkStores.js';
import { watch } from 'vue';



export default{
    props: {
        content: String,
        customClass: String,
        step: String,
    },
    setup() {
        const checkboxStore = useCheckboxStore();

        // Watch for changes in the checkbox state and save it to local storage
        watch(() => checkboxStore.isChecked, (newValue) => {
        localStorage.setItem('checkboxState', JSON.stringify(newValue));
    });
    
        // Retrieve the checkbox state from local storage on page load
        const storedState = localStorage.getItem('checkboxState');
        if (storedState) {
        checkboxStore.isChecked = JSON.parse(storedState);
    }
        return {
            isChecked: checkboxStore.isChecked,
            toggleCheckbox: checkboxStore.toggleCheckbox,
        };
    },    
  };
</script>