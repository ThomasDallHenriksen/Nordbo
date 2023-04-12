<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import hardwareSetup from '@/components/hardwareSetup.vue';
</script>

<template>
  <header>
    <h1>Welcome to the Mimic Guide</h1>
  </header>
  <body>
    <div class="wrapper">
    <h2>Getting to know your Mimic UR</h2>
    <p>Mimic is a software platform that uses a tracking device to track the user’s movements, enabling the user to record and replicate complex movements that are challenging to automate with robots. Mimic records both position and orientation, drastically reducing the time spent programming and reprogramming a robot. Mimic UR is a URCap made for easy installation on Universal Robots and works together with a Tracker from Nordbo Robotics.</p>
    <h2>Select the amount of time</h2>
    <!-- Icon sprite -->
    <div class="select">
      <div class="min-5">
        <img src="" alt="">
        <RouterLink to="/hardwareSetup">Select</RouterLink>
      </div>
      <div class="10-min">
        <img src="" alt="">
        <button>Select</button>
      </div>
      <div class="20-min"> 
        <img src="" alt="">
        <button>Select</button>
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
  <RouterView />
</template>

<style scoped>
header{
  width: 100%;
  height: 100px;
  background: ;
  text-align: center;
}



.wrapper{
  height: 600px;
}

.wrapper h2 {
  margin-top: 88px;
  text-align: center;
}
.wrapper p {
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

.min-5{
  width: 284px;
  height: 256px;
  background-color: deeppink;
}


</style>
