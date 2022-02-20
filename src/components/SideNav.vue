<template>
    <v-main>
        
      <v-list dense>
         
        <v-list-item
          v-for="item in items"
          :key="item.title"
          active-class="activeLink"
        >
        <v-card :href="item.link" class="d-flex pa-1 px-3 mt-4" width="200px" >
          <v-list-item-icon>
            <v-icon :color="url == item.class ? '#FF7B00':'#006838'">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title :style="{color: url == item.class ? '#FF7B00':'#006838'}">{{item.title}}</v-list-item-title>
          </v-list-item-content>
            </v-card>
        </v-list-item>
      
      </v-list>
  
    </v-main>
</template>



<script>
export default {
    data(){
        return{
        drawer: false,
        items: [
          { title: 'Home', icon: 'mdi-home',link:'dashboard',class:"dashboard" },
          { title: 'Profile', icon: 'mdi-account',link:'profile',class:"profile" },
          { title: 'Projects', icon: 'mdi-lightning-bolt-outline',link:'projects',class:"projects" },
          { title: 'Balance', icon: 'mdi-cash', link:'wallet', class:"wallet"},
          { title: 'History', icon: 'mdi-history', link:'history',class:"history" },
        ],
        mini: false,
        }
    },
     props:{
            url:{
                type:String
            }
        }
}



</script>


<style>

.activeLink{
    background:red;
    color:#FF7B00
}

</style>
