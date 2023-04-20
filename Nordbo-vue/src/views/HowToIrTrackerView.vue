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
                    >
                    Next
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</body>
<footer>
</footer>
<RouterView />

</template>