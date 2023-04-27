<script>
</script>
<template>
<header>
    <div id="pBar">
        <progress id="file" value="50.0" max="100"> 50.0% </progress>
    </div>
</header>
<body class="wrapper">
    <div>
        <h1>How to get the most out of your IR Tracker</h1>
        <p>Below you will find a list of recommendations to get the most out of the tracker.</p>
        <h2>How to get the most out of your IR Tracker</h2>
        <img src="" alt="" width="520" height="200">
        <hr>
        <img src="" alt="" width="520" height="500">
        <div class="buttons">
            <div>
                <router-link 
                    class="backButton" 
                    to="/IrTrackerView"
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
</body>
<footer>
    <footer>
    <div class="Info">
    <div class="HumanSkill">
      <h4>Human skills,</h4>
      <p>machine precision</p>
    </div>
    <div class="Robotics">
      <div><p>We are an AI & robotics company specializied in No Code software for robots within industrial manufactoring</p></div>
      <div class="hej">
        <div class="Robotics email--image"></div>
        <h3>contact@nordbo-robotics.com</h3>
      </div>
      <div class="mo">
        <div class="Robotics phone--image"></div>
        <h3>+45 81 98 81</h3>
      </div>
    </div>
    <div class="social">
      <a class="spriteLink" :href="socialLinkFacebook" target="_blank"></a>
      <a class="spriteLink link--linkedin" :href="socialLinkLinkedin" target="_blank"></a>
      <a class="spriteLink link--twitter" :href="socialLinkTwitter" target="_blank"></a>
      <a class="spriteLink link--instagram" :href="socialLinkInstagram" target="_blank"></a>
    </div>
    </div>
    <div class="copyright">
      <p>Copyright @ Nordbo robotics</p>
    </div>

  </footer>
</footer>
<RouterView />

</template>