<template>
  <v-app>
    <div style="text-align:center;margin:134px 20px 100px 20px">
        <img class="earn" src="../../assets/images/Earn.svg" />
        <h2 class="sunshineText">You can earn from every sunshine</h2>
        <p class="buySolar">
           By financing solar projects, you can effortlessly earn. See it as a <br/> reward for saving the world from pollution.
        </p>

       

        <!-- the statistics    -->
       <div class="statistics">
        <div class="boxshadow mr-9">
            <img src="../../assets/images/Lightning.svg" />
            <h2 style="font-weight:400;color:#000000;font-size:25px;padding:15px">Energy Generated</h2>
            <div>
             <h2 style="font-size:64px;position:relative;color:#000000">89.7 <div style="font-weight:400;font-size:22px">KWh</div></h2>
            </div>
        </div>


        <div class="boxshadow">
            <img src="../../assets/images/Panel.svg" />
            <h2 style="font-weight:400;color:#000000;font-size:25px;padding:15px">Solar cells at work</h2>
            <div>
             <h2 style="font-size:64px;position:relative;color:#000000">904 <div style="font-weight:400;font-size:22px">Cells</div></h2>
            </div>
        </div>
       </div>


       <div class="d-flex justify-center mb-15 ecosystemText">
           <div>
           <h2>A better & safer eco-system </h2>
           <p>Pollution can be very disturbing to both our health and daily creative flow; and with clean energy, we ensure a calm and powered environment to get you the peak of your creativity.</p>
           </div>
       </div>


       <div class="d-flex mt-15 justify-center ecosystemText">
           <h2>An account that suits you</h2>
     </div>

      <div class="statistics">
        <div class="boxshadowGreen mr-9">
            <img src="../../assets/images/GreenPanel.svg" />
            <h2 style="font-weight:400;color:#000000;font-size:25px;padding:15px">Enterprise Account</h2>
            <div>
             <p style="font-size:18px;position:relative;color:#000000">This is a kind of account for  business owners that wish to power their businesses</p>
           
           <v-btn @click="$router.push('/business/signup')" class="signupButton">Sign up now</v-btn>
           
            </div>
        </div>


        <div class="boxshadowGreen">
            <img src="../../assets/images/Company.svg" />
            <h2 style="font-weight:400;color:#000000;font-size:25px;padding:15px">Solar cells at work</h2>
            <div>
              <p style="font-size:18px;position:relative;color:#000000">This kind enables its users finance solar projects, and earn via ROIs.</p>
           
           <v-btn @click="$router.push('/signup')" class="signupButton mt-9">Sign up now</v-btn>
            </div>
        </div>
       </div>


    </div>
    </v-app>
</template>


<script>


export default({
    data(){
        return{
           
        }
    },
    methods:{
        businessSignup(){
            this.$router.push('/signup')
        }
    }

})

</script>




<style lang="scss">
   .signupButton{
       background:#199958 !important;
       color:white !important;
       padding:25px 40px !important;
       font-size:18px !important;
       margin:20px 0px !important
   }
   .vertical {
            border-left: 2px solid #BDBDBD;
            height: 400px;
            left: 50%;
            margin-top:-10px
        }
    .sunshineText{
        font-weight:700;
        font-size:48px;
        text-align:center;
        color:#000000;
        padding:12px 0px 0px 0px;
        line-height:48px !important
    }
    .boxshadow{
        box-shadow:0px 2px 4px 0px;
        height:502px;
        width:80%;
        vertical-align:middle;
        padding:96px 54px;
        border-radius:10px;
        margin:30px 0px 0px 0px
    }

    .boxshadowGreen{
        height:502px;
        background:rgba(19, 210, 122, 0.09);
        width:80%;
        vertical-align:middle;
        padding:96px 54px;
        border-radius:10px;
        margin:30px 0px 0px 0px
    }

    .ecosystemText{
        margin:30px 0px;
        color:#000000
    }

    .ecosystemText h2{
        font-size:48px;
        font-weight:700;
        line-height: 30px;
        padding:12px 0px
    }

    .ecosystemText p {
        margin:auto;
        width:45%;
        font-size:19px
    }

    @media screen and (max-width:934px){
        .boxshadow{
            width:100%;
           height:50%
        }

           .boxshadowGreen{
        background:rgba(19, 210, 122, 0.09);
         width:100%;
           height:50%
    }

         .sunshineText{
        font-weight:700;
        font-size:36px;
        text-align:center;
        color:#333333;
        line-height:36px !important;
        padding:10px 0px
    }

     .ecosystemText h2{
        font-size:36px;
        font-weight:700;
        line-height: 30px;
        padding:30px 0px
    }

    .ecosystemText p {
        margin:auto;
        width:100% !important;
        font-size:19px
    }
        
    }
</style>