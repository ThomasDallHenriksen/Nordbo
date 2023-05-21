<script>
import Footer from '@/components/Footer.vue'
import Banner from '@/components/Banner.vue'
import Checkbox from '../components/Checkbox.vue';


export default {
  name: 'KukaPrep',
  components: {
    Footer, 
    Banner,
    Checkbox
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
          <progress id="file" value="50.0" max="100"> 50.0% </progress>
      </div>
        <div class="wrapperKukaPrep">
            <h1 id="h1TitleKuka">KUKA Preperation</h1>
            <p id="kukaPrepP">Mimic for KUKA is currently in Beta release.</p>
            <br>

            <h1 id="h2TitleKuka">Mimic for KUKA - Robot Preparations</h1>
            <h4 id="h3TitleKuka">What you need prior to Mimic installation</h4>
            <p id="kukaPrepP"> - HD ready touch screen (22” is recommended) or HD ready screen with mouse and keyboard</p>
            <p id="kukaPrepP"> - Gigabite switch (optional)</p>
            <p id="kukaPrepP"> - Ethernet cable</p>
            <br>

            <p id="kukaPrepP">KUKA robots are controlled with the RobotSensorInterface (RSI) 4.0 option package (tested with 4.0.8). Ensure that the</p>
            <p id="kukaPrepP">RSI package is installed on KUKA robot before you install Mimic. This module can be acquired from Kuka together with</p>
            <p id="kukaPrepP">a manual on how to install it.</p>
            <br>

            <p id="kukaPrepP">You will need the KUKA controller version = KSS 8.5.</p>
            <br>
            <br>

            <h1 id="h2TitleKuka">Hardware Setup</h1>
            <p id="kukaPrepP">Complete the Tracker Hardware Setup before this step.</p>
            <br>

            <h4 id="h4TitleKuka">Wire the Mimic Controller to the Robot</h4>
            <div class="text-step">
                <h4 id="h4TitleKuka">Step 1.</h4>
                <p id="kukaPrepPSteps">Connect the ethernet cable to the Mimic Controller</p>
            </div>
            <p id="kukaPrepP">Note: (Optional) Use a Gigabit switch.</p>
            <br>
            <br>

            <div class="text-step step--two">
                <h4 id="h4TitleKuka">Step 2.</h4>
                <p id="kukaPrepPSteps">Connect the ethernet cable to the robot</p>
            </div>
            <br>

            <h1 id="h2TitleKuka">Mimic for KUKA - Get started</h1>
            <p id="kukaPrepP">How to Configure a KUKA Robot</p>
            <br>
            <div class="kukaContainer">
              <checkbox content="Change permission to administrator level

Start by changing the permission on the Kuka robot to administrator level.


This is achieved by:


- Starting up the robot

- Clicking on the “user” symbol in the left sidebar on the left side of the teach pendent

- Inside the user page, click on “Administrator” and enter the code “kuka” and click on “Login”" 
            customClass="KukaCheckbox1" 
            step="1">
          </checkbox>

          <checkbox content="Setup the IP address of the RSI
See the RSI manual to see how to change the IP of the RSI.

The IP address of the RSI and the Mimic Controller have to be on the same subnet, e.g. 192.168.1.XX.

The IP address of the RSI can be changed as described in the RSI manual.


- Press on the Robot icon in the top left corner of the teach pendant.

- Press on “Start-up” > “Network Configuration” > “Advanced” > “Add Interface” > Choose a name for the Interface >

Choose “Mixed IP address” and set the IP to 192.168.1.50 (default).

- The IP can be changed but needs to be on the same subnet as the Mimic Controller.

- Set the net mask to 255.255.255.0" 
            customClass="nachiHardwareCheckbox2" 
            step="2">
          </checkbox>
            </div>
        <br>

        <p id="kukaPrepP">If preffered, the IP address of the Mimic Controller can be changed in the (Linux) wifi icon in the top right corner.</p>
        <br>
        <p id="kukaPrepP">- Press “Edit Connections”, a pop up of “Network Connections” will show.</p>
        <p id="kukaPrepP">- Under “Ethernet”, double-click “Mimic”. A new pop up window called “Editing Mimic” will appear.</p>
        <p id="kukaPrepP">- You choose IPv4 Settings where you will be able to edit the IP address.</p>
        <p id="kukaPrepP">- Press Save.</p>
        <p id="kukaPrepP">- Once you have set and saved the IP address in IPv4 Settings, go to the (Linux) wifi icon in the top right corner again</p>
        <p id="kukaPrepP">where you will need to disconnect the wifi connection - and reconnect again. Your IP address on the Mimic</p>
        <p id="kukaPrepP">controller will be successfully changed.</p>
        <br>
        <p id="kukaPrepP">Note: if the IP of the Mimic Controller has been changed, it needs to be changed in the RSI_mimicConfig.xml file as</p>
        <p id="kukaPrepP">well. See next section.</p>
        <br>

        <h1 id="h2TitleKuka">Transfer Files to the Robot</h1>
        <p id="kukaPrepP">Transfer the supplied files to the robot. This can be achieved using WorkVisual or transfer them directly from USB. The </p>
        <p id="kukaPrepP">files can be found on the USB.</p>
        <br>
        <p id="kukaPrepP">RSI file should be transferred to “C:/KRC/ROBOTER/Config/User/Common/SensorInterface” and program files should</p>
        <p id="kukaPrepP">be transferred to “KRC/R1/Program”.</p>
        <br>
        <h4 id="h3TitleKuka">How to transfer program files with USB (Optional)</h4>
        <br>
        <div class="text-step">
                <h4 id="h4TitleKuka">Step 1.</h4>
                <p id="kukaPrepPSteps">Insert the USB into the robot controller</p>
        </div>

        <div class="text-step">
                <h4 id="h4TitleKuka">Step 2.</h4>
                <p id="kukaPrepPSteps">To see the USB, change the user to Administrator (see step 1)</p>
        </div>

        <div class="text-step">
                <h4 id="h4TitleKuka">Step 3.</h4>
                <p id="kukaPrepPSteps">Select the files from the USB</p>
        </div>

        <div class="text-step">
                <h4 id="h4TitleKuka">Step 4.</h4>
                <p id="kukaPrepPSteps">Click Edit > Copy</p>
        </div>

        <div class="text-step">
                <h4 id="h4TitleKuka">Step 5.</h4>
                <p id="kukaPrepPSteps">Select the destination folder</p>
        </div>

        <div class="text-step">
                <h4 id="h4TitleKuka">Step 6.</h4>
                <p id="kukaPrepPSteps">Click Edit > Paste</p>
        </div>
        <br>

        <p id="kukaPrepP">The files to transfer are:</p>
        <br>
        <br>
        <p id="kukaPrepP">- RSI_mimic.rsix</p>
        <p id="kukaPrepP">- RSI structure</p>
        <p id="kukaPrepP">- Location: RSI folder</p>
        <br>
        <p id="kukaPrepP">- RSI_mimicConfig.xml</p>
        <p id="kukaPrepP">- UDP communication config</p>
        <p id="kukaPrepP">- Location: RSI folder</p>
        <br>
        <p id="kukaPrepP">Note: if the IP of the Mimic Controller has been changed, it needs to be changed in this file as well.</p>
        <br>
        <p id="kukaPrepP">- Ncom.dat</p>
        <p id="kukaPrepP">- General mimic functions</p>
        <p id="kukaPrepP">- Location: Program folder</p>
        <br>
        <p id="kukaPrepP">- Ncom.src</p>
        <p id="kukaPrepP">-General mimic functions</p>
        <p id="kukaPrepP">-Location: Program folder</p>
        <br>
        <p id="kukaPrepP">- Mimic.dat</p>
        <p id="kukaPrepP">- Example of a mimic program</p>
        <p id="kukaPrepP">- Location: Program folder</p>
        <br>
        <p id="kukaPrepP">- Mimic.src</p>
        <p id="kukaPrepP">- Example of a mimic program</p>
        <p id="kukaPrepP">- Location: Program folder</p>
        <br>


        <div class="buttons">
        <div>
          <router-link 
            class="backButton" 
            to="/NachiReadyView"
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
            to="/KukaReadyView"
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
  .wrapperKukaPrep{
      padding-left: 55px; 
      padding-right: 55px;
    }

  .kukaContainer{
  display: flex;
  flex-direction: column;
  align-items: center;
  }

  .kuka{
    background-color: #02215C;
    display: flex;
    align-items: center;
    margin: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    width: 1037px;
    height: 17rem;
  }

  .checkbox--two {
    height: 20rem !important;
  }

  .checkbox__steps{
    width: 5%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .checkbox__description{
    width: 80%;
  }

  .checkbox__check{
    width: 15%;
    height: 30px;
    align-items: center;
  }

  .checkbox__check input[type="checkbox"]{
  margin: 0;
  }

  #checkbox__checkH1{
  color: #ffffff;
  margin-left: 10px;
  vertical-align: top;
  }

  #checkbox__checkP{
  color: #ffffff;
  font-family: Helvetica;
  }

  .text-step{
    display: flex;
  }

  .text-step h4{
    font-weight: bold;
  }

  .step-two h4{
    font-weight: bold;
  }

  #kukaPrepP{
    text-align: left;
    font-family: Helvetica;
    margin-top: 1%;
    font-size: 1.1vw;
    line-height: 1.1;
    padding-left: 6.5%;
  }

  #kukaPrepPSteps{
    text-align: left;
    font-family: Helvetica;
    margin-top: 1%;
    font-size: 1.1vw;
  }

  #h1TitleKuka{
    margin-top: 1%;
    font-size: 1.7vw;
    font-weight: bold;
    text-align: center;
  }

  #h2TitleKuka{
  margin-top: 1%;
  font-size: 1.7vw;
  font-weight: bold;
  text-align: left;
  padding-left: 6.5%;

  }

  #h3TitleKuka{
  margin-top: 1%;
  font-size: 1.1vw;
  font-weight: bold;
  text-align: left;
  padding-left: 6.5%;
  }

  #h4TitleKuka{
  margin-top: 1%;
  font-size: 1.0vw;
  font-weight: bold;
  text-align: left;
  padding-left: 6.5%;
  }

  #checkbox__h4{
  color: #ffffff;
  }
</style>