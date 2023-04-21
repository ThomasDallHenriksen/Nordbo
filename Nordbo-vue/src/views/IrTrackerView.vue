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
            <div class="checkbox">
            <div class="steps">
                <h1 id="checkH1">1</h1>
            </div>
            <div class="description">
                <p id="checkP">Connect the dongle to the Mimic controller with the dongle cradle.</p>
            </div>
            <input class="check" type="checkbox">
            </div>
            <div class="checkbox-long">
            <div class="steps">
                <h1 id="checkH1">2</h1>
            </div>
            <div class="description">
                <p id="checkP">Place Lighthouse as desired (see recommendations for setup in the Unboxing course) and connect the power supply afterwards.</p>
                <p id="checkP">Note: Do not move the Lighthouse when it is powered on. While powered on, small components are rotating inside the Lighthouse. If moved while rotating, these components might not perform as intended and can be damaged.</p>
            </div>
            <input class="check" type="checkbox">
            </div>
            <div class="checkbox">
            <div class="steps">
                <h1 id="checkH1">3</h1>
            </div>
            <div class="description">
                <p id="checkP">Turn on the tracker by holding the power button until the light is green</p>
            </div>
            <input class="check" type="checkbox">
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
                    id="backButton"
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
                    id="backButton"
                    >
                    Back
                    </button>
                </router-link>
                </div>
                <div>
                <router-link class="nextButton"
                    to="/UrPreperationView"
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

<style>
.checkbox {
    width: 100%;
    height: 100px;
    background-color: #02215C;
    display: flex;
    align-items: center;
    margin: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

.checkbox-long{
    width: 100%;
    height: 300px;
    background-color: #02215C;
    display: flex;
    align-items: center;
    margin: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

.steps{
    width: 5%;
}

.description{
    width: 80%;
}

.check{
    width: 15%;
    height: 30px;
}
#checkH1{
  color: #ffffff;
  margin-left: 10px;
}
#checkP{
  color: #ffffff;
}

</style>