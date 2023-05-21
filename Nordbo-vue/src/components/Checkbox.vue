<template>
    <div class="checkbox">
        <div class="steps">
            <h1 id="checkH1">{{ checkboxNumber }}</h1>
        </div>
        <div class="description">
            <p id="checkP">{{ checkboxDescription }}</p>
        </div>
        <input class="check" type="checkbox" v-model="isChecked" @change="toggleCheckbox()">
    </div>
</template>
<script>
import {computed} from 'vue';
import { useCheckboxStore } from '@/stores/checkStores.js';
import { watch } from 'vue';



export default{
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

    props: {
    checkboxNumber: String,
    checkboxDescription: String
  }
};
</script>