<script>
import Footer from '@/components/Footer.vue'
import { useCheckboxStore } from '@/stores/checkStores.js';
import { computed } from 'vue';

const checkboxStore = useCheckboxStore();
const isChecked = computed(() => checkboxStore.isChecked);


export default {
  name: 'Controller',
  components: {
    Footer
  },
  data() {
    return { 
      socialLinkFacebook: 'https://www.facebook.com/nordborobotics/?locale=da_DK',
      socialLinkLinkedin: 'https://www.linkedin.com/company/nordbo-robotics/?originalSubdomain=dk',
      socialLinkTwitter: 'https://twitter.com/nordborobotics?lang=da',
      socialLinkInstagram: 'https://www.instagram.com/nordbo_robotics/?hl=da'
    }
  }
}
</script>

<template>
    <header>
        <div id="pBar">
          <progress id="file" value="25" max="100"> 25% </progress>
      </div>
    </header>
    <body>
          <div class="wrapper">
            <div class="container">
              <img class="banner" src="../assets/images/Nordbo-banner.png" alt="" width="1216" height="200" aria-placeholder="Welcome to the Mimic Guide">
              <div class="banner-text">
                <h1 id="banner-h1">Mimic Guide</h1>
              </div>
            </div>
            
            <div class="content">
              <div class="startingTxt">
                <h1 id="h1Title">Mimic controller setup</h1>
                <p>In the Mimic packaging you will find the Mimic Controller and Tracker. Additionally, you will need the following:
                </p>
              </div>
              <div class="checkbox">
                  <div class="steps">
                      <h1 id="checkH1">1</h1>
                  </div>
                  <div class="description">
                      <p id="checkP">Connect the power supply to the Mimic controller</p>
                  </div>
                  <input class="check" type="checkbox" v-model="isChecked">
              </div>
              <div>
              <div class="controllerImg">
                <img src="/src/assets/images/mimicontroller.png">
              </div>
            </div>
              <div class="checkbox">
                <div class="steps">
                  <h1 id="checkH1">2</h1>
                </div>
                <div class="description">
                  <p id="checkP">Connect the Mimic Controller to the robot (see robot specific guidelines) 
                  Optional: Connect the Mimic Controller with the Gigabit switch using the ethernet cable, if connecting to other hardware is needed.</p>
                </div>
                    <input class="check" type="checkbox" v-model="userInput">
              </div>
              
              <div class="checkbox">
                <div class="steps">
                  <h1 id="checkH1">3</h1>
                </div>
                <div class="description">
                  <p id="checkP">Connect the touch screen/screen, USB-mouse and keyboard to the Mimic Controller</p>
                </div>
                  <input class="check" type="checkbox">
              </div>
              <div class="checkbox">
                <div class="steps">
                  <h1 id="checkH1">4</h1>
                </div>
                <div class="description">
                  <p id="checkP">Verify that the Mimic Controller starts up when pressing the power button</p>
                </div>
                  <input class="check" type="checkbox">
              </div>
              <div>
                <p>Note: The password for the Mimic Controller is “nordbo”.</p>
              </div>
            </div>
          
          
          <div class="buttons">
            <div>
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
            </div>
            <div>
              <router-link class="nextButton"
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
        </div>
    </body>
    
    <Footer></Footer>
    <RouterView />
</template>

<style>
.controllerImg img{
  width: 337px;
  height: 290px;
}

.content{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
  }
</style>