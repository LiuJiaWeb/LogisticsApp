<template>


  <div id="register">

    <v-header :headTitle='headTitle' :showState='showState'></v-header>
    
    <router-view></router-view>
      
      <div class="container">

          <div class="input-container">
            <input type="text" placeholder="请输入真实姓名">

            <input type="number" placeholder="请输入手机号">

            <input type="number" placeholder="请输入验证码">

            <input type="password" placeholder="请设置登陆密码">

            <input type="password" placeholder="请再次确认密码">

            <div class="rule">
                <input type="checkbox" class="agree-btn" checked/>
                <p class="agree-text">同意美天到配送员规则</p>
            </div>


            <!-- submit -->
            <router-link to="/center/register_check" class="submit">下一步</router-link>
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
      headTitle: "注册",
      showState:false,
    };
  },

  components: {
    "v-header": header
  }
};
</script>


<style lang="css" scoped>
@import "../../../assets/css/register.css";
</style>

