<template>
    <div class="checkbox">
        <div class="steps">
            <h1 id="checkH1">1</h1>
        </div>
        <div class="description">
            <p id="checkP">Connect the power supply to the Mimic controller</p>
        </div>
        <input class="check" type="checkbox" v-model="isChecked" @change="checkboxStore.toggleCheckbox()">
    </div>
</template>
<script>
import {computed} from 'vue';
import { useCheckboxStore } from '@/stores/checkStores.js';

export default{
    setup() {
        const checkboxStore = useCheckboxStore();

        return {
            isChecked: checkboxStore.isChecked,
        };
    },
};
</script>