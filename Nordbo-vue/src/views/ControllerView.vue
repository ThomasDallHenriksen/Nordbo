<script>
import Footer from '@/components/Footer.vue'
import Banner from '@/components/Banner.vue'
import { defineStore } from 'pinia'
import { useCheckboxStore } from '@/stores/checkStores.js'
import { computed } from 'vue';
import Checkbox from '../components/Checkbox.vue';


export default{
  name: 'Controller',
  components: {
    Footer, 
    Banner,
    Checkbox,
  },
  setup() {
    const checkboxStore = useCheckboxStore();
    const isChecked = computed(() => checkboxStore.isChecked);

    return { 
      socialLinkFacebook: 'https://www.facebook.com/nordborobotics/?locale=da_DK',
      socialLinkLinkedin: 'https://www.linkedin.com/company/nordbo-robotics/?originalSubdomain=dk',
      socialLinkTwitter: 'https://twitter.com/nordborobotics?lang=da',
      socialLinkInstagram: 'https://www.instagram.com/nordbo_robotics/?hl=da'
    };
  }
}

</script>

<template>
    <header>
    </header>
    <body>
      <Banner></Banner>
      <div id="pBar">
          <progress id="file" value="25" max="100"> 25% </progress>
      </div>

          <div class="wrapper">
            <div class="content">
              <div class="startingTxt">
                <h1 id="Title">Mimic controller setup</h1>
                <br>
                <p>In the Mimic packaging you will find the Mimic Controller and Tracker. Additionally, you will need the following:</p>
                <br>
              </div>

              <checkbox content="Connect the power supply to the Mimic controller" 
                        customClass="controllerCheckbox1" 
                        step="1">
             </checkbox>
              
              <div class="controllerImg">
                <img src="/src/assets/images/mimicontroller.png">
              </div>
            
              <checkbox 
                  content="Connect the Mimic Controller to the robot (see robot specific guidelines) 
                  Optional: Connect the Mimic Controller with the Gigabit switch using the ethernet cable, if connecting to other hardware is needed." 
                  customClass="controllerCheckbox2"
                  step="2"></checkbox>
              <checkbox 
                  content="Connect the touch screen/screen, USB-mouse and keyboard to the Mimic Controller" 
                  customClass="ControllerCheckbox3"
                  step="3"></checkbox>
              <checkbox 
                  content="Verify that the Mimic Controller starts up when pressing the power button" 
                  customClass="controllerCheckbox4"
                  step="4"></checkbox>
              <div class="note">
                <p>Note: The password for the Mimic Controller is “nordbo”.</p>
              </div>
            </div>
          
          
          <div class="buttons">
              <router-link 
                class="backButton" 
                to="/HardwareView"
                custom
                v-slot="{ navigate }"
              >
                <button
                  @click="navigate"
                  role="link"
                  id="backButton"
                >
                  Back
                </button>
              </router-link>

              <router-link 
                class="nextButton"
                to="/IrTrackerView"
                custom
                v-slot="{ navigate }"
              >
                <button
                  @click="navigate"
                  role="link"
                  id="nextButton"
                >
                  Next
                </button>
              </router-link>
          </div>
        </div>
    </body>
    
    <Footer></Footer>
    <RouterView />
</template>

<style>
.startingTxt p{
  font-size: 1.87vw;
}

.controllerImg {
  display: flex;
  justify-content: center;
  align-items: center;
}

.controllerImg img {
  max-width: 100%;
  width: 17.552vw
}

.content{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
  }

.note {
  font-size: 1vw;
}
</style>