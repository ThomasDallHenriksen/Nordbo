<script>
import Footer from '@/components/Footer.vue'
import Banner from '@/components/Banner.vue'
import Checkbox from '../components/Checkbox.vue';


export default {
  name: 'NachiHardware',
  components: {
    Footer, 
    Banner,
    Checkbox
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
    </header>
    <banner></banner>
    <div id="pBar">
            <progress id="file" value="50" max="100"> 50% </progress>
        </div>
    <body class="wrapper">
            <h1 id="Title">Nachi Preperation</h1>
            <br>

            <h2 id="underTitle">Hardware Setup</h2>
            <br>
        <p id="nachiHardwareP">After the Tracker Hardware Setup, connect a Gigabit switch to theMimic Controller connect 
            2 ethernet cables to the<br>switch and the robot.</p>
        <br>
        <h2 id="underTitle">Wire the Mimic Controller to the Robot</h2>
        <div class="nachiHardwareContent">
          <checkbox content="Install the external tracking network card" 
            customClass="nachiHardwareCheckbox1" 
            step="1">
          </checkbox>

          <checkbox content="Connect the switch to the Mimic Controller" 
            customClass="nachiHardwareCheckbox2" 
            step="2">
          </checkbox>

          <checkbox content="Connect the 2 ethernet cables to the switch and rebot <p>
                            - One from the external tracking network card to the switch <p>
                            - One from the main network card to the switch" 
            customClass="nachiHardwareCheckbox3" 
            step="3">
          </checkbox>

          <checkbox content="Restart the rebot" 
            customClass="nachiHardwareCheckbox4" 
            step="4">
          </checkbox>
        </div>
        
    
        <div class="buttons">
          <router-link 
            class="backButton" 
            to="/NachiMimicView"
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

          <router-link class="nextButton"
            to="/NachiConfiqView"
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
    </body>

    <Footer></Footer>
    <RouterView />
</template>

<style>
.nachiHardwareContent{
    display: flex;
    flex-direction: column;
    align-items: center;
}

#nachiHardwareP{
    text-align: left;
    font-family: Helvetica;
    margin-top: 1%;
    font-size: 1.3vw;
    line-height: 1.1;
    padding-left: 16%;
  }
</style>