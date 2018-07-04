<template>
  <div id="all-order">
      <!-- common -->
        <v-header :headTitle='headTitle'></v-header>
        <router-view></router-view>
      <!-- end -->

      <!-- container -->
        <div class="switchbar">

          <!-- item -->
          <div class="item" 
          v-for="(item,index) in switchTab" 
          @click="toggleTab(index)" 
          :class="{active:index == defaultTabNum}" 
          :key="index">
            {{item}}
          </div>
          <!-- item end -->

        </div>
      <!-- end -->

      <!-- search -->
      <div class="search-container">
        <input class="search" type="text" placeholder="输入关键字...">
      </div>
      <!-- search end -->

      <div class="tabCon">

          <!-- <div v-for="(itemCon,index) in tabContent" :key="index" v-if="index == defaultTabNum">
               
          </div> -->
          <all_order_1 v-if="defaultTabNum == 0"></all_order_1>

          <all_order_2 v-if="defaultTabNum == 1"></all_order_2>


      </div>


  </div>
</template>
 
<script>
import header from "../header";
import navbar from "../navbar";

import all_order_1 from "@/components/pages/center/all_order_1";
import all_order_2 from "@/components/pages/center/all_order_2";

export default {
  data() {
    return {
      headTitle: "我的订单",
      currentTab: "all_order_1", //currentTab 用于标识当前触发的子组件
      current: true,
      index:0,

      switchTab:['全部订单','超时订单'],
      defaultTabNum:0,
      tabContent:['1','2'],
    };
  },

  components: {
    "v-header": header,
    "all_order_1": all_order_1,
    "all_order_2": all_order_2,
  },

  methods: {
    toggleTab: function(index) {
        this.defaultTabNum = index;
    },
  }
};
</script>


<style lang="css">
@import "../../../assets/css/count.css";
</style>

