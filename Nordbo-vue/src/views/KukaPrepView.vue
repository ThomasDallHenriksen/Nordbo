<script>
</script>

<template>
    <header>
        <div id="pBar">
          <progress id="file" value="22.2" max="100"> 22.2% </progress>
      </div>
    </header>
    <body>
        <div class="wrapper">
            <h1>KUKA Preperation</h1>
            <p class="checkP">Mimic for KUKA is currently in Beta release.</p>
            <br>

            <h1>Mimic for KUKA - Robot Preparations</h1>
            <h4>What you need prior to Mimic installation</h4>
            <p> - HD ready touch screen (22” is recommended) or HD ready screen with mouse and keyboard</p>
            <p> - Gigabite switch (optional)</p>
            <p> - Ethernet cable</p>
            <br>

            <p>KUKA robots are controlled with the RobotSensorInterface (RSI) 4.0 option package (tested with 4.0.8). Ensure that the</p>
            <p>RSI package is installed on KUKA robot before you install Mimic. This module can be acquired from Kuka together with</p>
            <p>a manual on how to install it.</p>
            <br>

            <p>You will need the KUKA controller version = KSS 8.5.</p>
            <br>
            <br>

            <h1>Hardware Setup</h1>
            <p>Complete the Tracker Hardware Setup before this step.</p>
            <br>

            <h4>Wire the Mimic Controller to the Robot</h4>
            <div class="text-step">
                <h4>Step 1.</h4>
                <p>Connect the ethernet cable to the Mimic Controller</p>
            </div>
            <p>Note: (Optional) Use a Gigabit switch.</p>
            <br>
            <br>

            <div class="text-step step--two">
                <h4>Step 2.</h4>
                <p>Connect the ethernet cable to the robot</p>
            </div>
            <br>

            <h1>Mimic for KUKA - Get started</h1>
            <p>How to Configure a KUKA Robot</p>
            <br>

        <div class="kuka checkbox--one">
            <div class="checkbox__steps">
                <h1 id="checkbox__checkH1">1</h1>
            </div>
            <div class="checkbox__description">
                <h4 id="checkbox__h4">Change permission to administrator level</h4>
                <br>
                <p id="checkbox__checkP">Start by changing the permission on the Kuka robot to administrator level.</p>
                <br>
                <p id="checkbox__checkP">This is achieved by:</p>
                <br>
                <p id="checkbox__checkP">- Starting up the robot</p>
                <p id="checkbox__checkP">- Clicking on the “user” symbol in the left sidebar on the left side of the teach pendent</p>
                <p id="checkbox__checkP">- Inside the user page, click on “Administrator” and enter the code “kuka” and click on “Login” </p>
            </div>
            <input class="checkbox__check" type="checkbox">
        </div>

        <div class="kuka checkbox--two">
            <div class="checkbox__steps">
                <h1 id="checkbox__checkH1">2</h1>
            </div>
            <div class="checkbox__description">
                <h4 id="checkbox__h4">Setup the IP address of the RSI</h4>
                <p id="checkbox__checkP">See the RSI manual to see how to change the IP of the RSI.</p>
                <p id="checkbox__checkP">The IP address of the RSI and the Mimic Controller have to be on the same subnet, e.g. 192.168.1.XX.</p>
                <p id="checkbox__checkP">The IP address of the RSI can be changed as described in the RSI manual.</p>
                <br>
                <p id="checkbox__checkP">- Press on the Robot icon in the top left corner of the teach pendant.</p>
                <p id="checkbox__checkP">- Press on “Start-up” > “Network Configuration” > “Advanced” > “Add Interface” > Choose a name for the Interface ></p>
                <p id="checkbox__checkP">Choose “Mixed IP address” and set the IP to 192.168.1.50 (default).</p>
                <p id="checkbox__checkP">- The IP can be changed but needs to be on the same subnet as the Mimic Controller.</p>
                <p id="checkbox__checkP">- Set the net mask to 255.255.255.0</p>
            </div>
            <input class="checkbox__check" type="checkbox">
        </div>
        <br>

        <p>If preffered, the IP address of the Mimic Controller can be changed in the (Linux) wifi icon in the top right corner.</p>
        <br>
        <p>- Press “Edit Connections”, a pop up of “Network Connections” will show.</p>
        <p>- Under “Ethernet”, double-click “Mimic”. A new pop up window called “Editing Mimic” will appear.</p>
        <p>- You choose IPv4 Settings where you will be able to edit the IP address.</p>
        <p>- Press Save.</p>
        <p>- Once you have set and saved the IP address in IPv4 Settings, go to the (Linux) wifi icon in the top right corner again</p>
        <p>where you will need to disconnect the wifi connection - and reconnect again. Your IP address on the Mimic</p>
        <p>controller will be successfully changed.</p>
        <br>
        <p>Note: if the IP of the Mimic Controller has been changed, it needs to be changed in the RSI_mimicConfig.xml file as</p>
        <p>well. See next section.</p>
        <br>

        <h1>Transfer Files to the Robot</h1>
        <p>Transfer the supplied files to the robot. This can be achieved using WorkVisual or transfer them directly from USB. The </p>
        <p>files can be found on the USB.</p>
        <br>
        <p>RSI file should be transferred to “C:/KRC/ROBOTER/Config/User/Common/SensorInterface” and program files should</p>
        <p>be transferred to “KRC/R1/Program”.</p>
        <br>
        <h4>How to transfer program files with USB (Optional)</h4>
        <br>
        <div class="text-step">
                <h4>Step 1.</h4>
                <p>Insert the USB into the robot controller</p>
        </div>

        <div class="text-step">
                <h4>Step 2.</h4>
                <p>To see the USB, change the user to Administrator (see step 1)</p>
        </div>

        <div class="text-step">
                <h4>Step 3.</h4>
                <p>Select the files from the USB</p>
        </div>

        <div class="text-step">
                <h4>Step 4.</h4>
                <p>Click Edit > Copy</p>
        </div>

        <div class="text-step">
                <h4>Step 5.</h4>
                <p>Select the destination folder</p>
        </div>

        <div class="text-step">
                <h4>Step 6.</h4>
                <p>Click Edit > Paste</p>
        </div>
        <br>

        <p>The files to transfer are:</p>
        <br>
        <br>
        <p>- RSI_mimic.rsix</p>
        <p>- RSI structure</p>
        <p>- Location: RSI folder</p>
        <br>
        <p>- RSI_mimicConfig.xml</p>
        <p>- UDP communication config</p>
        <p>- Location: RSI folder</p>
        <br>
        <p>Note: if the IP of the Mimic Controller has been changed, it needs to be changed in this file as well.</p>
        <br>
        <p>- Ncom.dat</p>
        <p>- General mimic functions</p>
        <p>- Location: Program folder</p>
        <br>
        <p>- Ncom.src</p>
        <p>-General mimic functions</p>
        <p>-Location: Program folder</p>
        <br>
        <p>- Mimic.dat</p>
        <p>- Example of a mimic program</p>
        <p>- Location: Program folder</p>
        <br>
        <p>- Mimic.src</p>
        <p>- Example of a mimic program</p>
        <p>- Location: Program folder</p>
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
    
    <footer>
      <div class="Info">
      <div class="HumanSkill">
        <h4>Human skills,</h4>
        <p>machine precision</p>
      </div>
      <div class="Robotics">
        <p>We are an AI & robotics company specializied in No Code software for robots within industrial manufactoring</p>
        <!-- Icon sprite -->
      </div>
      <div class="social">
        <!-- Icon sprite buttons -->
      </div>
    </div>
      <div class="copyright">
        <p>Copyright @ Nordbo robotics</p>
      </div>
  
    </footer>
    <RouterView />
</template>

<style>
.kuka{
    width: 100%;
    height: 268px;
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

.text-step{
    display: flex;
}

.text-step h4{
    font-weight: bold;
}

.step-two h4{
    font-weight: bold;
}

</style>