<script>
</script>

<template>
  <header>
        <div id="pBar">
            <progress id="file" value="50" max="100"> 50% </progress>
        </div>
    </header>
    <body class="wrapper">
        <div class="titel1">
            <h1 id="h1Title">Nachi Preperation</h1>
        </div>
        <div class="titel1">
            <h2 id="h2Title">Hardware Setup</h2>
        </div>
        <br>
        <p id="nachiHardwareP">After the Tracker Hardware Setup, connect a Gigabit switch to theMimic Controller connect 
            2 ethernet cables to the<br>switch and the robot.</p>
        <br>
        <h2 id="h3Title">Wire the Mimic Controller to the Robot</h2>
        <div class="nachiHardwareContent">
            <div class="checkbox step--1">
                <div class="steps">
                    <h1 id="checkH1">1</h1>
                </div>
                <div class="description">
                    <p id="checkP">Install the external tracking network card</p>
                </div>
                <input class="check" type="checkbox">
            </div>

            <div class="checkbox step--2">
                <div class="steps">
                    <h1 id="checkH1">2</h1>
                </div>
                <div class="description">
                    <p id="checkP">Connect the switch to the Mimic Controller</p>
                </div>
                <input class="check" type="checkbox">
            </div>

            <div class="checkbox step--3">
                <div class="steps">
                    <h1 id="checkH1">3</h1>
                </div>
                <div class="description">
                    <p id="checkP">Connect the 2 ethernet cables to the switch and rebot </p>
                    <p id="checkP">- One from the external tracking network card to the switch</p> 
                    <p id="checkP">- One from the main network card to the switch</p>
                </div>
                <input class="check" type="checkbox">
            </div>

            <div class="checkbox step--4">
                <div class="steps">
                    <h1 id="checkH1">4</h1>
                </div>
                <div class="description">
                    <p id="checkP">Restart the rebot </p>
                </div>
                <input class="check" type="checkbox">
            </div>
        </div>
        
    
        <div class="buttons">
        <div>
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
        </div>
        <div>
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