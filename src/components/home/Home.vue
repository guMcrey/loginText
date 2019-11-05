<template>
  <div class="content">
    <p>
      <span class="content-text">{{userName}}</span>用户
    </p>
    <p>
      您好, 欢迎访问
      <span class="content-text">XXX</span>!
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: this.$route.query.userName
    };
  }
};
</script>

<style lang="less" scoped>
.content {
  margin: 10px 20px;
  text-align: center;
  color: #555;
  font-size: 22px;
  line-height: 45px;

  &-text {
    color: #1e90ff;
    letter-spacing: 1px;
  }
}
</style>
