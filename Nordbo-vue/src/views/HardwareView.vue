<script setup>
import Footer from '@/components/Footer.vue';
</script>

<template>
    <header>
      <div id="pBar">
          <progress id="file" value="12.5" max="100"> 12.5% </progress>
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
    <footer></footer>
    <footer>
    <div class="Info">
    <div class="HumanSkill">
      <h4 id="humanCentered">Human skills,</h4>
      <p id="humanCentered">machine precision</p>
    </div>
    <div class="Robotics">
      <div><p>We are an AI & robotics company specializied in No Code software for robots within industrial manufactoring</p></div>
      <div class="hej">
        <div class="Robotics email--image"></div>
        <h3>contact@nordbo-robotics.com</h3>
      </div>
      <div class="mo">
        <div class="Robotics phone--image"></div>
        <h3>+45 81 98 81</h3>
      </div>
    </div>
    <div class="social">
      <a class="spriteLink" :href="socialLinkFacebook" target="_blank"></a>
      <a class="spriteLink link--linkedin" :href="socialLinkLinkedin" target="_blank"></a>
      <a class="spriteLink link--twitter" :href="socialLinkTwitter" target="_blank"></a>
      <a class="spriteLink link--instagram" :href="socialLinkInstagram" target="_blank"></a>
    </div>
    </div>
    <div class="copyright">
      <p>Copyright @ Nordbo robotics</p>
    </div>

  </footer>
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