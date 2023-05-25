<script>
import Footer from '@/components/Footer.vue'
import Banner from '@/components/Banner.vue'


export default {
  name: 'UrMain',
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
      <Banner></Banner>
      <div id="pBar">
          <progress id="file" value="87.5" max="100"> 87.5% </progress>
      </div>
        <div class="wrapper">
          <div id="UrMainContent">
            <h1 id="Title">UR Preperation</h1>
            <h2 id="underTitle">How to Create the Main UR Program</h2>
            <br>
            <p id="urMainText">There are 2 scenarios for using Mimic on a UR robot:</p>
            <br>
            <h4 id="urMainStep">1. Control the robot from Mimic (most common use)</h4>
            <p id="urMainText">Controlling the robot from Mimic means Mimic is given control of the robot. Hence, Mimic functionality is accessed</p>
            <p id="urMainText">through the Mimic interface.</p>
            <p id="urMainText">E.g. to use Mimics Track, the user can navigate to the Track page, directly in the Mimic interface.</p>
            
            <br>
            <h4 id="urMainStep">2. Control Mimic from the robot (advanced use for production)</h4>
            <p id="urMainText">Controlling Mimic from the robot means the robot remains in control and can call Mimic functionality. Hence, Mimic</p>
            <p id="urMainText">functionality is accessed through the robot.</p>
            <p id="urMainText">E.g. to use Mimics Track, the robot will call the Track functionality in Mimic and change the Mimic interface to the</p>
            <p id="urMainText">Track page.</p>

            <br>

            <p id="urMainText">How to create UR programs for each of these scenarios is described in this section.</p>

            <br>

            <h4 id="urMainStep">Control the robot from Mimic</h4>
            <p id="urMainText">Include the two scripts in the program as shown on the picture below.</p>
            <br>

            <p id="urMainText">The scripts are provided on the USB in the box.</p>
            <div class="usb">
              <img class="usbImg" src="../assets/images/usbscript.png" width="34 rem" height="auto" alt="script">
            </div>
            <br>

            <h4 id="urMainStep">Control Mimic from the robot</h4>
            <p id="urMainText">Use the Script: mimic_int.script in BeforeStart.</p>
            <br>

            <h4 id="urMainStep">2 scripts are avalaible to use Mimic functionality:</h4>
            <p id="urMainText">-track_mimic_program( )</p>
            <p id="urMainText">Calls Track functionality in Mimic.</p>
            <p id="urMainText"> - run_mimic_program( )</p>
            <p id="urMainText">Calls Run functionality in Mimic.</p>
            <br>

            <p id="urMainText">The number specified in ( ) is the ID of the program. Only predefined programs in Mimic can be called. See example</p>
            <p id="urMainText">below.</p>
            <p id="urMainText">The scripts can be used multiple times in the program. See example below.</p>
            <br>

            <div class="example">
                <div class="track">
                    <img src="../assets/images/urprogram.png" alt="script">
                    <p id="urMainText">Example: A UR program that calls a Track program with I</p>
                    <p id="urMainText">D 12 and Run program with ID 12</p>
                </div>
                <div class="run">
                    <img src="../assets/images/urrun.png" alt="script">
                    <p id="urMainText">Example: A UR program that calls a Run program with </p>
                    <p id="urMainText">ID 23 and another Run program with ID 27.</p>
                </div>
            </div>
          </div>
            <br>

        <div class="buttons">
          <router-link 
            class="backButton" 
            to="/UrcapView"
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
            to="/UrReadyView"
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
.usb{
  display: flex;
  justify-content: center;
}

.usbImg{
  width: 34.208vw;
}

.example{
  display: flex;
  justify-content: center;
}

.example img{
  width: 30.208vw;
}

#urMainText{
  text-align: left;
  font-family: Helvetica;
  margin-top: 1%;
  font-size: 1.3vw;
  line-height: 1.1;
}

#urMainStep{
  text-align: left;
  font-family: Helvetica;
  margin-top: 1%;
  font-size: 1.3vw;
  line-height: 1.2;
  font-family: 800;

}

#UrMainContent{
  display: flex;
  flex-direction: column;
  margin-top: 3%;
  text-align: left;
  padding-left: 3%;
}

#urMainH2{
  margin-top: 1%;
}
</style>