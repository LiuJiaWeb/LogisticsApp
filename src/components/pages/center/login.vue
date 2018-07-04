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

          <!-- 账号密码输入 -->
           <div class="auth">
               <input class="mobile" type="number" placeholder="请输入账号">
               <input class="password" type="password" placeholder="请输入密码">
           </div>
          <!-- end -->


          <!-- 点击注册/找回密码 -->
            <div class="tool">
                <router-link to="/center/register" class="tool-item register">立即注册</router-link>
                <router-link to="/center/reset_password" class="tool-item reset">找回密码</router-link>
            </div>
          <!-- end -->

          <!-- 登陆按钮 -->
            <router-link to="/unfinish" class="submit">登陆</router-link>
          <!-- end -->
      </div>
      <!-- end -->

  </div>
</template>
 
<script>
import header from "../header";

export default {
  name:'Login',
  data() {
    return {
      headTitle: "登录",
      showState: true,

    };
  },

  components: {
    "v-header": header
  }
};
</script>


<style lang="css" scoped>
@import "../../../assets/css/login.css";
</style>

