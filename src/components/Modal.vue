<template>
  <div class="main">
    <div class="content">
      <div style="margin-top: 30px;">
        <span>用户id</span>
        <el-input
            v-model="userInfo.id"
            :disabled="true">
        </el-input>
      </div>
      <div>
        <span>用户名</span>
        <el-input
            v-model="userInfo.username"
            >
        </el-input>
      </div>
      <div>
        <span>积分</span>
        <el-input
            v-model="userInfo.score"
        >
        </el-input>
      </div>
      <div>
        <span>注册时间</span>
        <el-input
            v-model="userInfo.score"
            :disabled="true">
        </el-input>
      </div>
      <div style="margin-top: 40px;">
        <el-button type="primary">确定修改</el-button>
        <el-button type="info" @click="$emit('cancelChange')">取消修改</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ['userInfo'],
  mounted() {
    console.log(this.userInfo);
  }
}
</script>

<style scoped lang="less">
.main {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
}

.content {
  width: 400px;
  height: 500px;
  background-color: white;
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  position: absolute;
  border-radius: 20px;

  div {
    margin: 10px 0;
    display: flex;
    justify-content: start;
    align-items: center;

    span {
      display: inline-block;
      width: 100px;
    }
  }
}
</style>
