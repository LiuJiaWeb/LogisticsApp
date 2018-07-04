<template>
  <div id="balance_detail">
      <!-- common -->
        <v-header :headTitle='headTitle'></v-header>
        <router-view></router-view>
      <!-- end -->

      <div class="container">

          <!-- item -->
            <div class="detail-item">
                <div class="info">
                    <div class="p1">美天到配送</div>
                    <div class="p2">
                        <span class="date">2017-06-23</span>
                        <span class="time">12:35</span>
                    </div>
                </div>

                <div class="money">+ 12.00</div>
            </div>
          <!-- end -->


          <!-- item -->
            <div class="detail-item">
                <div class="info">
                    <div class="p1">美天到配送</div>
                    <div class="p2">
                        <span class="date">2017-06-23</span>
                        <span class="time">12:35</span>
                    </div>
                </div>

                <div class="money">+ 12.00</div>
            </div>
          <!-- end -->

          <!-- item -->
            <div class="detail-item">
                <div class="info">
                    <div class="p1">美天到配送</div>
                    <div class="p2">
                        <span class="date">2017-06-23</span>
                        <span class="time">12:35</span>
                    </div>
                </div>

                <div class="money">+ 12.00</div>
            </div>
          <!-- end -->          



      </div>

    
  </div>
</template>
 
<script>
import header from "../header";


export default {
  data() {
    return {
      headTitle: "零钱明细",
    };
  },

  components: {
    "v-header": header
  },

  methods: {}
};
</script>


<style lang="css">
@import "../../../assets/css/balance_detail.css";
</style>

