<template>


  <div id="register">

    <!-- <v-header :headTitle='headTitle'></v-header> -->
    
    <router-view></router-view>
      
      <div class="container">

          <div class="input-container">
            <input class="info" type="text" placeholder="请选择证件类型">

            <input class="info" type="number" placeholder="请输入证件号码">

            <!-- 身份证图片上传 -->
            <div class="id-card">
                <p class="title">身份证正反面照片</p>
                <div class="img-container">
                    <input type="file">
                    <input type="file">
                </div>
            </div>
            <!-- 身份证图片上传 -->


            <!-- submit -->
            <router-link to="/center/register_check_result" class="submit">提交</router-link>
            <!-- end -->

            
          </div>
      </div>

  </div>
</template>
 
<script>
import header from "../header";

export default {
  name: "Register",
  data() {
    return {
     // headTitle: "审核"
    };
  },

  components: {
    "v-header": header
  }
};
</script>


<style lang="css" scoped>
@import "../../../assets/css/register_check.css";
</style>

