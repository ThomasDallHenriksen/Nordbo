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

<template>
      <div class="Info">
        <div class="HumanSkill">
          <h4 id="humanCentered">Human skills,</h4>
          <p id="humanCentered">machine precision.</p>
        </div>
        <div class="Robotics">
          <div><p>We are an AI & robotics company specialized in No Code software for robots within industrial manufacturing</p></div>
          <div class="email-icon">
            <div class="Robotics email--image"></div>
            <h3>contact@nordbo-robotics.com</h3>
          </div>
          <div class="phone-icon">
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
</template>

<style scoped>
.Info {
  background-color: #02215c;
  width: 100%;
  height: 10rem;
  padding-top: 3%;
  height: 90%;
  display: flex;
}

.Info .HumanSkill #humanCentered {
  text-align: left;
  font-family: Helvetica;
  padding-left: 32%;
  font-size: 1.2rem;
}
.Info .HumanSkill{
  width: 24%;
  color: #ffffff;
  font-weight: bold;
}
.Info .Robotics{
  width: 52%;
  color: #7ac1e5;
  font-size: 1rem;
}
.Info .social{
  width: 24%;
}
.Info .Robotics .email-icon{
  display: flex;
  color: white;
  font-size: 1rem;
}
.Info .Robotics .phone-icon{
  display: flex;
}
.Info .Robotics .phone-icon h3{
  color: #78bfe2;
}
.Info .Robotics .phone-icon h3 {
  font-family: Helvetica;
  font-size: 1rem;
}

.Info .Robotics .email-icon .email--image{
  background-image: url('@/assets/images/iconsprite.png') ;
  background-position: -11.37rem -1.25rem;
  width: 3.75rem;
  height: 1.87rem;
  color: #ffffff;
  display: flex;
}

.Info .Robotics .phone-icon .phone--image{
  background-image: url('@/assets/images/iconsprite.png') ;
  background-position: -14.87rem -1.25rem;
  width: 3.75rem;
  height: 1.87rem;
  color: #ffffff;
  display: flex;
}

.Info .social .spriteLink {
  display: inline-block;
  background-position: -19.25rem -5.43rem;
  width: 3.75rem;
  height: 3.75rem;
  background-image: url('@/assets/images/iconsprite.png');
  margin-top: 10%;
}

.Info .social .spriteLink.link--linkedin {
  background-position: -23.31rem -5.43rem;
}

.Info .social .spriteLink.link--twitter {
  background-position: -27.18rem -5.43rem;
}

.Info .social .spriteLink.link--instagram {
  background-position: -30.68rem -5.43rem;
}

.copyright {
  width: 100%;
  background-color: #071e4b;
  height: 1.9rem;
}

.copyright p {
  color: #75bcdf;
  font-size: 1rem;
  padding-left: 7.7vw;
}
</style>
  