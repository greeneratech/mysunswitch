<template>
    <v-sheet color="#f2f2f2" class="pa-5">
        <h2 style="text-align:center;color:#828282;font-size:40px">Projects</h2>
  <v-sheet
    class="mx-auto"
    max-width="800"
    color="#f2f2f2"
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      center-active
      show-arrows
    >
      <v-slide-item
        v-for="n in 15"
        :key="n"
        v-slot="{ toggle }"
      >
        <v-card
          :color="'grey lighten-1'"
          class="ma-4"
          height="300"
          width="230"
          @click="toggle"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-scale-transition>
              
            </v-scale-transition>
            <v-btn style="position:absolute;bottom:0;right:0;margin:20px" outlined small class="rounded-circle py-6" color="black">
                <v-icon>mdi-play</v-icon>
            </v-btn>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
  </v-sheet>
</template>




<script>
  export default {
    data: () => ({
      model: null,
    }),
  }
</script>