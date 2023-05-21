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

          <checkbox content="Setup the Extend Ethernet
Change permission on the robot to be “specialist”.

Navigate to “Constant Settings” > “8 Communications” > “7 Extend Ethernet”.

Set extend ethernet to “Enabled”, the IP address to 192.168.1.51 (default) and the Subnet mask to

255.255.255.0.

Note: The IP address can be different from the default but need to be on the same subnet as the Mimic

Controller.

Press “Complete” to save the change.

Restart the robot." 
            customClass="nachiHardwareCheckbox2" 
            step="2">
          </checkbox>

          <checkbox content="Enable Memory Protection
- Change permission on the robot to be “specialist”.

- Navigate to “Constant Settings” > “1 Control Constants” > “11 Memory Protection”.

- Hold down the physical Enable button on the TeachPad and switch the memory protection to “Enabled”.

- Press on “Complete” to save the changes.

- Restart the robot." 
            customClass="nachiHardwareCheckbox3" 
            step="3">
          </checkbox>

          <checkbox content="Setup the External Tracking
- Change permission on the robot to be “specialist”.

- Navigate to “Constant Settings” > “45 External Tracking”.

- Set the IP address to 192.168.1.20.

- Set the Port to 2568,

- User(Digital) inputs: This is set to the start index of which inputs Mimic can read. Mimic reads 64 inputs so if

- the index is set to 21 it will read the inputs 21 - 84. Setting this index to 0 will prevent Mimic from reading any

- inputs.

- User(Digital) outputs: This is set to the start index of which outputs Mimic can set. Mimic sets 64 outputs so if

- the index is set to 21 it will set the outputs 21 - 84. Setting this index to 0 will prevent Mimic from setting any

- outputs.

- Set Timeout to 300 ms.

- Set Parallel movement 0.0mm, 0.0mm.

- Set Rotational movement 0.00deg, 0.00deg.

- Set Joint angle to 0.00deg.

- Press complete to save

- Re- start the robot." 
            customClass="nachiHardwareCheckbox4" 
            step="4">
          </checkbox>

          <checkbox content="Setup the Main Ethernet Connection
- Change permission on the robot to be “specialist”.

- Navigate to “Constant Settings” > “8 Communications” > “2 Ethernet” > ”1 TCP/IP”

- Hold down the physical Enable button on the Teachpad and change the DHCP to “Disabled”

- IP to 192.168.1.50.

- The IP address can be different from 192.168.1.50, but it needs to be the same as the subnet on the Mimic

Controller and the IP for the Extend Ethernet.

- Subnet mask to 255.255.255.0.

- Press complete to save.

- Restart the robot." 
            customClass="nachiHardwareCheckbox5" 
            step="5">
          </checkbox>

          <checkbox content="Transfer Mimic Program to the Robot
Transfer the robot programs to the robot in the “Program” folder.

This can be achieved using ftp. The files can be found on the USB.


FTP (Optional)

- Change permission on the robot to be “specialist”.

- Enable FTP. Navigate to “Constant Settings” > “8 Communications” > “2 Ethernet” > ”3 FTP” Change FTP

Service to “Enabled”.

- Connect a PC to the robot via ethernet cable.

- Open a file browser

- Go to ftp://192.168.5.21 or the robot IP (default 192.168.1.50)

- You should now be able to add files to the robot by using the file browser.

- Restart the robot.


See the files to transfer here" 
            customClass="nachiHardwareCheckbox6" 
            step="6">
          </checkbox>

          <checkbox content="Compile the robot programs
- Change permission on the robot to be “specialist”.

- Select the robot programs to compile.

USERTASK-A.000

USERTASK-A.001

MZ07-A.001

MZ07-A.070

MZ07-A.071

MZ07-A.072

- Restart your robot." 
            customClass="nachiHardwareCheckbox7" 
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

.nachi{
    background-color: #02215C;
    display: flex;
    align-items: center;
    margin: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    width: 1037px; 
    height: 220px; 
}

.checkbox--two {
    width: 1037px !important;
    height: 220px !important;
    
}

.checkbox--three{
    height: 218px;
}

.checkbox--four{
    height: 558px;
}

.checkbox--five{
    height: 338px;
}

.checkbox--six{
    height: 448px;
}

.checkbox--seven{
    height: 268px;
}

.checkbox__steps{
    width: 5%;
}

.checkbox__description{
    width: 80%;
}

.checkbox__check{
    width: 15%;
    height: 30px;
}
#checkbox__checkH1{
  color: #ffffff;
  margin-left: 10px;
}
#checkbox__checkP{
  color: #ffffff;
}

.NachiContent{
display: flex;
align-items: center;    
flex-direction: column;
}

.cumtomnachiConfigCheckbox1{
    height: 220px;
}

</style>