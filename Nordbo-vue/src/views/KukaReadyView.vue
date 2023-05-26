<script>
import Footer from '@/components/Footer.vue'
import Banner from '@/components/Banner.vue'


export default {
  name: 'KukaReady',
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
        <progress id="file" value="100.0" max="100"> 100.0% </progress>
    </div>
    <div class="wrapper-kukaReady">
        <div id="icon">
            <a href="/"><img  src="../assets/images/cross.png" alt="" width="40" height="40"></a>
        </div>
        <div>
            <h1 id="Title">Your KUKA robot is now ready to use Mimic.</h1>
        </div>
        <div class="buttons">
        <div>
          <router-link 
            class="backButton" 
            to="/KukaPrepView"
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
            to="/"
            custom
            v-slot="{ navigate }"
          >
            <button
              @click="navigate"
              role="link"
              id="nextButton"
            >
              Complete
            </button>
          </router-link>
        </div>
    </div>
</div>
<Footer></Footer>
    <RouterView />
</template>

<style>
.wrapper-kukaReady{
  width: 100%;
  height: 34rem;
}
</style>