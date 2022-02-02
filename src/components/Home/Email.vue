<template>
     <div>
       <v-row class="hidden-md-and-down" style="width:80%;margin:90px auto 90px auto;">
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
        </v-row>  

        </div>
</template>