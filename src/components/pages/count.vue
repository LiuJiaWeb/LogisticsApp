<template>
  <div id="count">
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
          <count_1 v-if="defaultTabNum == 0"></count_1>

          <count_2 v-if="defaultTabNum == 1"></count_2>


      </div>


  </div>
</template>
 
<script>
import header from "./header";
import navbar from "./navbar";

import count_1 from "@/components/pages/count_1";
import count_2 from "@/components/pages/count_2";

export default {
  data() {
    return {
      headTitle: "配送统计",
      currentTab: "count_1", //currentTab 用于标识当前触发的子组件
      current: true,
      index:0,

      switchTab:['当月','全部'],
      defaultTabNum:0,
      tabContent:['1','2'],
    };
  },

  components: {
    "v-header": header,
    "v-navbar": navbar,
    "count_1": count_1,
    "count_2": count_2,
  },

  methods: {
    toggleTab: function(index) {
        this.defaultTabNum = index;
    },
  }
};
</script>


<style lang="css">
@import "../../assets/css/count.css";
</style>

