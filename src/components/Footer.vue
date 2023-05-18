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
background-color: #02215c;
width: 100%;
height: 10rem;
}

.Info .HumanSkill #humanCentered {
text-align: left;
font-family: Helvetica;
padding-left: 32%;
font-size: 1vw;
}

.Info .Robotics .email-icon{
display: flex;
}

.Info .Robotics .phone-icon{
display: flex;
}

.Info .Robotics .email-icon h3,
.Info .Robotics .phone-icon h3 {
font-family: Helvetica;
}

.Info .Robotics .email-icon .email--image{
background-image: url('@/assets/images/iconsprite.png') ;
background-position: -182px -20px;
width: 60px;
height: 30px;
color: #ffffff;
display: flex;
}

.Info .Robotics .phone-icon .phone--image{
background-image: url('@/assets/images/iconsprite.png') ;
background-position: -238px -20px;
width: 60px;
height: 30px;
color: #ffffff;
display: flex;
}

.Info .social .spriteLink {
display: inline-block;
background-position: -308px -87px;
width: 60px;
height: 60px;
background-image: url('@/assets/images/iconsprite.png');
margin-top: 10%;
}

.Info .social .spriteLink.link--linkedin {
background-position: -373px -87px;
}

.Info .social .spriteLink.link--twitter {
background-position: -435px -87px;
}

.Info .social .spriteLink.link--instagram {
background-position: -491px -87px;
}

.Info .copyright p {
color: white;
font-size: 1.2rem;
text-align: center;
}
</style>