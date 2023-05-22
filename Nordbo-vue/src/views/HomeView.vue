<script>
import { RouterLink, RouterView } from 'vue-router'
import HardwareView from '@/views/HardwareView.vue';
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomeView',
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
    <div class="wrapper">
      <div class="container">
        <img class="banner" src="../assets/images/Nordbo-banner.png" alt="" width="1216" height="200" aria-placeholder="Welcome to the Mimic Guide">
        <div class="banner-text">
          <h1 id="banner-h1">Welcome to the</h1> 
          <h1 id="banner-h1">Mimic Guide</h1>
        </div>
      </div>
      <h1 id="Title">Getting to know your Mimic UR</h1>
      <p id="homeDescription">Mimic is a software platform that uses a tracking device to track the user’s movements, enabling the user to record and replicate complex movements that are challenging to automate with robots. Mimic records both position and orientation, drastically reducing the time spent programming and reprogramming a robot. Mimic UR is a URCap made for easy installation on Universal Robots and works together with a Tracker from Nordbo Robotics.</p>
      <h2 id="selectTime">Select the amount of time</h2>
      <!-- Icon sprite -->
      <div class="select">
        <div class="min-5">
          <div class="image"></div>
          <h2>5 min.</h2>
          <div>
            <router-link class="nextButton"
              to="/HardwareView"
              custom
              v-slot="{ navigate }"
            >
              <button
                @click="navigate"
                role="link"
                id="select-min"
              >
                Select
              </button>
            </router-link>
          </div>
        </div>
        <div class="min-10">
          <div class="image"></div>
          <h2>10 - 15 min.</h2>
          <div>
            <router-link class="nextButton"
              to="/HardwareView"
              custom
              v-slot="{ navigate }"
            >
              <button
                @click="navigate"
                role="link"
                id="select-min"
              >
                Select
              </button>
            </router-link>
          </div>
        </div>
        <div class="min-20"> 
          <div class="image"></div>
          <h2>20 - 30 min.</h2>
          <div>
            <router-link class="nextButton"
              to="/NachiMimicView"
              custom
              v-slot="{ navigate }"
            >
              <button
                @click="navigate"
                role="link"
                id="select-min"
              >
                Select
              </button>
            </router-link>
          </div>
        </div>
      </div>
  </div>
  <Footer></Footer>
</template>

<style scoped>

.select{
  display: flex;
  justify-content: center;
}

.min-5, .min-10, .min-20{
  width: 17.75rem;
  height: 16rem;
  background-color: #02215c;
  margin: 2.5rem;
  border-top-left-radius: 1.56rem;
  border-top-right-radius: 1.56rem;
  border-bottom-left-radius: 1.56rem;
  border-bottom-right-radius: 1.56remx;
}

#select-min{
  position: relative;
  margin-top: 23%;
  margin-left: 35%;
  border-top-left-radius: 1.56rem;
  border-top-right-radius: 1.56rem;
  border-bottom-left-radius: 1.56rem;
  border-bottom-right-radius: 1.56rem;
  font-size: 1.31rem;
  border: solid 0.12rem #1ec794;
  background: #1ec794 ;
  color: #ffffff;
  padding-left: 0.94;
  padding-right: 0.94;
}

.image{
  background-image: url(@/assets/images/icons.png) ;
  background-position: -0.62rem -0.25rem;
  width: 3.75rem;
  height: 3.75rem;
  margin-top: 27%;
  margin-left: 38%;
}

.min-5 h2{
  color: #ffffff;
  display: flex;
  justify-content: center;
}
.min-10 h2{
  color: #ffffff;
  display: flex;
  justify-content: center;
}
.min-20 h2{
  color: #ffffff;
  display: flex;
  justify-content: center;
}
</style>




