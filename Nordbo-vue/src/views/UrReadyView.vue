<script>
</script>
<template>
    <header>
        <div id="pBar">
        <progress id="file" value="100.0" max="100"> 100.0% </progress>
    </div>
    </header>
    <div class="wrapper">
        <div id="icon">
            <a href="/"><img  src="../assets/images/cross.png" alt="" width="40" height="40"></a>
        </div>
        <div>
            <h1>Your UR robot is now ready to use Mimic.</h1>
        </div>
        <div class="buttons">
        <div>
          <router-link 
            class="backButton" 
            to="/UrMainView"
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
            to="/NachiMimicView"
            custom
            v-slot="{ navigate }"
          >
            <button
              @click="navigate"
              role="link"
              id="nextButton"
            >
              Next Lesson
            </button>
          </router-link>
        </div>
    </div>
</div>
<footer>
    <div class="Info">
    <div class="HumanSkill">
      <h4 id="humanCentered">Human skills,</h4>
      <p id="humanCentered">machine precision</p>
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
    <RouterView />
</template>

<style>
#icon{
    display: flex;
    justify-content: flex-end;
}
</style>