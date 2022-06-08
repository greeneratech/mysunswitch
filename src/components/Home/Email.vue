<template>
     <div class="community text-center">

       <h2>Join the <span style="color:#199958">Greenera</span> community</h2>
       <p>Together is stronger and Better. Our facebook channel surrounds you with other world enhancers of like minds, who can help you along your journey to make the world a better place with tips & support. It’s totally free and open to new and existing users, regardless of the kind of account you hold.</p>
       <v-btn to="/signup" class="communitybtn">Join our community </v-btn>
       
       <!-- <v-row class="hidden-md-and-down" style="width:80%;margin:90px auto 90px auto;">
          <v-col lg=6 md=6>
          <div >
              <h2 style="font-size:40px;color:#FF7B00">We can notify you</h2>
              <p style="width:80%">Let us send you a mail once there is an ongoing crowdsale that might interest you.</p>
          </div>
          </v-col>
          <v-col  lg=6 md=6>
          <div class="d-flex">
            <v-text-field label="Enter your email" style="color:#FF7B00;height:70px" color="#FF7B00" outlined placeholder="Enter your email"/>
           <v-btn class="rounded-lg ml-3"  x-large color="#FF7B00">Subscribe</v-btn>
          </div>
          <div>
          </div>
          </v-col>
        </v-row> 

        <v-row class="hidden-lg-and-up" style="width:80%;margin:90px auto 90px auto">
          <div>
              <h2 style="font-size:40px;color:#FF7B00">We can notify you</h2>
              <p style="width:80%">Let us send you a mail once there is an ongoing crowdsale that might interest you.</p>
          </div>
          <div style="width:80%">
            <v-text-field label="Enter your email" style="border-radius:10px;color:#FF7B00;height:70px;width:100%" color="#FF7B00" outlined placeholder="Enter your email"/>
           <v-btn class="rounded-lg"  x-large color="#FF7B00">Subscribe</v-btn>
          </div>
        </v-row>   -->

        </div>
</template>




<style scoped>
.community{
  margin:0px 20px 90px  20px
}

.community h2{
  color:black;
  font-size:35px;
  line-height:35px
}

.community p{
  margin:10px 0px;
  color:black;
  font-size:17px;
  line-height:25px
}

@media screen and (min-width:900px){
  .community p{
  margin:10px auto;
  color:black;
  font-size:17px;
  line-height:25px;
  width:50%
}
}

.communitybtn{
  color:white;
  font-weight:600;
  font-size:17px;
  background:#FF7B00 !important;
  padding:23px 40px !important;
  border-radius:10px;
  margin:20px 0px
}
</style>