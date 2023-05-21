<script>
import Footer from '@/components/Footer.vue'
import Banner from '@/components/Banner.vue'
import Checkbox from '../components/Checkbox.vue';


export default {
  name: 'NachiConfig',
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
          <progress id="file" value="75" max="100"> 75% </progress>
      </div>
        <div class="wrapper">
            <h1>Nachi Preperation</h1>
            <h2 class="checkP">How to Configure a Nachi Robot</h2>
        <div class="NachiContent">
            <checkbox content="Login and Change the Permission on the Robot
                              Change the permission on the Nachi robot to the specialist level.
                              - Press “R” on the teachpad,
                              - Enter the code “314”,
                              - Press “Enter”,
                              - Enter the code “12345” and
                              - Press “Enter”" 
            customClass="nachiConfigCheckbox1" 
            step="1">
          </checkbox>

          <checkbox content="Setup the Extend Ethernet <p>
                            Change permission on the robot to be “specialist”. <p>
                            Navigate to “Constant Settings” > “8 Communications” > “7 Extend Ethernet”. <p> 
                            Set extend ethernet to “Enabled”, the IP address to 192.168.1.51 (default) and the Subnet mask to <p>
                            255.255.255.0. <p>
                            Note: The IP address can be different from the default but need to be on the same subnet as the Mimic <p>
                            Controller. <p>
                            Press “Complete” to save the change. <p>
                            Restart the robot. <p>" 
            customClass="nachiConfigCheckbox2" 
            step="2">
          </checkbox>

          <checkbox content="Enable Memory Protection <p>
                            - Change permission on the robot to be “specialist”. <p>
                            - Navigate to “Constant Settings” > “1 Control Constants” > “11 Memory Protection”. <p>
                            - Hold down the physical Enable button on the TeachPad and switch the memory protection to “Enabled”. <p>
                            - Press on “Complete” to save the changes. <p>
                            - Restart the robot. <p>" 
            customClass="nachiConfigCheckbox3" 
            step="3">
          </checkbox>

          <checkbox content="Setup the External Tracking <p>
                            - Change permission on the robot to be “specialist”. <p>
                            - Navigate to “Constant Settings” > “45 External Tracking”. <p>
                            - Set the IP address to 192.168.1.20. <p>
                            - Set the Port to 2568, <p>
                            - User(Digital) inputs: This is set to the start index of which inputs Mimic can read. Mimic reads 64 inputs so if <p>
                            - the index is set to 21 it will read the inputs 21 - 84. Setting this index to 0 will prevent Mimic from reading any <p>
                            - inputs. <p>
                            - User(Digital) outputs: This is set to the start index of which outputs Mimic can set. Mimic sets 64 outputs so if <p>
                            - the index is set to 21 it will set the outputs 21 - 84. Setting this index to 0 will prevent Mimic from setting any <p>
                            - outputs. <p>
                            - Set Timeout to 300 ms. <p>
                            - Set Parallel movement 0.0mm, 0.0mm. <p>
                            - Set Rotational movement 0.00deg, 0.00deg. <p>
                            - Set Joint angle to 0.00deg. <p>
                            - Press complete to save <p>
                            - Re- start the robot. <p>"
            customClass="nachiConfigCheckbox4" 
            step="4">
          </checkbox>

          <checkbox content="Setup the Main Ethernet Connection <p>
                            - Change permission on the robot to be “specialist”. <p>
                            - Navigate to “Constant Settings” > “8 Communications” > “2 Ethernet” > ”1 TCP/IP” <p>
                            - Hold down the physical Enable button on the Teachpad and change the DHCP to “Disabled” <p>
                            - IP to 192.168.1.50. <p>
                            - The IP address can be different from 192.168.1.50, but it needs to be the same as the subnet on the Mimic <p>
                            Controller and the IP for the Extend Ethernet. <p>
                            - Subnet mask to 255.255.255.0. <p>
                            - Press complete to save. <p>
                            - Restart the robot. <p>" 
            customClass="nachiConfigCheckbox5" 
            step="5">
          </checkbox>

          <checkbox content="Transfer Mimic Program to the Robot
                            Transfer the robot programs to the robot in the “Program” folder. 
                            This can be achieved using ftp. The files can be found on the USB. 

                            FTP (Optional) <p>
                            - Change permission on the robot to be “specialist”. <p>
                            - Enable FTP. Navigate to “Constant Settings” > “8 Communications” > “2 Ethernet” > ”3 FTP” Change FTP <p>
                            Service to “Enabled”. <p>
                            - Connect a PC to the robot via ethernet cable. <p>
                            - Open a file browser <p>
                            - Go to ftp://192.168.5.21 or the robot IP (default 192.168.1.50) <p>
                            - You should now be able to add files to the robot by using the file browser. <p>
                            - Restart the robot. <p>

                            See the files to transfer here" 
            customClass="nachiConfigCheckbox6" 
            step="6">
          </checkbox>

          <checkbox content="Compile the robot programs <p>
                            - Change permission on the robot to be “specialist”. <p>
                            - Select the robot programs to compile. <p>
                            USERTASK-A.000 <p>
                            USERTASK-A.001 <p>
                            MZ07-A.001 <p>
                            MZ07-A.070 <p>
                            MZ07-A.071 <p>
                            MZ07-A.072 <p>
                            - Restart your robot. <p>" 
            customClass="nachiConfigCheckbox7" 
            step="7">
          </checkbox>
        </div>

        <div class="buttons">
        <div>
          <router-link 
            class="backButton" 
            to="/NachiHardwareView"
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
            to="/NachiReadyView"
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
.NachiContent{
display: flex;
align-items: center;    
flex-direction: column;
}

.cumtomnachiConfigCheckbox1{
    height: 220px;
}

</style>