<template>
  <div id="unfinish">
      <!-- common -->
        <v-header :headTitle='headTitle'></v-header>
        <router-view></router-view>
        <v-navbar></v-navbar>
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
          <unfinish_1 v-if="defaultTabNum == 0"></unfinish_1>

          <unfinish_2 v-if="defaultTabNum == 1"></unfinish_2>

          <unfinish_3 v-if="defaultTabNum == 2"></unfinish_3>

          <unfinish_4 v-if="defaultTabNum == 3"></unfinish_4>

      </div>


  </div>
</template>
 
<script>
import header from "./header";
import navbar from "./navbar";

import unfinish_1 from "@/components/pages/unfinish_1";
import unfinish_2 from "@/components/pages/unfinish_2";
import unfinish_3 from "@/components/pages/unfinish_3";
import unfinish_4 from "@/components/pages/unfinish_4";

export default {
  data() {
    return {
      headTitle: "订单",
      currentTab: "unfinish_1", //currentTab 用于标识当前触发的子组件
      current: true,
      index:0,

      switchTab:['未取货','配送中','已完成','已关闭'],
      defaultTabNum:0,
      tabContent:['1','2','3','4'],
    };
  },

  components: {
    "v-header": header,
    "v-navbar": navbar,
    "unfinish_1": unfinish_1,
    "unfinish_2": unfinish_2,
    "unfinish_3": unfinish_3,
    "unfinish_4": unfinish_4,
  },

  methods: {
    toggleTab: function(index) {
        this.defaultTabNum = index;
    },
  }
};
</script>


<style lang="css">
@import "../../assets/css/unfinish.css";
</style>

