<script>
</script>
<template>
    <header>
        <div id="pBar">
          <progress id="file" value="37.5" max="100"> 37.5% </progress>
      </div>
    </header>
    <body class="wrapper">
        <div class="container">
              <img class="banner" src="../assets/images/Nordbo-banner.png" alt="" width="1216" height="200" aria-placeholder="Welcome to the Mimic Guide">
              <div class="banner-text">
                <h1 id="banner-h1">Mimic Guide</h1>
              </div>
            </div>
        <div>
            <div>
                <div><h1 id="h1Title">IR Tracker Setup</h1></div>
                    <form action=""></form>
                    <p id="TrackerP">Follow these guidelines to setup the IR tracker</p>
                    <p id="TrackerP">Please see Mimic controller setup for setting up the IR tracker.</p>
            </div>
            
            <div class="irDiv">
                <div class="left">
                    
                    <div class="checkbox">
                        <div class="steps">
                            <h1 id="checkH1">1</h1>
                        </div>
                        <div class="description">
                            <p id="checkP">Connect the dongle to the Mimic controller with the dongle cradle.</p>
                        </div>
                        <input class="check" type="checkbox">
                    </div>
                    <div class="checkbox step--2">
                    <div class="steps">
                        <h1 id="checkH1">2</h1>
                    </div>
                    <div class="description">
                        <p id="checkP">Place Lighthouse as desired (see recommendations for setup in the Unboxing course) and connect the power supply afterwards.</p>
                        <p id="checkP">Note: Do not move the Lighthouse when it is powered on. While powered on, small components are rotating inside the Lighthouse. If moved while rotating, these components might not perform as intended and can be damaged.</p>
                    </div>
                    <input class="check" type="checkbox">
                    </div>
                    <div class="checkbox">
                    <div class="steps">
                        <h1 id="checkH1">3</h1>
                    </div>
                    <div class="description">
                        <p id="checkP">Turn on the tracker by holding the power button until the light is green</p>
                    </div>
                    <input class="check" type="checkbox">
                    </div>
                </div>
            

                <div class="right">
                    <img src="/src/assets/images/IrTracker.png" alt="">
                    <p id="trackerImgText">IR Tracker setup recommandations</p>
                </div>
            </div>
            
            
            <div>
                <p id="buttonText">How to get the most out of your IR tracker</p>
                <div>
                    <router-link 
                        class="backButton" 
                        to="/HowToIrTrackerView"
                        custom
                        v-slot="{ navigate }"
                        >
                        <button
                        @click="navigate"
                        role="link"
                        id="backButton"
                        >
                        IR tracker
                        </button>
                    </router-link>
                </div>
                <div class="buttons">
                    <div>
                    <router-link 
                        class="backButton" 
                        to="/ControllerView"
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
                        to="/UrPreperationView"
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
        </div>
    </body>

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
.irDiv{
    display: flex;
}

.left{
    display: flex;
    flex-direction: column;
    align-items: center;
}

#TrackerP{
    text-align: left;
    font-family: Helvetica;
    margin-top: 1%;
    font-size: 1.1vw;
    line-height: 1.1;
}

#buttonText{
    text-align: left;
    font-family: Helvetica;
    font-size: 1.1vw;

}

#trackerImgText{
    font-family: Helvetica;
    margin-top: 1%;
    font-size: 1.1vw;
    line-height: 1.1;
}

.step--2{
    width: 1037px;
    height: 358px;
}
</style>