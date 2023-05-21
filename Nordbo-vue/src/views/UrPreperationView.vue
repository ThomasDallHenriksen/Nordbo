<script>
import Footer from '@/components/Footer.vue'
import Banner from '@/components/Banner.vue'


export default {
  name: 'UrPrep',
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
    <banner></banner>
    <div id="pBar">
            <progress id="file" value="50.0" max="100"> 50.0% </progress>
        </div>
    <body class="wrapper"> 
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
    </body>
    <Footer></Footer>
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
    width: 75%;
}

#urIndent{
    padding-left: 10%;
}
</style>