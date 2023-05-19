<script>
import Footer from '@/components/Footer.vue'
import Banner from '@/components/Banner.vue'


export default {
  name: 'NachiMimic',
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
  <Banner></Banner>
  <div id="pBar">
        <progress id="file" value="25" max="100"> 25% </progress>
    </div>
  <body class="wrapper">
    <div class="titel1">
        <h1 id="h1Title">Nachi Preperation</h1>
    </div>
    <div class="titel2">
        <h2 id="h2Title">Mimic for Nachi - Robot Preperations</h2>
    </div>
    <br>
    <p id="nachiMimicP">What you need prior to Mimic installation</p>
    <p id="nachiMimicP">- TCP/IP ethernet module (should be installed in the robot)</p>
    <p id="nachiMimicP">- External tracking module (Nachi external tracking card)</p>
    <p id="nachiMimicP">- Gigabit switch (at least 3 ethernet ports)</p>
    <p id="nachiMimicP">- Ethernet cables (2 extras)</p>
    <p id="nachiMimicP">- HD ready touch screen (22” is recommended) or HD ready screen with mouse and keyboard</p>
    <br>
    <p id="nachiMimicP">Known unsupported models</p>
    <p id="nachiMimicP">CZ10</p>
    <p id="nachiMimicP">All Nachi cobots</p>
        <div class="buttons">
        <div>
          <router-link 
            class="backButton" 
            to="/UrReadyView"
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
            to="/NachiHardwareView"
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
  .titel1{
    text-align: center;
  }
  .titel2{
    text-align: center;
  }
  #nachiMimicP{
    text-align: left;
    font-family: Helvetica;
    margin-top: 1%;
    font-size: 1.3vw;
    line-height: 1.1;
    padding-left: 5%;
  }
</style>