<template>
    <div>
      <Checkbox checkboxNumber="1" checkboxDescription="Connect the power supply to the Mimic controller" />
      <!-- Add more CheckboxComponent instances as needed -->
    </div>
  </template>
  
  <script>
  import Checkbox from '@/components/Checkbox.vue';
  
  export default {
    components: {
      Checkbox
    }
  };
  </script>