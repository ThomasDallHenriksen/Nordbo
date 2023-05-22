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

        const descriptionContent = (content) => {
            return `<p>${content.replace(/\n/g, '</p><p>')}</p>`;
        }

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
            descriptionContent,
        };
    },    
  };
</script>

<template>
    <div :class="['checkbox', customClass]">
        <div class="steps">
            <h1>{{ step }}</h1>
        </div>
        <div class="description">
            <p id="checkP" class="checkbox-content" v-html="descriptionContent(content)"></p>
        </div>
        <input class="check" type="checkbox" :id="checkboxId" :checked="isChecked" @change="toggleCheckbox">
    </div>
</template>

<style>
.checkbox {
    width: 64.8rem;
    height: 6.25rem;
    background-color: #02215C;
    display: flex;
    margin: 10px;
    align-items: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    text-align: center;
    font-weight: 500;
    font-size: 0.8vw;
}

.irTrackerCheckbox1 {
    width: 64.8rem;
    height: 9.43rem;
}

.irTrackerCheckbox2 {
    width: 64.8rem;
    height: 18.75rem;
}

.irTrackerCheckbox3 {
    width: 64.8rem;
    height: 9.43rem;
}

.urCapCheckbox1 {
    width: 64.8rem;
    height: 9.43rem;
}

.urCapCheckbox2 {
    width: 64.8rem;
    height: 9.43rem;
}

.urCapCheckbox3 {
    width: 64.8rem;
    height: 29.25rem;
}

.nachiHardwareCheckbox1{
    width: 64.8rem;
    height: 9.43rem;
}

.nachiHardwareCheckbox2{
    width: 64.8rem;
    height: 9.43rem;
}

.nachiHardwareCheckbox3{
    width: 64.8rem;
    height: 14.87rem;
}

.nachiHardwareCheckbox4{
    width: 64.8rem;
    height: 9.43rem;
}

.nachiConfigCheckbox1 {
    width: 99.75rem;
    height: 26.37rem;
    text-align: left;
}

.nachiConfigCheckbox2 {
    width: 99.75rem;
    height: 33.12rem;
    text-align: left;
}

.nachiConfigCheckbox3 {
    width: 99.75rem;
    height: 23.93rem;
    text-align: left;
}

.nachiConfigCheckbox4 {
    width: 99.75rem;
    height: 58.25rem;
    text-align: left;
}

.nachiConfigCheckbox5 {
    width: 99.75rem;
    height: 36.68rem;
    text-align: left;
}

.nachiConfigCheckbox6 {
    width: 99.75rem;
    height: 51.93rem;
    text-align: left;
}

.nachiConfigCheckbox7 {
    width: 99.75rem;
    height: 41.68rem;
    text-align: left;
}

.KukaCheckbox1 {
    width: 99.75rem;
    height: 33.18rem;
    text-align: left;
}

.KukaCheckbox2 {
    width: 99.75rem;
    height: 36.25rem;
    text-align: left;
}

.checkbox-content{
    white-space: pre-line;
}

#checkP{
    color: #ffffff;
}

.steps{
    width: 5%;
}

.description{
    width: 80%;
}

.check{
    width: 15%;
    height: 30px;
}
#checkH1{
  color: #ffffff;
  margin-left: 10px;
}
</style>