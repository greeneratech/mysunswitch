<template>
    <v-card tile elevation="12" class="pa-4">
      <div class="d-flex justify-space-between">
          <div>
          <v-img style="margin-left:65.6px" height="69px" width="69px" src="../../assets/images/Rectangle (3).png"/>
          </div>
          <div class="mt-3"> 
            <v-btn text>SERVICES</v-btn>
             <v-btn text>PROJECTS</v-btn>
              <v-btn text>ABOUT US</v-btn>
         </div>

          <div style="margin-right:48px;margin-top:10px"> 
            <v-btn to="/signup" color="#FF7B00">Sign up</v-btn>
             <v-btn to="/login" color="#006838" class="ml-3 white--text">Sign in</v-btn>
         </div>
      </div>
    </v-card>
</template>