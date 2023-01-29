<template>
  <li>
    <div>
      <div class="head">{{ head }}</div>
      <div class="body">{{ body }}</div>
      <img :src="imgSrc" :alt="head" width="300" height="300" />
    </div>
  </li>
</template>

<script>
export default {
  props: {
    head: String,
    body: String,
    imgSrc: String,
  },

  data() {
    return {
        
    };
  },
};
</script>

<style scoped>
li {
  width: 100%;
  padding: 0.5rem 0 2rem;
}

li > div {
  border-radius: 1rem;
  border: 1px solid #FF7B00;
}

.head {
  font-weight: 700;
  font-size: larger;
  padding: 0.5rem 0.5rem 0;
}

.body {
  padding: 0.5rem;
}

img {
  width: 100%;
  display: block;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
}

@media screen and (min-width: 934px) {
  li {
    width: 50%;
    padding: 0.5rem;
  }
}
</style>
