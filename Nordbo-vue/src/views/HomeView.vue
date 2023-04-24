<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import HardwareView from '@/views/HardwareView.vue';
</script>

<template>
  <body>
    <div class="wrapper">
      <div class="container">
        <img class="banner" src="../assets/images/Nordbo-banner.png" alt="" width="1216" height="200" aria-placeholder="Welcome to the Mimic Guide">
        <div class="banner-text">
          <h1 id="banner-h1">Welcome to the Mimic Guide</h1>
        </div>
      </div>
    <h2>Getting to know your Mimic UR</h2>
    <p>Mimic is a software platform that uses a tracking device to track the user’s movements, enabling the user to record and replicate complex movements that are challenging to automate with robots. Mimic records both position and orientation, drastically reducing the time spent programming and reprogramming a robot. Mimic UR is a URCap made for easy installation on Universal Robots and works together with a Tracker from Nordbo Robotics.</p>
    <h2>Select the amount of time</h2>
    <!-- Icon sprite -->
    <div class="select">
      <div class="min-5">
        <img src="" alt="">
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
        <img src="" alt="">
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
        <img src="" alt="">
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
      <p>We are an AI & robotics company specializied in No Code software for robots within industrial manufactoring</p>
      <!-- Icon sprite -->
    </div>
    <div class="social">
      <!-- Icon sprite buttons -->
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





.Info{
  display: flex;
}

.Robotics {
  margin-left: 60px;
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
}

.container{
  position: relative;
  background-color: #415886;
  opacity: 1.1;
  
}

#select-min{
  position: relative;
  margin-top: 76%;
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







</style>
