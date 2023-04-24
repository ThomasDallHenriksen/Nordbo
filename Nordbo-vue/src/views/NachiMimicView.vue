<script>
</script>

<template>
  <header>
      <div id="pBar">
        <progress id="file" value="25" max="100"> 25% </progress>
    </div>
  </header>
  <body class="wrapper">
    <div class="titel1">
        <h1>Nachi Preperation</h1>
    </div>
    <div class="titel2">
        <h2>Mimic for Nachi - Robot Preperations</h2>
    </div>
    <br>
    <p>What you need prior to Mimic installation</p>
    <p>- TCP/IP ethernet module (should be installed in the robot)</p>
    <p>- External tracking module (Nachi external tracking card)</p>
    <p>- Gigabit switch (at least 3 ethernet ports)</p>
    <p>- Ethernet cables (2 extras)</p>
    <p>- HD ready touch screen (22” is recommended) or HD ready screen with mouse and keyboard</p>
    <br>
    <p>Known unsupported models</p>
    <p>CZ10</p>
    <p>All Nachi cobots</p>
        <div class="buttons">
        <div>
          <router-link 
            class="backButton" 
            to="/UrReadyView"
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
            to="/NachiHardwareView"
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
.titel1{
    text-align: center;
  }
  .titel2{
    text-align: center;
  }
</style>