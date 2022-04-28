<template>
  <div>
    <div class="background" style="background-image:url('./imgs/background.jpg');">
      <div class="login">
        <div class="username" style="margin-top: 60px;">
          <span>用户名</span>
          <el-input v-model="username" placeholder="请输入内容"></el-input>
        </div>
        <div class="password">
          <span>密码</span>
          <el-input v-model="password" placeholder="请输入内容"></el-input>
        </div>
        <div><el-button type="primary" style="margin: 0 auto" @click="login">登录</el-button></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return{
      username:'',
      password:'',
    }
  },
  methods:{
    login() {
      if(this.username==='admin'&&this.password==='admin') {
        localStorage.isLogin = true;
        this.$router.push('/');
      }
    }
  }
}
</script>

<style scoped lang="less">
.background {
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login {
  width: 500px;
  height: 400px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 3px 3px 5px lightgrey;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0 ;
    span {
      display: block;
      width: 80px;
      height: 30px;
    }
    ::v-deep .el-input__inner,.el-input {
      width: 300px;
    }
  }
}
</style>
