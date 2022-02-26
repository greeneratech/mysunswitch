<template>
    <v-app style="background:#006838">
        <v-main class="hidden-md-and-down" style="margin:auto;width:80%;padding:70px">
           <v-row style="margin-bottom:80px">
               <v-col>
                   <p class="white--text font-weight-bold">SERVICES</p>
                   <p class=""><router-link class="routerLink" to="/signup">Service 1</router-link></p>
                   <p><router-link class="routerLink" to="/login">Service 2</router-link></p>
               </v-col>

               <v-col>
                   <p class="white--text font-weight-bold">PROJECTS</p>
                   <p class=""><router-link class="routerLink" to="/signup">Recent</router-link></p>
                   <p><router-link class="routerLink" to="/login">Ongoing</router-link></p>
               </v-col>

               <v-col>
                    <p class="white--text font-weight-bold">ABOUT US</p>
                   <p class=""><router-link class="routerLink" to="/signup">Meet the Team</router-link></p>
                   <p><router-link class="routerLink" to="/login">Our Story</router-link></p>
               </v-col>

               <v-col>
                   <p class="white--text font-weight-bold">T’s & C’s</p>
                   <p class=""><router-link class="routerLink" to="/signup">Privacy Policy</router-link></p>
                   <p><router-link class="routerLink" to="/login">Terms of Use</router-link></p>
               </v-col>
            </v-row>
            <hr/>
            <div style="text-align:center;padding:100px;margin:auto">
                <v-btn x-large icon class="mr-15">
                <v-icon x-large class="white--text">mdi-twitter</v-icon>
                </v-btn>

                <v-btn x-large icon class="mr-15">
                <v-icon x-large class="white--text">mdi-instagram</v-icon>
                </v-btn>

                <v-btn x-large icon class="mr-15">
                <v-icon x-large class="white--text">mdi-linkedin</v-icon>
                </v-btn>

                <v-btn x-large icon class="mr-15">
                <v-icon x-large class="white--text">mdi-facebook</v-icon>
                </v-btn>
                
            </div>
            <div class="d-flex justify-space-between" style="width:96%;margin:auto">
                <h2 class="text-xl white--text"><v-icon x-large class="white--text">mdi-phone</v-icon> +234 703 377 1639, +234 816 553 3706</h2>

                 <h2 class="white--text"><v-icon x-large class="white--text">mdi-email</v-icon> greeneratech@gmail.com</h2>
            </div>
        </v-main>

        <v-main style="margin-top:90px" class="hidden-lg-and-up mx-auto">
            <div class="text-center mb-9">
             <p style="font-size:20px" class="white--text font-weight-bold">SERVICES</p>
              <p style="font-size:20px" class="white--text font-weight-bold">PROJECTS</p>
               <p style="font-size:20px" class="white--text font-weight-bold">ABOUT US</p>
                <p style="font-size:20px" class="white--text font-weight-bold">T'S & C'S</p>
                </div>
                 <hr/>
            <div style="text-align:center;padding:30px;margin:auto">
                <v-btn  icon>
                <v-icon class="white--text">mdi-twitter</v-icon>
                </v-btn>

                <v-btn  icon>
                <v-icon class="white--text">mdi-instagram</v-icon>
                </v-btn>

                <v-btn  icon>
                <v-icon class="white--text">mdi-linkedin</v-icon>
                </v-btn>
                <v-btn icon>
                <v-icon class="white--text">mdi-facebook</v-icon>
                </v-btn>
                </div>

                <div class="text-center">
                <p class="white--text mb-3"><v-icon class="white--text">mdi-phone</v-icon> +234 703 377 1639, +234 816 553 3706</p>

                 <p class="white--text"><v-icon class="white--text">mdi-email</v-icon> greeneratech@gmail.com</p>
            </div>
            <div class="hidden-md-and-up" style="padding:20px;margin:0px 00px 0px 0px;position:absolute;background:white;bottom:0;width:100%">
                <div style="margin:auto;width:20%">
                <img  src="../../assets/images/Greenera_logo_svg.svg"/>
                </div>
            </div>
        </v-main>
    </v-app>
</template>



<style lang="scss">
.routerLink{
    color:white !important;
    text-decoration:none !important
}
</style>