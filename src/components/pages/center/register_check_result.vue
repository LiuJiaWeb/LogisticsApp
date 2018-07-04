<template>


  <div id="login">

    <v-header :headTitle='headTitle' :showState='showState'></v-header>
    
    <router-view></router-view>
      
    <!-- container -->
      <div class="container">
          <!-- logo -->
          <div class="logo">
              <img src="../../../assets/img/common/logo.png" alt="">
          </div>
          <!-- logo end -->

            <!-- 结果通知 -->
          <div class="result">
              {{register_result}}
          </div>
          <!-- 结果通知 -->
      </div>
      <!-- end -->

  </div>
</template>
 
<script>
import header from "../header";

export default {
  name:'Check_Result',
  data() {
    return {
      headTitle: "审核状态",
      register_result:'您的注册资料正在审核中...',
      showState: false,
    };
  },

  components: {
    "v-header": header
  }
};
</script>


<style lang="css" scoped>
@import "../../../assets/css/register_check_result.css";
</style>

