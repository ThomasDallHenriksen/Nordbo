<script>
</script>

<template>
  <header>
      <div id="pBar">
        <progress id="file" value="44.4" max="100"> 44.4% </progress>
    </div>
  </header>
    
    <body>
      <h1>UR Preperation</h1>
      <br>
      <h2>Setup Robot Network</h2>
      <br>
      <p>In this section you will find what you need to setup the network on the robot and the Mimic Controller. This includes:</p>
      <br>
      <p>The robot</p>
      <p>The Norbo Driver (URCap)</p>
      <p>The Mimic Controller</p>
      <br>
      <p>The Ip's provided are recommended defaults. They can be changed if needed. If changed beawer that the IP on the</p>
      <p>Mimic Controller and the IP specified in the Nodbro Driver URCap must be the same</p>
      <br>
      <p>Change the IP of the Robot:</p>
      <p>Change the IP of the UR to a static IP (default IP 192.168.1.50)</p>
      <p>To change the IP on a UR, go to Settings > System > Network > IP adress</p>

      <div class="buttons">
        <div>
          <router-link 
            class="backButton" 
            to="/HardwareView"
            custom
            v-slot="{ navigate }"
          >
            <button
              @click="navigate"
              role="link"
            >
              Back
            </button>
          </router-link>
        </div>
        <div>
          <router-link class="nextButton"
            to="/URPreperation3View"
            custom
            v-slot="{ navigate }"
          >
            <button
              @click="navigate"
              role="link"
            >
              Next
            </button>
          </router-link>
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

<style>
.buttons{
    display: flex;
  }
</style>