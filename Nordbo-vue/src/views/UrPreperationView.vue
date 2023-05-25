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
                <h1 id="Title">UR Preperation</h1>
                <br>
                <br>
                <div id="urIndent">
                    <p id="urPrepP">In this course you will learn how to prepare robots from Universal Robots (UR) using Mimic</p>
                    <br>
                    <br>
                    <h1 id="TitlePrep">What you need prior to Mimic installation</h1>
                    <p id="urPrepP">-HD ready touch screen (22" is recommended) or HD ready screen with mouse and keyboard</p>
                    <p id="urPrepP">-Gigabit switch (optional - needed if connecting other hardware to the robot)</p>
                    <p id="urPrepP">-ethernet cables long enough to reach from your teaching to the robot </p>
                </div>
            <br>
            <br>
                <div id="split">
                    <div class="urLeft">
                        <br>
                        <br>
                        <p id="urPrepP">Mimic is compatible with Universal Robots' Ployscope version: </p>
                        <p id="urPrepP">- CB Series: 3.14.3 or newer</p>
                        <p id="urPrepP">- eSeries: 5.9.4 or newer</p>
                        <br>
                        <br>
                        <p id="urPrepP">Mimic is compatible with all UR robots models</p>
                    </div>
                    <div class="urRight">
                        <img id="urImg" src="/src/assets/images/UrPrep.png" alt="robot model">
                    </div>
                </div>
            <div class="buttons">
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

#TitlePrep{
  margin-top: 1%;
  font-size: 2vw;
  text-align: left;
}

.urLeft {
    height: 100%;
    width: auto;
}

.urRight {
    height: 100%;
    width: auto;
}

#urImg{
    margin-left: 2%;
    width: 90%;
    height: 100%;
}

#urIndent{
    padding-left: 10%;
}
</style>