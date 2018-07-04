<template>
  <div id="finish">
      <!-- common -->
        <v-header></v-header>
        <router-view></router-view>
        <v-navbar></v-navbar>
      <!-- end -->

       <div style="margin-top:200px;text-align:center;">finish</div>
  </div>
</template>
 
<script>
import header from "./header";
import navbar from "./navbar";
export default {
  data() {
    return {
      msg: "unfinishe pages content",
      test: "123"
    };
  },

  components: {
    "v-header": header,
    "v-navbar": navbar
  }
};
</script>


<style lang="css" scoped>
@import "../../assets/css/unfinish.css";
</style>

