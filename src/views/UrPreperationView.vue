<script>
</script>
<template>
    <header>
        <div id="pBar">
            <progress id="file" value="50.0" max="100"> 50.0% </progress>
        </div>
    </header>
    <body class="wrapper"> 
        <div class="container">
              <img class="banner" src="../assets/images/Nordbo-banner.png" alt="" width="1216" height="200" aria-placeholder="Welcome to the Mimic Guide">
              <div class="banner-text">
                <h1 id="banner-h1">Mimic Guide</h1>
              </div>
            </div>
        <div>
            <div>
                <h1 id="h1Title">UR Preperation</h1>
                <div id="urIndent">
                    <p id="urPrepP">In this course you will learn how to prepare robots from Universal Robots (UR) using Mimic</p>
                    <h1 id="h1TitlePrep">What you need prior to Mimic installation</h1>
                    <p id="urPrepP">-HD ready touch screen (22" is recommended) or HD ready screen with mouse and keyboard</p>
                    <p id="urPrepP">-Gigabit switch (optional - needed if connecting other hardware to the robot)</p>
                    <p id="urPrepP">-ethernet cables long enough to reach from your teaching to the robot </p>
                </div>
            </div>
            <br>
            <div>
                <div id="split">
                    <div>
                        <br>
                        <br>
                        <p id="urPrepP">Mimic is compatible with Universal Robots' Ployscope version: </p>
                        <p id="urPrepP">- CB Series: 3.14.3 or newer</p>
                        <p id="urPrepP">- eSeries: 5.9.4 or newer</p>
                        <p id="urPrepP">Mimic is compatible with all UR robots models</p>
                    </div>
                    <div>
                        <img id="UrPrepImg" src="/src/assets/images/UrPrep.png">
                    </div>
                </div>
            </div>
            <div class="buttons">
            <div>
                <router-link 
                    class="backButton" 
                    to="/IrTrackerView"
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
                    to="/UrSetupView"
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
#split{
    display: flex;
    justify-content: center;
}

#urPrepP{
    text-align: left;
    font-family: Helvetica;
    margin-top: 1%;
    font-size: 1.3vw;
    line-height: 1.1;
}

#h1TitlePrep{
  margin-top: 1%;
  font-size: 2vw;
  text-align: left;
}

#UrPrepImg{
    margin-left: 2%;
}

#urIndent{
    padding-left: 10%;
}
</style>