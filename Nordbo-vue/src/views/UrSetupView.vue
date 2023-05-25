<script>
import Footer from '@/components/Footer.vue'
import Banner from '@/components/Banner.vue'


export default {
  name: 'UrSetup',
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
  <banner></banner>
  <div id="pBar">
        <progress id="file" value="62.5" max="100"> 62.5% </progress>
    </div>
    <body class="wrapper">
      <h1 id="Title">UR Preperation</h1>
      <br>
      <h2 id="underTitle">Setup Robot Network</h2>
      <br>
      <p id="UrSetupP">In this section you will find what you need to setup the network on the robot and the Mimic Controller. This includes:</p>
      <br>
      <p id="UrSetupP">The robot</p>
      <p id="UrSetupP">The Norbo Driver (URCap)</p>
      <p id="UrSetupP">The Mimic Controller</p>
      <br>
      <p id="UrSetupP">The Ip's provided are recommended defaults. They can be changed if needed. If changed beawer that the IP on the</p>
      <p id="UrSetupP">Mimic Controller and the IP specified in the Nodbro Driver URCap must be the same</p>
      <br>
      <p id="UrSetupP">Change the IP of the Robot:</p>
      <p id="UrSetupP">Change the IP of the UR to a static IP (default IP 192.168.1.50)</p>
      <p id="UrSetupP">To change the IP on a UR, go to Settings > System > Network > IP adress</p>
      <br>

      <div class="buttons">
          <router-link 
            class="backButton" 
            to="/UrPreperationView"
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
            to="/UrCapView"
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

#UrSetupP{
  text-align: left;
  font-family: Helvetica;
  margin-top: 1%;
  font-size: 1.5vw;
  padding: 0 8.0rem 0 8.2rem !important;
  line-height: 1.1;
}

</style>