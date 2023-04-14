<script setup>

</script>

<template>
    <header>
      <h1>Welcome to the Mimic Guide</h1>
    </header>
    <body>
      
      <div class="wrapper">
        <div>
          <label for="file"></label>
          <progress id="file" value="11.1" max="100"> 11.1% </progress>
      </div>
      <h1>Hardware Setup</h1>
        <p>In the Mimic packaging you will find the Mimic Controller and Tracker. Additionally, you will need the following:</p> 
        <p> - Umbraco key set</p>
        <p>- Proper flanges for your tools and Mimic Robot Pointer</p> 
        <p> Note: The Mimic Robot Pointer is compatible with the tool flange of UR robots.</p>
        <p>- Touch screen or screen (without touch functionality) and a mouse and keyboard</p>
        <p>- 1 Gigabit switch (optional - if connecting to other hardware is needed)</p>
        <p>- Ethernet cables (for any additional hardware needed)</p>
        <h1>Video demostration</h1>
        <div>
          <video src="" width="320" height="240"></video>
        </div>
        <div class="buttons">
        <div>
          <router-link
            to="/"
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
          <router-link
            to="/views/ControllerView"
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