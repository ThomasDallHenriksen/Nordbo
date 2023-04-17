<script>
</script>

<template>
    <header>
        <div id="pBar">
          <progress id="file" value="22.2" max="100"> 22.2% </progress>
      </div>
    </header>
    <body>
    <div>
        <div class="wrapper">
            <h1>Mimic controller setup</h1>
            <p>In the Mimic packaging you will find the Mimic Controller and Tracker. Additionally, you will need the following:
            </p>
        <div>
            <h1>1</h1>
            <p>Connect the power supply to the Mimic controller</p>
            <input type="checkbox">
        </div>
        <img src="" alt="">
        <div>

        </div>
            <div>
                <h1>2</h1>
            </div>
            <div>
                <p>Connect the Mimic Controller to the robot (see robot specific guidelines) 
                Optional: Connect the Mimic Controller with the Gigabit switch using the ethernet cable, if connecting to other hardware is needed.</p>
            </div>
            <div>
                <input type="checkbox">
            </div>
        </div>
        <div>
            <div>
                <h1>3</h1>
            </div>
            <div>
                <p>Connect the touch screen/screen, USB-mouse and keyboard to the Mimic Controller</p>
            </div>
            <div>
                <input type="checkbox">
            </div>
        </div>
        <div>
            <div>
                <h1>4</h1>
            </div>
            <div>
                <p>Verify that the Mimic Controller starts up when pressing the power button</p>
            </div>
            <div>
                <input type="checkbox">
            </div>
        </div>
        <p>Note: The password for the Mimic Controller is “nordbo”.</p>
    </div>
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
            to="/"
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
</template>