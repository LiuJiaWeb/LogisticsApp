<template>
    <div id="reset_password">
    <v-header :headTitle='headTitle' :showState='showState'></v-header>
    
    <router-view></router-view>

      <!-- container -->
        <div class="container">

            <div class="input-container">

                <input type="number" placeholder="请输入手机号码">

                <input type="number" placeholder="请输入验证码">

                <input type="number" placeholder="请输入新密码">

                <input type="number" placeholder="请重复输入新密码">
            </div>

            <div class="submit">找回密码</div>




        </div>
        <!-- end -->
    </div>
</template>
 
<script>
import header from "../header";

export default {
  name: "Reset_Password",
  data() {
    return {
      headTitle: "找回密码",
      showState: true,
    };
  },

  components: {
    "v-header": header
  }
};
</script>


<style lang="css" scoped>
@import "../../../assets/css/reset_password.css";
</style>

