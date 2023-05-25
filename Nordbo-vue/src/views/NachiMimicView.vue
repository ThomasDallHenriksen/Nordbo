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
        <h1 id="Title">Nachi Preperation</h1>
        <br>
        <h2 id="underTitle">Mimic for Nachi - Robot Preperations</h2>
        <br>
    <p id="nachiMimicText">What you need prior to Mimic installation</p>
    <p id="nachiMimicText">- TCP/IP ethernet module (should be installed in the robot)</p>
    <p id="nachiMimicText">- External tracking module (Nachi external tracking card)</p>
    <p id="nachiMimicText">- Gigabit switch (at least 3 ethernet ports)</p>
    <p id="nachiMimicText">- Ethernet cables (2 extras)</p>
    <p id="nachiMimicText">- HD ready touch screen (22” is recommended) or HD ready screen with mouse and keyboard</p>
    <br>
    <p id="nachiMimicText">Known unsupported models</p>
    <p id="nachiMimicText">CZ10</p>
    <p id="nachiMimicText">All Nachi cobots</p>

        <div class="buttons">
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
    </body>

    <Footer></Footer>
    <RouterView />
</template>

<style>
  #nachiMimicText{
    text-align: left;
    font-family: Helvetica;
    margin-top: 1%;
    font-size: 1.3vw;
    line-height: 1.1;
    padding-left: 5%;
  }
</style>