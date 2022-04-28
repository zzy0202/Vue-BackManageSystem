<template>
  <div class="home">
    <el-container>
      <el-aside  ref="aside" :width="width">
        <HomeAside></HomeAside>
      </el-aside>
      <el-container>
        <el-header style="padding: 0;border-bottom: 1px lightgrey solid">
          <HomeHeader></HomeHeader>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HomeAside from "@/components/Home/HomeAside";
import HomeHeader from "@/components/Home/HomeHeader";
import HomeMain from "@/components/Home/HomeMain";
import UserManage from "@/views/UserManage";
export default {
  name: 'Home',
  components: {
    HomeMain,
    HomeAside,HomeHeader,UserManage
  },
  data() {
    return {
      width:'200',
    }
  },
  mounted() {
    this.$EventBus.$on('collapse',(isCollapse)=>{
      this.width = isCollapse?'64':'200';
    })
  },
}
</script>

<style lang="less">
::v-deep .el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
}
.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  height: 100%;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
}

.el-container:nth-child(7) .el-aside {
}

</style>
