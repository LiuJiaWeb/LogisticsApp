<template>
  <div id="account">
      <!-- common -->
        <v-header :headTitle='headTitle'></v-header>
        <router-view></router-view>
      <!-- end -->
    
    <div class="container">
        <div class="bg" :style="bg">

            <!-- 余额 -->
            <div class="balance-container">
                <p class="p1">余额</p>

                <p class="p2">￥360</p>

                <p class="p3">
                    <router-link to="/center/balance_detail" class="balance-detail">零钱明细</router-link>
                </p>
            </div>
            <!-- end -->

            <!-- 提现 -->
            <router-link to="/" class="with-draw">提现</router-link>
            <!-- end -->

        </div>
        <!-- bg end -->


        <!-- card -->
        <p class="card-title">已绑定银行卡</p>
        <!-- end -->

        <div class="card-item">
            <div class="line"></div>

            <img class="card-img" src="../../../assets/img/center/account/card.png" alt="">

            <p class="card-name">工商银行</p>
            <p class="card-type">储蓄卡</p>
            <p class="card-id">62176 ***** ***** 0214</p>
        </div>

        <div class="card-item">
            <div class="line"></div>

            <img class="card-img" src="../../../assets/img/center/account/card.png" alt="">

            <p class="card-name">工商银行</p>
            <p class="card-type">储蓄卡</p>
            <p class="card-id">62176 ***** ***** 0214</p>
        </div>
    </div>


  </div>
</template>
 
<script>
import header from "../header";

import unfinish_1 from "@/components/pages/unfinish_1";

export default {
  data() {
    return {
      headTitle: "服务星级",
      bg:
        "backgroundImage:url(" +
        require("../../../assets/img/center/account/bg.png") +
        ")"
    };
  },

  components: {
    "v-header": header
  },

  methods: {}
};
</script>


<style lang="css">
@import "../../../assets/css/account.css";
</style>

