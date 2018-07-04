<template>

    <!-- header -->
    <div class="header">
        {{title}}
        
        <div class="back iconfont" v-if="childShowState">&#xe614;</div>
    </div>
    <!-- header -->
    

</template>

<script>
export default {
  name:'Header',
  props:['headTitle','showState'],
  data() {
    return {
      title:this.headTitle,
      childShowState: this.showState,
    };
  }
};
</script>

<style lang="css" scoped>
</style>