<template>
  <div id="center">
      <!-- common -->
        <v-header :headTitle='headTitle'></v-header>
        <router-view></router-view>
        <v-navbar></v-navbar>
      <!-- end -->
      

      <!-- container -->
      <div class="container">

        <!-- user-info -->
        <div class="user-info">

            <div class="info">
              <!-- 头像 -->
              <div class="avatar">
                <img src="../../assets/img/center/avatar.png" alt="">
              </div>
              <!-- end -->

              <!-- userName -->
              <div class="user-name">
                  <div class="name">配送员</div>
                  <router-link to="/center/star" class="star">
                    <span class="star-text">服务星级</span>
                  </router-link>
              </div>
              <!-- end -->
            </div>


            <!-- money -->
            <router-link to="/center/account" class="money">
              <p class="balance">￥6000</p>
              <p class="account">账户</p>
            </router-link>

            <!-- end -->



            <div class="wave">
              <img src="../../assets/img/center/wave.png" alt="">
            </div>
        </div>
        <!-- end -->

        <!-- online -->
        <div class="wrap-container online">
            <div class="online-text">是否上线</div>
        </div>
        <!-- end -->

        <!-- order -->
        <div class="wrap-container order">
            <div class="title">我的订单</div>

            <router-link to="/center/all_order" class="content">
                <div class="item">
                    <div class="icon" :style="orderBg"></div>
                    <p class="des">全部订单</p>
                </div>
            </router-link>

        </div>
        <!-- end -->


        <!-- service -->
        <div class="wrap-container service">
            <div class="title">我的服务</div>

            <div class="content">
                <div class="item">
                    <div class="icon" :style="cardBg"></div>
                    <p class="des">绑定银行卡</p>
                </div>

                <div class="item">
                    <div class="icon" :style="areaBg"></div>
                    <p class="des">区域划分</p>
                </div>

                <div class="item">
                    <div class="icon" :style="inviteBg"></div>
                    <p class="des">邀请</p>
                </div>

                <div class="item">
                    <div class="icon" :style="settingBg"></div>
                    <p class="des">设置</p>
                </div>

            </div>

        </div>
        <!-- end -->


      </div>
      <!-- end -->

      
  </div>
</template>
 
<script>
import header from "./header";
import navbar from "./navbar";
export default {
  data() {
    return {
      headTitle: "我的",
      orderBg: {
        backgroundImage:
          "url(" + require("../../assets/img/center/order.png") + ")"
      },

      cardBg: {
        backgroundImage:
          "url(" + require("../../assets/img/center/card.png") + ")"
      },

      areaBg: {
        backgroundImage:
          "url(" + require("../../assets/img/center/area.png") + ")"
      },

      inviteBg: {
        backgroundImage:
          "url(" + require("../../assets/img/center/invite.png") + ")"
      },

      settingBg: {
        backgroundImage:
          "url(" + require("../../assets/img/center/setting.png") + ")"
      }
    };
  },

  components: {
    "v-header": header,
    "v-navbar": navbar
  }
};
</script>


<style lang="css" scoped>
@import "../../assets/css/center.css";
</style>

