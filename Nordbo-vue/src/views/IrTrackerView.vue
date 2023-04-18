<script>
</script>

<template>
    <header>
        <div id="pBar">
          <progress id="file" value="33.3" max="100"> 33.3% </progress>
      </div>
    </header>
    <body class="wrapper">
        
        <div class="left">
            <div><h1>IR Tracker Setup</h1></div>
            <form action=""></form>
            <p>Follow these guidelines to setup the IR tracker</p>
            <p>Please see Mimic controller setup for setting up the IR tracker.</p>
            <div>
                <div>
                    <h1>1</h1>
                </div>
                <div>
                    <p>Connect the dongle to the Mimic controller with the dongle cradle.</p>
                </div>
                <div>
                    <input type="checkbox">
                </div>
            </div>
            <div>
                <div>
                    <h1>2</h1>
                </div>
                <div>
                    <p>Place Lighthouse as desired (see recommendations for setup in the Unboxing course) and connect the power supply afterwards.</p>
                    <p>Note: Do not move the Lighthouse when it is powered on. While powered on, small components are rotating inside the Lighthouse. If moved while rotating, these components might not perform as intended and can be damaged.</p>
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
                    <p>Turn on the tracker by holding the power button until the light is green</p>
                </div>
                <div>
                    <input type="checkbox">
                </div>
            </div>
            <p>How to get the most out of your IR tracker</p>
            <div>
                <router-link 
                    class="backButton" 
                    to="/HowToIrTrackerView"
                    custom
                    v-slot="{ navigate }"
                    >
                    <button
                    @click="navigate"
                    role="link"
                    >
                    IR tracker
                    </button>
                </router-link>
            </div>
            <div class="buttons">
                <div>
                <router-link 
                    class="backButton" 
                    to="/ControllerView"
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
                    to="/UrPreperation1View"
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
        <div class="right">
            <img src="" alt="" width="420" height="500">
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