<template>
    <footer class="Info">
      <div class="Info">
        <div class="HumanSkill">
          <h4 id="humanCentered">Human skills,</h4>
          <p id="humanCentered">machine precision.</p>
        </div>
        <div class="Robotics">
          <div><p>We are an AI & robotics company specialized in No Code software for robots within industrial manufacturing</p></div>
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
  </template>
  
  <script>
  export default {
    name: 'Footer',
    data() {
      return { 
        socialLinkFacebook: 'https://www.facebook.com/nordborobotics/?locale=da_DK',
        socialLinkLinkedin: 'https://www.linkedin.com/company/nordbo-robotics/?originalSubdomain=dk',
        socialLinkTwitter: 'https://twitter.com/nordborobotics?lang=da',
        socialLinkInstagram: 'https://www.instagram.com/nordbo_robotics/?hl=da'
      }
    }
  }
  </script>
  
  <style scoped>
  .Info {
    background-color: green;
    width: 100%;
    height: 10rem;
  }
  
.spriteLink{
  display: inline-block;
  background-position: -308px -87px;
  width: 60px;
  height: 60px;
  background-image: url('@/assets/images/iconsprite.png');
  margin-top: 20%;
}

.link--linkedin{
  background-position: -373px -87px;
}

.link--twitter{
  background-position: -435px -87px;
}

.link--instagram{
  background-position: -491px -87px;
}

#banner-h1{
  color: white;
  font-size: 3.1rem;
  font-family: Helvetica;
  margin-top: -6%;
  font-size: 4vw;
}

#h1Bold{
  font-weight: bold;
}

#h1Title{
  margin-top: 1%;
  font-size: 2vw;
}

#pDesrciption{
  font-family: Helvetica;
  text-align: center;
  margin-top: 1%;
  font-size: 1.5vw;
  padding: 0 8.2rem 0 8.2rem !important;
  line-height: 1.1;
}

#h2Description{
  text-align: center;
  font-weight: bold;
  margin-top: 2%;
  font-family: Helvetica;
  font-size: 2vw;
}

#humanCentered{
  text-align: left;
  font-family: Helvetica;
  padding-left: 32%;
  font-size: 1vw;
}

.banner{
  width: 100%;
  opacity: 34%;
  height: auto;
}



  </style>
  