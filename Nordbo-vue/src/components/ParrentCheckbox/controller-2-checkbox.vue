<template>
    <div>
      <Checkbox checkboxNumber="2" checkboxDescription="Connect the Mimic Controller to the robot (see robot specific guidelines) 
                  Optional: Connect the Mimic Controller with the Gigabit switch using the ethernet cable, if connecting to other hardware is needed." />
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