<template>

    <!-- navbar -->
    <div class="navbar">


        <router-link to="/unfinish" class="navbar-item">
            <div class="iconfont icon">&#xe602;</div>
            <p>订单</p>
        </router-link>

        <router-link to="/count" class="navbar-item">
            <div class="iconfont icon">&#xe62f;</div>
            <p>统计</p>
        </router-link>

        <router-link to="/center" class="navbar-item">
            <div class="iconfont icon">&#xe60c;</div>
            <p>我的</p>
        </router-link>

    </div>
    <!-- navbar end -->
    









</template>

<script>
export default {
  data() {
    return {
      msg: "配送管理"
    };
  }
};
</script>

<style lang="css" scoped>
</style>