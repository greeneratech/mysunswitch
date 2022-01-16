<template>
  <v-app>
    <div style="text-align:center;margin-bottom:100px">
        <h2 style="color:#FF7B00;font-weight:800;padding:90px;line-height:80px;font-size:65px;width:70%;margin:auto auto 50px auto" class="text-center">You can earn from every drop of sunshine</h2>
        <img src="../../assets/images/image 1.png" />
        <p style="font-size:20px;width:60%;margin:auto auto 40px auto">
            buy solar cells that powers (large/small scale) businesses & organisations, and hereby earn from the pure & safe electricity generated.
        </p>

       <v-btn x-large style="border-radius:16px" class="white--text" color="#199958">
           Sign Up <v-icon>mdi-chevron-right</v-icon>
           </v-btn>

        <!-- the statistics    -->
       <div class="d-flex justify-space-between" style="margin-top:180px;width:50%;margin:auto">

        <div style="margin-top:60px">
            <h2 style="color:#828282;font-size:25px;padding-bottom:30px">Energy <br/>Generated</h2>
            <div style="box-shadow:0px 2px 4px 0px;border:solid 6px #FF7B00;height:170px;width:170px;border-radius:50%">
             <h2 style="position:relative;top:40%;color:#FF7B00">117 KWh</h2>
            </div>
        </div>

        <div style="margin-top:40px">
            <div class = "vertical"></div>
        </div>

        <div style="margin-top:60px">
            <h2 style="color:#828282;font-size:25px;padding-bottom:30px">Solar Cells <br/>at Work</h2>
            <div style="box-shadow:0px 2px 4px 0px;border:solid 6px #FF7B00;height:170px;width:170px;border-radius:50%">
             <h2 style="position:relative;top:40%;color:#FF7B00">786</h2>
            </div>
        </div>


       </div>
    </div>
    </v-app>
</template>



<style lang="scss">
   .vertical {
            border-left: 2px solid #BDBDBD;
            height: 400px;
            left: 50%;
            margin-top:-10px
        }
</style>