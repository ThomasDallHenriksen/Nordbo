<script>
</script>

<template>
  <header>
      <div id="pBar">
        <progress id="file" value="55.5" max="100"> 55.5% </progress>
    </div>
  </header>

    <body>
      <h1>UR Preperation</h1>
      <br>
      <p>How to Install the URCap Needed and Setup Mimic Controller and Nordbo Driver</p>

      <div class="buttons">
        <div>
          <router-link 
            class="backButton" 
            to="/URPreperation2View"
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
            to="/IrTrackerView"
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