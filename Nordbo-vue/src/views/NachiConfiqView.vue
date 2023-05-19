<script>
import Footer from '@/components/Footer.vue'
import Banner from '@/components/Banner.vue'


export default {
  name: 'NachiConfig',
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
          <progress id="file" value="75" max="100"> 75% </progress>
      </div>
        <div class="wrapper">
            <h1>Nachi Preperation</h1>
            <p class="checkP">How to Configure a Nachi Robot</p>

        <div class="nachi checkbox--one">
            <div class="checkbox__steps">
                <h1 id="checkbox__checkH1">1</h1>
            </div>
            <div class="checkbox__description">
                <h4 id="checkbox__h4">Login and Change the Permission on the Robot</h4>
                <p id="checkbox__checkP">Change the permission on the Nachi robot to the specialist level.</p>
                <p id="checkbox__checkP">- Press “R” on the teachpad,</p>
                <p id="checkbox__checkP">- Enter the code “314”,</p>
                <p id="checkbox__checkP">- Press “Enter”,</p>
                <p id="checkbox__checkP">- Enter the code “12345” and</p>
                <p id="checkbox__checkP">- Press “Enter”</p>
            </div>
            <input class="checkbox__check" type="checkbox">
        </div>

        <div class="nachi checkbox--two">
            <div class="checkbox__steps">
                <h1 id="checkbox__checkH1">2</h1>
            </div>
            <div class="checkbox__description">
                <h4 id="checkbox__h4">Setup the Extend Ethernet</h4>
                <p id="checkbox__checkP">Change permission on the robot to be “specialist”.</p>
                <p id="checkbox__checkP">Navigate to “Constant Settings” > “8 Communications” > “7 Extend Ethernet”.</p>
                <p id="checkbox__checkP">Set extend ethernet to “Enabled”, the IP address to 192.168.1.51 (default) and the Subnet mask to</p>
                <p id="checkbox__checkP">255.255.255.0.</p>
                <p id="checkbox__checkP">Note: The IP address can be different from the default but need to be on the same subnet as the Mimic</p>
                <p id="checkbox__checkP">Controller.</p>
                <p id="checkbox__checkP">Press “Complete” to save the change.</p>
                <p id="checkbox__checkP">Restart the robot.</p>
            </div>
            <input class="checkbox__check" type="checkbox">
        </div>

        <div class="nachi checkbox--three">
            <div class="checkbox__steps">
                <h1 id="checkbox__checkH1">3</h1>
            </div>
            <div class="checkbox__description">
                <h4 id="checkbox__h4">Enable Memory Protection</h4>
                <p id="checkbox__checkP">- Change permission on the robot to be “specialist”.</p>
                <p id="checkbox__checkP">- Navigate to “Constant Settings” > “1 Control Constants” > “11     Memory Protection”.</p>
                <p id="checkbox__checkP">- Hold down the physical Enable button on the TeachPad and switch the memory protection to “Enabled”.</p>
                <p id="checkbox__checkP">- Press on “Complete” to save the changes.</p>
                <p id="checkbox__checkP">- Restart the robot.</p>
            </div>
            <input class="checkbox__check" type="checkbox">
        </div>

        <div class="nachi checkbox--four">
            <div class="checkbox__steps">
                <h1 id="checkbox__checkH1">4</h1>
            </div>
            <div class="checkbox__description">
                <h4 id="checkbox__h4">Setup the External Tracking</h4>
                <p id="checkbox__checkP">- Change permission on the robot to be “specialist”.</p>
                <p id="checkbox__checkP">- Navigate to “Constant Settings” > “45 External Tracking”.</p>
                <p id="checkbox__checkP">- Set the IP address to 192.168.1.20. </p>
                <p id="checkbox__checkP">- Set the Port to 2568,</p>
                <p id="checkbox__checkP">- User(Digital) inputs: This is set to the start index of which inputs     Mimic can read. Mimic reads 64 inputs so if</p>
                <p id="checkbox__checkP">- the index is set to 21 it will read the inputs 21 - 84. Setting this index to 0 will prevent Mimic from reading any</p>
                <p id="checkbox__checkP">- inputs.</p>
                <p id="checkbox__checkP">- User(Digital) outputs: This is set to the start index of which outputs Mimic can set. Mimic sets 64 outputs so if</p>
                <p id="checkbox__checkP">- the index is set to 21 it will set the outputs 21 - 84. Setting this index to 0 will prevent Mimic from setting any</p>
                <p id="checkbox__checkP">- outputs.</p>
                <p id="checkbox__checkP">- Set Timeout to 300 ms.</p>
                <p id="checkbox__checkP">- Set Parallel movement 0.0mm, 0.0mm. </p>
                <p id="checkbox__checkP">- Set Rotational movement 0.00deg, 0.00deg.</p>
                <p id="checkbox__checkP">- Set Joint angle to 0.00deg.</p>
                <p id="checkbox__checkP">- Press complete to save</p>
                <p id="checkbox__checkP">- Re- start the robot.</p>
            </div>
            <input class="checkbox__check" type="checkbox">
        </div>

        <div class="nachi checkbox--five">
            <div class="checkbox__steps">
                <h1 id="checkbox__checkH1">5</h1>
            </div>
            <div class="checkbox__description">
                <h4 id="checkbox__h4">Setup the Main Ethernet Connection</h4>
                <p id="checkbox__checkP">- Change permission on the robot to be “specialist”.</p>
                <p id="checkbox__checkP">- Navigate to “Constant Settings” > “8 Communications” > “2 Ethernet” > ”1 TCP/IP”</p>
                <p id="checkbox__checkP">- Hold down the physical Enable button on the Teachpad and change the DHCP to “Disabled”</p>
                <p id="checkbox__checkP">- IP to 192.168.1.50.</p>
                <p id="checkbox__checkP">- The IP address can be different from 192.168.1.50, but it needs to be the same as the subnet on the Mimic</p>
                <p id="checkbox__checkP">Controller and the IP for the Extend Ethernet.</p>
                <p id="checkbox__checkP">- Subnet mask to 255.255.255.0.</p>
                <p id="checkbox__checkP">- Press complete to save.</p>
                <p id="checkbox__checkP">- Restart the robot.</p>
            </div>
            <input class="checkbox__check" type="checkbox">
        </div>

        <div class="nachi checkbox--six">
            <div class="checkbox__steps">
                <h1 id="checkbox__checkH1">6</h1>
            </div>
            <div class="checkbox__description">
                <h4 id="checkbox__h4">Transfer Mimic Program to the Robot</h4>
                <p id="checkbox__checkP">Transfer the robot programs to the robot in the “Program” folder.</p>
                <p id="checkbox__checkP">This can be achieved using ftp. The files can be found on the USB. </p>
                <br>
                <p id="checkbox__checkP">FTP (Optional)</p>
                <p id="checkbox__checkP">- Change permission on the robot to be “specialist”.</p>
                <p id="checkbox__checkP">- Enable FTP. Navigate to “Constant Settings” > “8 Communications” > “2 Ethernet” > ”3 FTP” Change FTP</p>
                <p id="checkbox__checkP">Service to “Enabled”.</p>
                <p id="checkbox__checkP">- Connect a PC to the robot via ethernet cable.</p>
                <p id="checkbox__checkP">- Open a file browser</p>
                <p id="checkbox__checkP">- Go to ftp://192.168.5.21 or the robot IP (default 192.168.1.50) </p>
                <p id="checkbox__checkP">- You should now be able to add files to the robot by using the file browser.</p>
                <p id="checkbox__checkP">- Restart the robot.</p>
                <br>
                <p id="checkbox__checkP">See the files to transfer here</p>
            </div>
            <input class="checkbox__check" type="checkbox">
        </div>

        <div class="nachi checkbox--seven">
            <div class="checkbox__steps">
                <h1 id="checkbox__checkH1">7</h1>
            </div>
            <div class="checkbox__description">
                <h4 id="checkbox__h4">Compile the robot programs</h4>
                <p id="checkbox__checkP">- Change permission on the robot to be “specialist”.</p>
                <p id="checkbox__checkP">- Select the robot programs to compile.</p>
                <p id="checkbox__checkP">  USERTASK-A.000</p>
                <p id="checkbox__checkP">  USERTASK-A.001</p>
                <p id="checkbox__checkP">  MZ07-A.001</p>
                <p id="checkbox__checkP">  MZ07-A.070</p>
                <p id="checkbox__checkP">  MZ07-A.071</p>
                <p id="checkbox__checkP">  MZ07-A.072</p>
                <p id="checkbox__checkP">- Restart your robot.</p>
            </div>
            <input class="checkbox__check" type="checkbox">
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
    width: 100%;
    height: 218px;
    background-color: #02215C;
    display: flex;
    align-items: center;
    margin: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

.checkbox--two {
    height: 318px;
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

</style>