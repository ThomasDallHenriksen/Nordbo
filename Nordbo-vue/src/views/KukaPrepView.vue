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
        <div class="wrapperKuka">
            <h1 id="Title">KUKA Preperation</h1>
            <p id="kukaPrepText">Mimic for KUKA is currently in Beta release.</p>
            <br>

            <h1 id="underKukaTitle">Mimic for KUKA - Robot Preparations</h1>
            <h4 id="kukaPrepDescription">What you need prior to Mimic installation</h4>
            <p id="kukaPrepText"> - HD ready touch screen (22” is recommended) or HD ready screen with mouse and keyboard</p>
            <p id="kukaPrepText"> - Gigabite switch (optional)</p>
            <p id="kukaPrepText"> - Ethernet cable</p>
            <br>

            <p id="kukaPrepText">KUKA robots are controlled with the RobotSensorInterface (RSI) 4.0 option package (tested with 4.0.8). Ensure that the</p>
            <p id="kukaPrepText">RSI package is installed on KUKA robot before you install Mimic. This module can be acquired from Kuka together with</p>
            <p id="kukaPrepText">a manual on how to install it.</p>
            <br>

            <p id="kukaPrepText">You will need the KUKA controller version = KSS 8.5.</p>
            <br>
            <br>

            <h1 id="underKukaTitle">Hardware Setup</h1>
            <p id="kukaPrepText">Complete the Tracker Hardware Setup before this step.</p>
            <br>

            <h4 id="kukaPrepTask">Wire the Mimic Controller to the Robot</h4>
            <div class="text-step">
                <h4 id="kukaPrepTask">Step 1.</h4>
                <p id="kukaPrepSteps">Connect the ethernet cable to the Mimic Controller</p>
            </div>
            <p id="kukaPrepText">Note: (Optional) Use a Gigabit switch.</p>
            <br>
            <br>

            <div class="text-step step--two">
                <h4 id="kukaPrepTask">Step 2.</h4>
                <p id="kukaPrepSteps">Connect the ethernet cable to the robot</p>
            </div>
            <br>

            <h1 id="underKukaTitle">Mimic for KUKA - Get started</h1>
            <p id="kukaPrepText">How to Configure a KUKA Robot</p>
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
                            The IP address of the RSI can be changed as described in the RSI manual. <p>

                            - Press on the Robot icon in the top left corner of the teach pendant. 
                            - Press on “Start-up” > “Network Configuration” > “Advanced” > “Add Interface” > Choose a name for the Interface > 
                            Choose “Mixed IP address” and set the IP to 192.168.1.50 (default). 
                            - The IP can be changed but needs to be on the same subnet as the Mimic Controller. 
                            - Set the net mask to 255.255.255.0" 
            customClass="KukaCheckbox2" 
            step="2">
          </checkbox>
            </div>
        <br>
        <br>

        <p id="kukaPrepText">If preffered, the IP address of the Mimic Controller can be changed in the (Linux) wifi icon in the top right corner.</p>
        <br>
        <br>
        <p id="kukaPrepText">- Press “Edit Connections”, a pop up of “Network Connections” will show.</p>
        <p id="kukaPrepText">- Under “Ethernet”, double-click “Mimic”. A new pop up window called “Editing Mimic” will appear.</p>
        <p id="kukaPrepText">- You choose IPv4 Settings where you will be able to edit the IP address.</p>
        <p id="kukaPrepText">- Press Save.</p>
        <p id="kukaPrepText">- Once you have set and saved the IP address in IPv4 Settings, go to the (Linux) wifi icon in the top right corner again</p>
        <p id="kukaPrepText">where you will need to disconnect the wifi connection - and reconnect again. Your IP address on the Mimic</p>
        <p id="kukaPrepText">controller will be successfully changed.</p>
        <br>
        <br>
        <p id="kukaPrepText">Note: if the IP of the Mimic Controller has been changed, it needs to be changed in the RSI_mimicConfig.xml file as</p>
        <p id="kukaPrepText">well. See next section.</p>
        <br>
        <br>

        <h1 id="underKukaTitle">Transfer Files to the Robot</h1>
        <p id="kukaPrepText">Transfer the supplied files to the robot. This can be achieved using WorkVisual or transfer them directly from USB. The </p>
        <p id="kukaPrepText">files can be found on the USB.</p>
        <br>
        <p id="kukaPrepText">RSI file should be transferred to “C:/KRC/ROBOTER/Config/User/Common/SensorInterface” and program files should</p>
        <p id="kukaPrepText">be transferred to “KRC/R1/Program”.</p>
        <br>
        <h4 id="kukaPrepTask">How to transfer program files with USB (Optional)</h4>
        <br>
        <br>
        <div class="text-step">
                <h4 id="kukaPrepTask">Step 1.</h4>
                <p id="kukaPrepSteps">Insert the USB into the robot controller</p>
        </div>

        <div class="text-step">
                <h4 id="kukaPrepTask">Step 2.</h4>
                <p id="kukaPrepSteps">To see the USB, change the user to Administrator (see step 1)</p>
        </div>

        <div class="text-step">
                <h4 id="kukaPrepTask">Step 3.</h4>
                <p id="kukaPrepSteps">Select the files from the USB</p>
        </div>

        <div class="text-step">
                <h4 id="kukaPrepTask">Step 4.</h4>
                <p id="kukaPrepSteps">Click Edit > Copy</p>
        </div>

        <div class="text-step">
                <h4 id="kukaPrepTask">Step 5.</h4>
                <p id="kukaPrepSteps">Select the destination folder</p>
        </div>

        <div class="text-step">
                <h4 id="kukaPrepTask">Step 6.</h4>
                <p id="kukaPrepSteps">Click Edit > Paste</p>
        </div>
        <br>

        <p id="kukaPrepText">The files to transfer are:</p>
        <br>
        <br>
        <p id="kukaPrepText">- RSI_mimic.rsix</p>
        <p id="kukaPrepText">- RSI structure</p>
        <p id="kukaPrepText">- Location: RSI folder</p>
        <br>
        <p id="kukaPrepText">- RSI_mimicConfig.xml</p>
        <p id="kukaPrepText">- UDP communication config</p>
        <p id="kukaPrepText">- Location: RSI folder</p>
        <br>
        <p id="kukaPrepText">Note: if the IP of the Mimic Controller has been changed, it needs to be changed in this file as well.</p>
        <br>
        <p id="kukaPrepText">- Ncom.dat</p>
        <p id="kukaPrepText">- General mimic functions</p>
        <p id="kukaPrepText">- Location: Program folder</p>
        <br>
        <p id="kukaPrepText">- Ncom.src</p>
        <p id="kukaPrepText">-General mimic functions</p>
        <p id="kukaPrepText">-Location: Program folder</p>
        <br>
        <p id="kukaPrepText">- Mimic.dat</p>
        <p id="kukaPrepText">- Example of a mimic program</p>
        <p id="kukaPrepText">- Location: Program folder</p>
        <br>
        <p id="kukaPrepText">- Mimic.src</p>
        <p id="kukaPrepText">- Example of a mimic program</p>
        <p id="kukaPrepText">- Location: Program folder</p>
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
  .wrapperKuka{
    padding-left: 55px; 
    padding-right: 55px;
  }

  #underKukaTitle{
  margin-top: 1%;
  font-size: 1.87rem;
  font-weight: bold;
  text-align: left;
  padding-left: 6.5%;
  }

  #kukaPrepDescription{
  margin-top: 1%;
  font-size: 1.87rem;
  font-weight: bold;
  text-align: left;
  padding-left: 6.5%;
  }

  #kukaPrepTask{
  margin-top: 1%;
  font-size: 1.87rem;
  font-weight: bold;
  text-align: left;
  padding-left: 6.5%;
  }

  #kukaPrepText{
    text-align: left;
    font-family: Helvetica;
    margin-top: 1%;
    font-size: 1.87rem;
    line-height: 1.1;
    padding-left: 6.5%;
  }

  .kukaContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
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

  #kukaPrepSteps{
    text-align: left;
    font-family: Helvetica;
    margin-top: 1%;
    font-size: 1.87rem;
  }
</style>