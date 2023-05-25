<script>
import Footer from '@/components/Footer.vue'
import Banner from '@/components/Banner.vue'


export default {
  name: 'HowTo',
  components: {
    Footer, 
    Banner
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
<Banner></Banner>
<div id="pBar">
        <progress id="file" value="50.0" max="100"> 50.0% </progress>
    </div>
<div class="wrapper">

  <div class="content ir--tracker">
    <h1 id="Title">How to get the most out of your IR Tracker</h1>
    <br>
    <p>Below you will find a list of recommendations to get the most out of the tracker.</p>
    <br>

    <div class="lighthouse">
      <img class="lighthouse-info" src="../assets/images/lighthouse.png" alt="lighthouse"></div>
      <!-- <div class="lighthouse-left">
        <h2>THE LIGHTHOUSE</h2>
        <br>
        <h4 class="lighthouse-titel">Do not move the Lighthouse when it is powered on</h4>
        <p class="lighthouse-text">while powered on, small conmponents are rotating inside the</p>
        <p class="lighthouse-text">Lighthouse. If moved while rotating, these components might not</p>
        <p class="lighthouse-text">perform as intended and can be damaged.</p>
        <br>

        <h2 class="lighthouse-titel">Fixate the Lighthouse separate from moving parts</h2>
        <p class="lighthouse-text">it is recommendated to fixate the Lighthouse to a sturdy base.</p>
        <p class="lighthouse-text">Vibrations from the surroundings will affect the tracking.</p>
      </div>

      <div class="lighthouse-right"></div>
    </div> -->

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
                    to="/UrPreperationView"
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
<Footer></Footer>
<RouterView />

</template>

<style>
.ir--tracker p{
  font-size: 1.563vw;
}

.lighthouse {
  display: flex;
  align-items: center;
  justify-content: center;
}

.lighthouse img {
  width: 70%;
}

</style>