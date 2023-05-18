<script>
import Footer from '@/components/Footer.vue'

export default {
  name: 'HowTo',
  components: {
    Footer
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
    <div id="pBar">
        <progress id="file" value="50.0" max="100"> 50.0% </progress>
    </div>
</header>
<div class="wrapper">
  <div class="container">
              <img class="banner" src="../assets/images/Nordbo-banner.png" alt="" width="1216" height="200" aria-placeholder="Welcome to the Mimic Guide">
              <div class="banner-text">
                <h1 id="banner-h1">Mimic Guide</h1>
              </div>
            </div>
  <div>

  <div class="content ir--tracker">
    <h1>How to get the most out of your IR Tracker</h1>
    <p>Below you will find a list of recommendations to get the most out of the tracker.</p>
    <br>
    <h2>How to get the most out of your IR Tracker</h2>

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
    </div>
  </div>
<Footer></Footer>
<RouterView />

</template>

<style>
  .lighthouse {
  display: flex;
  align-items: center;
  justify-content: center;
}

.lighthouse img {
  width: 70%;
}

</style>