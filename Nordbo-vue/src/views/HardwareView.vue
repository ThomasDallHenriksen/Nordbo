<script setup>
</script>

<template>
    <header>
      <div id="pBar">
          <progress id="file" value="11.1" max="100"> 11.1% </progress>
      </div>
    </header>
    <body>
      
      <div class="wrapper">
        
      <h1>Welcome to the Mimic Guide</h1>
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
          <iframe src="https://youtu.be/eeD26XRyqDE" width="750" height="400"></iframe>
        </div>
        <div class="buttons">
        <div>
          <router-link 
            class="backButton" 
            to="/"
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
          <router-link 
            class="nextButton"
            to="/ControllerView"
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
    justify-content: center;
    padding: 20px;
  }
  header{
    position: fixed;
    top: 0;
    z-index: 1;
    width: 735px;
  }

    h1{
      font-weight: bold;
      font-size: 24px;
      text-align: center;
    }
    h2{
      font-weight: ;
    }
  
  .backButton{
  border: green;
}
#backButton{
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    font-size: 21px;
    border: solid 2px #1ec794;
    background: #ffffff;
    color: #1ec794;
    padding-left: 15px;
    padding-right: 15px;
    margin-right: 40px;
}
#nextButton{
  border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    font-size: 21px;
    border: solid 2px #1ec794;
    background: #1ec794 ;
    color: #ffffff;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: 40px;
}
  
</style>