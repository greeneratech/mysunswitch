<template>
    <v-main>
        
      <v-list dense>
         
        <v-list-item
          v-for="item in items"
          :key="item.title"
          active-class="activeLink"
        >
        <v-card :href="item.link" class="d-flex justify-center pa-1 px-3 mt-4" width="300px" height="60px" >
          <v-list-item-icon>
            <v-icon class="mt-4" :color="url == item.class ? '#FF7B00':'#006838'">{{ item.icon }}</v-icon>
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
          { title: 'Manage Users', icon: 'mdi-account-cog',link:'dashboard',class:"admin/dashboard" },
          { title: 'Manage Projects', icon: 'mdi-lightning-bolt',link:'projects',class:"admin/projects" },
          { title: 'View Payments', icon: 'mdi-cash', link:'payments', class:"admin/payments"},
          { title: 'Manage FAQs', icon: 'mdi-frequently-asked-questions', link:'faqs',class:"admin/faqs" },
          { title: 'Manage Disclaimers', icon: 'mdi-file-table-box-multiple-outline', link:'disclaimers',class:"admin/disclaimers" },
          { title: "Manage T & C's", icon: 'mdi-file-cog-outline', link:'t-and-c',class:"admin/t-and-c" },
          { title: 'Update Team Details', icon: 'mdi-account-multiple-plus-outline', link:'team',class:"admin/team" },
          { title: 'Manage Bank Account', icon: 'mdi-cash-multiple', link:'bank',class:"admin/bank" },
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
