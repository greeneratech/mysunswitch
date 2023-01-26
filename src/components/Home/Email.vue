<template>
  <div class="community text-center">
    <h3>Frequently Asked Questions</h3>
    <p>We know you have questions, and we have answers to most of them. Check out our FAQs for more information.</p>
    <v-btn to="/faq" class="communitybtn">FAQs</v-btn>
  </div>
</template>

<style scoped>
.community{
  margin:2rem 1rem;
}

.community h3 {
  color:black;
  font-size:35px;
  line-height:35px
}

.community p {
  margin:10px 0px;
  color:black;
  font-size:17px;
  line-height:25px
}

@media screen and (min-width:900px) {
  .community p {
  margin:10px auto;
  color:black;
  font-size:17px;
  line-height:25px;
  width:50%
}
}

.communitybtn {
  color:white;
  font-weight:600;
  font-size:17px;
  background:#FF7B00 !important;
  padding:23px 40px !important;
  border-radius:10px;
  margin:20px 0px
}
</style>
