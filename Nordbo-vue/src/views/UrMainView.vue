<script>
</script>

<template>
    <header>
        <div id="pBar">
          <progress id="file" value="87.5" max="100"> 87.5% </progress>
      </div>
    </header>
    <body>
        <div class="wrapper">
          <div id="UrMainContent">
            <h1 id="h1Title">UR Preperation</h1>
            <p id="urMainP">How to Create the Main UR Program</p>
            <br>
            <p id="urMainP">There are 2 scenarios for using Mimic on a UR robot:</p>
            <br>
            <h4 id="urMainH4">1. Control the robot from Mimic (most common use)</h4>
            <p id="urMainP">Controlling the robot from Mimic means Mimic is given control of the robot. Hence, Mimic functionality is accessed</p>
            <p id="urMainP">through the Mimic interface.</p>
            <p id="urMainP">E.g. to use Mimics Track, the user can navigate to the Track page, directly in the Mimic interface.</p>
            
            <br>
            <h4 id="urMainH4">2. Control Mimic from the robot (advanced use for production)</h4>
            <p id="urMainP">Controlling Mimic from the robot means the robot remains in control and can call Mimic functionality. Hence, Mimic</p>
            <p id="urMainP">functionality is accessed through the robot.</p>
            <p id="urMainP">E.g. to use Mimics Track, the robot will call the Track functionality in Mimic and change the Mimic interface to the</p>
            <p id="urMainP">Track page.</p>

            <br>

            <p id="urMainP">How to create UR programs for each of these scenarios is described in this section.</p>

            <br>

            <h4 id="urMainH4">Control the robot from Mimic</h4>
            <p id="urMainP">Include the two scripts in the program as shown on the picture below.</p>
            <br>

            <p id="urMainP">The scripts are provided on the USB in the box.</p>
            <img class="usb" src="../assets/images/usbscript.png" alt="script">
            <br>

            <h4 id="urMainH4">Control Mimic from the robot</h4>
            <p id="urMainP">Use the Script: mimic_int.script in BeforeStart.</p>
            <br>

            <h4 id="urMainH4">2 scripts are avalaible to use Mimic functionality:</h4>
            <p id="urMainP">-track_mimic_program( )</p>
            <p id="urMainP">Calls Track functionality in Mimic.</p>
            <p id="urMainP"> - run_mimic_program( )</p>
            <p id="urMainP">Calls Run functionality in Mimic.</p>
            <br>

            <p id="urMainP">The number specified in ( ) is the ID of the program. Only predefined programs in Mimic can be called. See example</p>
            <p id="urMainP">below.</p>
            <p id="urMainP">The scripts can be used multiple times in the program. See example below.</p>
            <br>

            <div class="example">
                <div class="track">
                    <img src="../assets/images/urprogram.png" alt="script">
                    <p id="urMainP">Example: A UR program that calls a Track program with I</p>
                    <p id="urMainP">D 12 and Run program with ID 12</p>
                </div>
                <div class="run">
                    <img src="../assets/images/urrun.png" alt="script">
                    <p id="urMainP">Example: A UR program that calls a Run program with </p>
                    <p id="urMainP">ID 23 and another Run program with ID 27.</p>
                </div>
            </div>
          </div>
            <br>

        <div class="buttons">
        <div>
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
        </div>
        <div>
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

.usb img{
    width: 880px;
    height: 550px;
}

.example{
    display: flex;
}

.example img{
    width: 580px;
    height: 387px;
}

#urMainP{
    text-align: left;
    font-family: Helvetica;
    margin-top: 1%;
    font-size: 1.3vw;
    line-height: 1.1;
}

#urMainH4{
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
    align-items: center;
    margin-top: 3%;
    text-align: left;
    
}
</style>