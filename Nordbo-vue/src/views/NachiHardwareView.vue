<script>
</script>

<template>
  <header>
        <div id="pBar">
            <progress id="file" value="50" max="100"> 50% </progress>
        </div>
    </header>
    <body class="wrapper">
        <div class="titel1">
            <h1>Nachi Preperation</h1>
        </div>
        <div class="titel1">
            <h2>Hardware Setup</h2>
        </div>
        <br>
        <p>After the Tracker Hardware Setup, connect a Gigabit switch to the Mimic Controller connect 
            2 ethernet cables to the switch and the robot.</p>
        <br>
        <h2>Wire the Mimic Controller to the Robot</h2>
        
    
        <div class="buttons">
        <div>
          <router-link 
            class="backButton" 
            to="/NachiMimicView"
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
            to="/NachiConfiqView"
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
.buttons{
    display: flex;
  }
  .titel1{
    text-align: center;
  }
  .titel2{
    text-align: center;
  }
</style>