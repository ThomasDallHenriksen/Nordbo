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
            <div class="container">
              <img class="banner" src="../assets/images/Nordbo-banner.png" alt="" width="1216" height="200" aria-placeholder="Welcome to the Mimic Guide">
              <div class="banner-text">
                <h1 id="banner-h1">Mimic Guide</h1>
              </div>
            </div>
            <container class="content">
              <div class="startingTxt">
                <h1>Mimic controller setup</h1>
                <p>In the Mimic packaging you will find the Mimic Controller and Tracker. Additionally, you will need the following:
                </p>
              </div>
              <div class="checkbox">
                  <div class="steps">
                      <h1 id="checkH1">1</h1>
                  </div>
                  <div class="description">
                      <p id="checkP">Connect the power supply to the Mimic controller</p>
                  </div>
                  <input class="check" type="checkbox">
              </div>
              <div class="controllerImg">
                <img src="/src/assets/images/mimicontroller.png">
              </div>
              <div class="checkbox">
                <div class="steps">
                  <h1 id="checkH1">2</h1>
                </div>
                <div class="description">
                  <p id="checkP">Connect the Mimic Controller to the robot (see robot specific guidelines) 
                  Optional: Connect the Mimic Controller with the Gigabit switch using the ethernet cable, if connecting to other hardware is needed.</p>
                </div>
                    <input class="check" type="checkbox" v-model="userInput">
              </div>
              <div class="checkbox">
                <div class="steps">
                  <h1 id="checkH1">3</h1>
                </div>
                <div class="description">
                  <p id="checkP">Connect the touch screen/screen, USB-mouse and keyboard to the Mimic Controller</p>
                </div>
                  <input class="check" type="checkbox">
              </div>
              <div class="checkbox">
                <div class="steps">
                  <h1 id="checkH1">4</h1>
                </div>
                <div class="description">
                  <p id="checkP">Verify that the Mimic Controller starts up when pressing the power button</p>
                </div>
                  <input class="check" type="checkbox">
              </div>
              <div>
                <p>Note: The password for the Mimic Controller is “nordbo”.</p>
              </div>
            </container>
          
          
          <div class="buttons">
            <div>
              <router-link 
                class="backButton" 
                to="/HardwareView"
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
                to="/IrTrackerView"
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

  .checkbox {
    width: 1037px;
    height: 100px;
    background-color: #02215C;
    display: flex;
    margin: 10px;
    align-items: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

.checkbox-long{
    width: 100%;
    height: 300px;
    background-color: #02215C;
    display: flex;
    align-items: center;
    margin: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

.steps{
    width: 5%;
}

.description{
    width: 80%;
}

.check{
    width: 15%;
    height: 30px;
}
#checkH1{
  color: #ffffff;
  margin-left: 10px;
}
#checkP{
  color: #ffffff;
}

.controllerImg img{
  width: 337px;
  height: 290px;
}

.content{
    display: flex;
    justify-content: center;
    flex-flow: wrap;
    padding: 2rem;
  }
</style>