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
    width: 82.604vw;
    height: 21.979vw;
    text-align: left;
}

.nachiConfigCheckbox2 {
    width: 82.604vw;
    height: 27.604vw;
    text-align: left;
}

.nachiConfigCheckbox3 {
    width: 82.604vw;
    height: 19.948vw;
    text-align: left;
}

.nachiConfigCheckbox4 {
    width: 82.604vw;
    height: 53.542vw;
    text-align: left;
}

.nachiConfigCheckbox5 {
    width: 82.604vw;
    height: 30.573vw;
    text-align: left;
}

.nachiConfigCheckbox6 {
    width: 82.604vw;
    height: 43.281vw;
    text-align: left;
}

.nachiConfigCheckbox7 {
    width: 82.604vw;
    height: 34.740vw;
    text-align: left;
}

.KukaCheckbox1 {
    width: 82.604vw;
    height: 27.656vw;
    text-align: left;
}

.KukaCheckbox2 {
    width: 82.604vw;
    height: 30.208vw;
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
   width: 9%;
}

.description{
    width: 100%;
}

.check{
    width: 12%;
    height: 30px;
}
#checkH1{
  color: #ffffff;
  margin-left: .625rem;
}
</style>