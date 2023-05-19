<script>
import Footer from '@/components/Footer.vue'
import Banner from '@/components/Banner.vue'

export default {
  name: 'UrCap',
  components: {
    Footer, Banner
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
    <body>
      <banner></banner>
      <div id="pBar">
          <progress id="file" value="75.0" max="100"> 75.0% </progress>
      </div>
        <div class="wrapper">
            <h1 id="h1Title">UR Preperation</h1>
            <p id="UrCapP">How to Install the URCap Needed and Setup Mimic Controller and Nordbo Driver</p>
          <div class="UrCapContent">
            <div class="checkbox ur--checkbox">
                <div class="steps">
                    <h1 id="checkH1">1</h1>
                </div>
                <div class="description">
                    <p id="checkP">Plug in the USB with the Caps into the robot Teach Pendant</p>
                </div>
                <input class="check" type="checkbox">
            </div>

            <div class="checkbox ur--checkbox">
                <div class="steps">
                    <h1 id="checkH1">2</h1>
                </div>
                <div class="description">
                    <p id="checkP">Install the Nordbo Driver URCap</p>
                    <p id="checkP">The Nordbo Driver URCap needs to be version 2.4 </p>
                </div>
                <input class="check" type="checkbox">
            </div>

            <div class="checkbox ur--step3">
                <div class="steps">
                    <h1 id="checkH1">3</h1>
                </div>
                <div class="description">
                    <p id="checkP">Plug in the USB with the Caps into the robot Teach Pendant</p>
                    <br>
                    <p id="checkP">Enable the Nordbo Driver in the check box</p>
                    <p id="checkP">Insert the Mimic Controller IP: 192.168.1.20 (default)</p> 
                    <p id="checkP">Note: The IP can be changed but needs to be the same as the Mimic Controller provided in the box.</p>
                    <p id="checkP">Press “Update” to finish</p>
                    <p id="checkP">Save the UR Installation File (“Save…” > “Save UR Installation File…”</p>
                </div>
                <input class="check" type="checkbox">
            </div>
        </div>
        <div class="buttons">
        <div>
          <router-link 
            class="backButton" 
            to="/UrSetupView"
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
            to="/UrMainView"
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


.ur--checkbox {
  height: 151px;
  margin: 10px;
}

#UrCapP{
  text-align: center;
  font-family: Helvetica;
  font-weight: bold;
  margin-top: 1%;
  font-size: 1.5vw;
  padding: 0 8.0rem 0 8.2rem !important;
  line-height: 1.1;
}

.UrCapContent{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3%;
}



</style>