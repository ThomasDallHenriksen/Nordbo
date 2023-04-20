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
            <div>
                <h1>UR Preperation</h1>
                <p>In this course you will learn how to prepare robots from Universal Robots (UR) using Mimic</p>
                <h1>What you need prior to Mimic installation</h1>
                <p>-HD ready touch screen (22" is recommended) or HD ready screen with mouse and keyboard</p>
                <p>-Gigabit switch (optional - needed if connecting other hardware to the robot)</p>
                <p>-ethernet cables long enough to reach from your teaching to the robot </p>
            </div>
            <br>
            <div id="split">
                <div>
                    <p>Mimic is compatible with Universal Robots' Ployscope version: </p>
                    <p>- CB Series: 3.14.3 or newer</p>
                    <p>- eSeries: 5.9.4 or newer</p>
                    <p>Mimic is compatible with all UR robots models</p>
                </div>
                <div>
                    <img src="" alt="" width="320" height="300">
                </div>
            </div>
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
                    to="/UrSetupView"
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
<style>
#split{
    display: flex;
}
</style>