<template>
  <div id="star">
      <!-- common -->
        <v-header :headTitle='headTitle'></v-header>
        <router-view></router-view>
      <!-- end -->

    <div class="container">
        <!-- bg -->
        <div class="bg" :style="bg"></div>
        <!-- bg end -->


        <p class="my-star">评价平均星级</p>

        <p class="my-score">4.96</p>

        <p class="my-des">再来10次5星评价</p>

        <p class="my-lev">您的星级可升为5星</p>


        <!-- 平均星级、排名 -->
        <div class="total-lev">
            <div class="lev-item">
                <p class="p1">4.95</p>
                <p class="p2">平均星级</p>
            </div>

            <div class="lev-item">
                <p class="p1">20%</p>
                <p class="p2">您当前的排名</p>
            </div>
        </div>
        <!-- end -->


        <!-- 您的认证 -->
        <div class="my-honor">
            <p class="title">您的认证</p>
            

            <!-- 配送员数据评价 -->
            <div class="data">

                <!-- item -->
                <div class="data-item">
                    <div class="row1">
                        <div class="data-bar">
                            <div class="data-now"></div>
                        </div>
                        <p class="data-text">40%</p>
                    </div>

                    <div class="row2">到达速度快</div>
                </div>
                <!-- end -->

                <!-- item -->
                <div class="data-item">
                    <div class="row1">
                        <div class="data-bar">
                            <div class="data-now"></div>
                        </div>
                        <p class="data-text">50%</p>
                    </div>

                    <div class="row2">热情有礼貌</div>
                </div>
                <!-- end -->


                <!-- item -->
                <div class="data-item">
                    <div class="row1">
                        <div class="data-bar">
                            <div class="data-now"></div>
                        </div>
                        <p class="data-text">95%</p>
                    </div>

                    <div class="row2">商品完整</div>
                </div>
                <!-- end -->

                <!-- item -->
                <div class="data-item">
                    <div class="row1">
                        <div class="data-bar">
                            <div class="data-now"></div>
                        </div>
                        <p class="data-text">75%</p>
                    </div>

                    <div class="row2">穿着整齐</div>
                </div>
                <!-- end -->


            </div>
            <!-- end -->
        </div>
        <!-- end -->
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
        require("../../../assets/img/center/star/bg.png") +
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
@import "../../../assets/css/star.css";
</style>

