<script>
</script>

<template>
    <header>
        <div id="pBar">
          <progress id="file" value="22.2" max="100"> 22.2% </progress>
      </div>
    </header>
    <body>
        <div class="wrapper">
            <h1>UR Preperation</h1>
            <p>How to Install the URCap Needed and Setup Mimic Controller and Nordbo Driver</p>

        <div class="checkbox">
            <div class="steps">
                <h1>1</h1>
            </div>
            <div class="description">
                <p>Plug in the USB with the Caps into the robot Teach Pendant</p>
            </div>
            <input class="check" type="checkbox">
        </div>

        <div class="checkbox">
            <div class="steps">
                <h1>2</h1>
            </div>
            <div class="description">
                <p>Install the Nordbo Driver URCap</p>
                <p>The Nordbo Driver URCap needs to be version 2.4 </p>
            </div>
            <input class="check" type="checkbox">
        </div>

        <div class="checkbox-long">
            <div class="steps">
                <h1>3</h1>
            </div>
            <div class="description">
                <p>Plug in the USB with the Caps into the robot Teach Pendant</p>
                <br>
                <p>Enable the Nordbo Driver in the check box</p>
                <p>Insert the Mimic Controller IP: 192.168.1.20 (default)</p> 
                <p>Note: The IP can be changed but needs to be the same as the Mimic Controller provided in the box.</p>
                <p>Press “Update” to finish</p>
                <p>Save the UR Installation File (“Save…” > “Save UR Installation File…”</p>
            </div>
            <input class="check" type="checkbox">
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
.wrapper{
    width: 100%;
}

.buttons {
  display: flex;
}

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

</style>