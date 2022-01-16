<template>
    <v-app>
        <v-sheet color="black" height="730px" width=100%>
            <v-img src="../../assets/images/capture-png 1.png" width=100%>
            <v-sheet style="background:rgba(0, 0, 0, 0.6)" width=100% height=100%>
            <div style="padding:79px;position:absolute;top:5%;width:90%;margin:auto">
            <h2 style="font-size:64px;color:white;width:55%">Earn from generating Sustainable, Reliable & Affordable Energy</h2>
            <p style="font-size:24px" class="white--text">through the financing of solar energy projects.</p>
            <v-btn x-large to="/signup" style="border-radius:16px" class="white--text" color="#199958">See how it works <v-icon>mdi-chevron-right</v-icon></v-btn>
            </div>
            </v-sheet>
            </v-img>
        </v-sheet>
    </v-app>
</template>




<style scoped>
    .banner{
        background-image:url("../../assets/images/capture-png 1.png");
        background-position:cover;
        height:730px;
        width:100%;      
    }

    .gradient{
        background-image: linear-gradient(rgb(0,0,0,0.8)) !important;
    }
</style>