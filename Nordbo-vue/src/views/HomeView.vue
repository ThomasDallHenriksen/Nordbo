<script >
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import HardwareView from '@/views/HardwareView.vue';

export default {
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
  <body>
    <div class="wrapper">
      <div class="container">
        <img class="banner" src="../assets/images/Nordbo-banner.png" alt="" width="1216" height="200" aria-placeholder="Welcome to the Mimic Guide">
        <div class="banner-text">
          <h1 id="banner-h1">Welcome to the</h1> 
          <h1 id="banner-h1">Mimic Guide</h1>
        </div>
      </div>
    <h1>Getting to know your Mimic UR</h1>
    <p>Mimic is a software platform that uses a tracking device to track the user’s movements, enabling the user to record and replicate complex movements that are challenging to automate with robots. Mimic records both position and orientation, drastically reducing the time spent programming and reprogramming a robot. Mimic UR is a URCap made for easy installation on Universal Robots and works together with a Tracker from Nordbo Robotics.</p>
    <h2>Select the amount of time</h2>
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
</template>

<style scoped>
header{
  width: 100%;
  height: 100px;
  text-align: center;
}

.HumanSkill{
  width: 25%;
}

.Robotics{
  width: 50%;
}

.social{
  width: 25%;
}


.Info{
  display: flex;
  height: 100%;
}

.select{
  display: flex;
  justify-content: center;
}

.min-5, .min-10, .min-20{
  width: 284px;
  height: 256px;
  background-color: #02215c;
  margin: 40px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
}



#select-min{
  position: relative;
  margin-top: 23%;
  margin-left: 35%;
  border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    font-size: 21px;
    border: solid 2px #1ec794;
    background: #1ec794 ;
    color: #ffffff;
    padding-left: 15px;
    padding-right: 15px;
}

.image{
  background-image: url(@/assets/images/iconsprite.png) ;
  background-position: -10px -4px;
  width: 60px;
  height: 60px;
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

.email--image{
  background-image: url(C:\Users\thoma\OneDrive\Skrivebord\github\Nordbo\Nordbo-vue\src\assets\images\iconsprite.png) ;
  background-position: -182px -20px;
  width: 60px;
  height: 30px;
  color: #ffffff;
  display: flex;
}
.phone--image{
  background-image: url(C:\Users\thoma\OneDrive\Skrivebord\github\Nordbo\Nordbo-vue\src\assets\images\iconsprite.png) ;
  background-position: -238px -22px;
  width: 60px;
  height: 30px;
  color: #ffffff;
  display: flex;
}
.facebook--image{
  background-image: url(C:\Users\thoma\OneDrive\Skrivebord\github\Nordbo\Nordbo-vue\src\assets\images\iconsprite.png) ;

  background-position: -308px -87px;
  width: 60px;
  height: 60px;
  color: #ffffff;
  display: flex;
}

.Robotics h3{
  white-space: nowrap;
  color: #ffffff;
}
.hej{
  display: flex;
}

.mo{
  display: flex;
}

.mo h3{
  color: #78bfe2;
}

.spriteLink{
  display: inline-block;
  background-position: -308px -87px;
  width: 60px;
  height: 60px;
  background-image: url('@/assets/images/iconsprite.png');
  margin-top: 10%;
  margin-right: 1%;
}
.link--linkedin{
  background-position: -373px -87px;
}

.link--twitter{
  background-position: -435px -87px;
}

.link--instagram{
  background-position: -491px -87px;
}

</style>




