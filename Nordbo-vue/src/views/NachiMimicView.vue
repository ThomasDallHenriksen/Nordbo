<script>
</script>

<template>
  <header>
      <div id="pBar">
        <progress id="file" value="25" max="100"> 25% </progress>
    </div>
  </header>
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

    <footer>
    <div class="Info">
    <div class="HumanSkill">
      <h4>Human skills,</h4>
      <p>machine precision</p>
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