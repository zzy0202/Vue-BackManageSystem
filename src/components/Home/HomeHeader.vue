<template>
  <div class="main">
    <div class="leftPart">
      <span :class="iconName" class="icon" @click="collapse"></span>
      <span class="el-icon-refresh-left"></span>
    </div>
    <div class="rightPart" >
      <div>
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      </div>
      <span>admin</span>
      <span class="logout" style="margin: 0 10px 0 20px">登出</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  data() {
    return {
       isCollapsed:null,
      iconName:'el-icon-d-arrow-left'
    }
  },
  methods:{
    collapse() {
      this.isCollapsed = !this.isCollapsed;
      this.iconName = this.isCollapsed?'el-icon-d-arrow-right':'el-icon-d-arrow-left'
      this.$EventBus.$emit('collapse',this.isCollapsed);
    }
  }
}
</script>

<style scoped lang="less">
.main {
  width: 100%;
  height: 100%;
  background-color: rgb(255,255,255);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .leftPart {
    margin: 0 10px;
    span {
      margin: 14px;
      font-size: 25px;
    }
  }
  .rightPart {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 40px;
    .logout:hover {
      color: orange;
      cursor: pointer;
    }
  }
}
.icon:hover {
  cursor: pointer;
}
</style>
