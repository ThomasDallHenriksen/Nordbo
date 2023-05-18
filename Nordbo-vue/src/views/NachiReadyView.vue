<script>
import Footer from '@/components/Footer.vue'

export default {
  name: 'NachiReady',
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
        <progress id="file" value="100.0" max="100"> 100.0% </progress>
    </div>
    </header>
    <div class="wrapper">
        <div id="icon">
            <a href="/"><img  src="../assets/images/cross.png" alt="" width="40" height="40"></a>
        </div>
        <div>
            <h1>Your Nachi robot is now ready to use Mimic.</h1>
        </div>
        <div class="buttons">
        <div>
          <router-link 
            class="backButton" 
            to="/NachiConfiqView"
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
            to="/KukaPrepView"
            custom
            v-slot="{ navigate }"
          >
            <button
              @click="navigate"
              role="link"
              id="nextButton"
            >
              Next Lesson
            </button>
          </router-link>
        </div>
    </div>
</div>
<Footer></Footer>
    <RouterView />
</template>

<style>
#icon{
    display: flex;
    justify-content: flex-end;
}
</style>