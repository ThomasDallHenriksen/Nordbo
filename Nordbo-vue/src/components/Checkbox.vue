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

        // Kigger efter ændredinger i checkbox state og gemmer dem i local storage
        watch(() => checkboxStore.isChecked, (newValue) => {
        localStorage.setItem('checkboxState', JSON.stringify(newValue));
    });
    
        // Modtager checkbox state fra local storage nå sidden indlæsses
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
    width: 64.8vw;
    height: 6.25vw;
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

.checkbox p{
    font-size: 1.43vw;
}

.controllerCheckbox2 {
    width: 64.8vw;
    height: 13.68vw;
}

.irTrackerCheckbox1 {
    width: 64.8vw;
    height: 9.43vw;
}

.irTrackerCheckbox2 {
    width: 64.8vw;
    height: 18.75vw;
}

.irTrackerCheckbox3 {
    width: 64.8vw;
    height: 9.43vw;
}

.urCapCheckbox1 {
    width: 64.8vw;
    height: 9.43vw;
}

.urCapCheckbox2 {
    width: 64.8vw;
    height: 9.43vw;
}

.urCapCheckbox3 {
    width: 64.8vw;
    height: 29.25vw;
}

.nachiHardwareCheckbox1{
    width: 64.8vw;
    height: 9.43vw;
}

.nachiHardwareCheckbox2{
    width: 64.8vw;
    height: 9.43vw;
}

.nachiHardwareCheckbox3{
    width: 64.8vw;
    height: 14.87vw;
}

.nachiHardwareCheckbox4{
    width: 64.8vw;
    height: 9.43vw;
}

.nachiConfigCheckbox1 {
    width: 99.75vw;
    height: 26.37vw;
    text-align: left;
}

.nachiConfigCheckbox2 {
    width: 99.75vw;
    height: 33.12vw;
    text-align: left;
}

.nachiConfigCheckbox3 {
    width: 99.75vw;
    height: 23.93vw;
    text-align: left;
}

.nachiConfigCheckbox4 {
    width: 99.75vw;
    height: 58.25vw;
    text-align: left;
}

.nachiConfigCheckbox5 {
    width: 99.75vw;
    height: 36.68vw;
    text-align: left;
}

.nachiConfigCheckbox6 {
    width: 99.75vw;
    height: 51.93vw;
    text-align: left;
}

.nachiConfigCheckbox7 {
    width: 99.75vw;
    height: 41.68vw;
    text-align: left;
}

.KukaCheckbox1 {
    width: 99.75vw;
    height: 33.18vw;
    text-align: left;
}

.KukaCheckbox2 {
    width: 99.75vw;
    height: 36.25vw;
    text-align: left;
}

.checkbox-content{
    white-space: pre-line;
}

#checkP{
    color: #ffffff;
    font-size: 1vw;
}

.steps{
   font-size: 2wv;
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
  margin-left: .625rem;
}
</style>