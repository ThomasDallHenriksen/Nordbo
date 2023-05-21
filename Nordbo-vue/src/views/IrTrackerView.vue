<script>
import Footer from '@/components/Footer.vue'
import Banner from '@/components/Banner.vue'


export default {
  name: 'IrTracker',
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
          <progress id="file" value="37.5" max="100"> 37.5% </progress>
      </div>
    <body class="wrapper">
        <div>
            <div>
                <div><h1 id="h1Title">IR Tracker Setup</h1></div>
                    <form action=""></form>
                    <p id="TrackerP">Follow these guidelines to setup the IR tracker</p>
                    <br>
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
                        class="ir--button" 
                        to="/HowToIrTrackerView"
                        custom
                        v-slot="{ navigate }"
                        >
                        <button
                        @click="navigate"
                        role="link"
                        id="ir--button"
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

    <Footer></Footer>
    <RouterView />
</template>

<style>
.irDiv{
    display: flex;
    justify-content: center;
}

.left{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3%;
}

#TrackerP{
    text-align: left;
    font-family: Helvetica;
    margin-top: 1%;
    font-size: 1.1vw;
    line-height: 1.1;
    padding-left: 9.5%;
}

#buttonText{
    text-align: left;
    font-family: Helvetica;
    font-size: 1.1vw;
    padding-left: 9.5%;

}

#trackerImgText{
    font-family: Helvetica;
    margin-top: 1%;
    font-size: 1.1vw;
    line-height: 1.1;
}

.step--2{
    width: 1037px !important;
    height: 358px !important;
}

#ir--button{
    margin-left: 9.5%;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    font-size: 21px;
    border: solid 2px #1ec794;
    background: #ffffff;
    color: #1ec794;
    padding-left: 15px;
    padding-right: 15px;
    margin-right: 40px;
}
</style>