<script>
  export default {
    name: 'Banner',
  }
</script>

<template>
    <div class="container">
    <img class="banner" src="../assets/images/Nordbo-banner.png" alt="" width="1216" height="200" aria-placeholder="Welcome to the Mimic Guide">
        <div class="banner-text">
            <h1 id="banner-h1">Mimic Guide</h1>
        </div>
    </div> 
</template>

<style scoped>
header{
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100px;
  text-align: center;
}

.container{
  background-color: #02215c;
  opacity: 1.2;
  height: 11rem;
  width: 100%;
}

.banner{
  opacity: 34%;
  width: 100%;
  height: 11rem;
}

.banner-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
} 

#banner-h1{
  color: white;
  font-size: 3.1rem;
  font-family: Helvetica;
  margin-top: -6%;
  font-size: 4vw;
}
</style>