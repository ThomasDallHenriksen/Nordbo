<script>
import Footer from '@/components/Footer.vue'
import Banner from '@/components/Banner.vue'

export default {
  name: 'Hardware',
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
          <progress id="file" value="12.5" max="100"> 12.5% </progress>
      </div>
      <div class="wrapper">
      <h1>Welcome to the Mimic Guide</h1>
      <h1>Hardware Setup</h1>
      <div id="padLeft">
        <p>In the Mimic packaging you will find the Mimic Controller and Tracker. Additionally, you will need the following:</p> 
        <p> - Umbraco key set</p>
        <p>- Proper flanges for your tools and Mimic Robot Pointer</p> 
        <p> Note: The Mimic Robot Pointer is compatible with the tool flange of UR robots.</p>
        <p>- Touch screen or screen (without touch functionality) and a mouse and keyboard</p>
        <p>- 1 Gigabit switch (optional - if connecting to other hardware is needed)</p>
        <p>- Ethernet cables (for any additional hardware needed)</p>
      </div>
        <h1>Video demostration</h1>
        <div class="video">
          <iframe src="https://www.youtube.com/embed/eeD26XRyqDE" width="750" height="400"></iframe>
        </div>
        <div class="buttons">
          <div>
            <router-link 
              class="backButton" 
              to="/"
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
            <router-link 
              class="nextButton"
              to="/ControllerView"
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
  .video{
    display: flex;
  justify-content: center;
  align-items: center;
  }

#pDesrciptionHardware1{
  text-align: left;
  font-family: Helvetica;
  margin-top: 1%;
  font-size: 1.5vw;
  padding: 0 8.0rem 0 8.2rem !important;
  line-height: 1.1;
}

#pDesrciptionHardware{
  text-align: left;
  font-family: Helvetica;
  margin-top: 1%;
  font-size: 1.5vw;
  padding: 0 8.2rem 0 8.2rem !important;
  line-height: 1.1;
}

#h1TitleHardware{
  margin-top: 1%;

  font-size: 2vw;
  text-align: left;
}

#padLeft{
  padding-left: 30%;
}
</style>