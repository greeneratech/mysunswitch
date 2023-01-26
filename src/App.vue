<template>
  <div id="app">
    <router-view :key="$route.fullPath"/>
  </div>
</template>


<script>
import { unslugify } from "unslugify"
export default {
  name: 'App',
  components: {
  },
  data: () => ({
    //
  }),
  computed:{
   pageTitle() {
      return unslugify(this.$route.params.id ?? '');
    },
  },
 metaInfo() {
    return {
      title: this.pageTitle,
      titleTemplate: "%s | Greenera",
      meta: [
        {
          name: "description",
          content:
            "Invest in Solar energy devices"
        },
        {
          property: "og:title",
          content:this.pageTitle + "| Greenera"
        },
        { property: "og:site_name", content: "Greenera" },
        {
          property: "og:description",
          content:
            "Invest in Solar energy devices"
        },
        { property: "og:type", content: "profile" },
        {
          property: "og:url",
          content: "https://greeneratech.com"
        },
        { property: "og:image", content: "" }
      ]
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.v-btn{
  text-transform: none !important;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.sr-only {
  top: -100%;
  position: absolute;
}
</style>
