<template>
  <div>
    <el-row class="tac">
      <el-col style="width: 100%">
        <el-menu
            :default-active="currentActive.toString()"
            class="el-menu-vertical-demo"
            background-color="rgb(5,21,42)"
            text-color="#fff"
            :collapse="isCollapsed"
            active-text-color="#ffd04b">
          <el-menu-item index="1" @click="goRouter(1)">
            <i class="el-icon-s-home"></i>
            <span slot="title">个人首页</span>
          </el-menu-item>
          <el-menu-item index="2" @click="goRouter(2)">
            <i class="el-icon-user"></i>
            <span slot="title">用户管理</span>
          </el-menu-item>
          <el-menu-item index="3" @click="goRouter(3)">
            <i class="el-icon-s-shop"></i>
            <span slot="title">商品管理</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "HomeAside",
  data() {
    return {
      isCollapsed: false,
      currentActive:1,
      pathArr:['Main','UserManage','ProductManage'],
    }
  },
  methods:{
    goRouter(to) {
      if(to===1) {
        this.$router.push({name:"Main"});
      }
      else if(to===2) {
        this.$router.push({name:"UserManage"});
      }
    }
  },
  watch:{
    $route:{
      handler(newRouter,oldRouter) {
        console.log('new',newRouter);
        console.log('old',oldRouter);
        this.currentActive = this.pathArr.indexOf(newRouter.name)+1;
      },
      immediate:true,
    }
  },
  mounted() {
    this.$EventBus.$on('collapse', () => {
      this.isCollapsed = !this.isCollapsed;
    })
  }
}
</script>

<style scoped lang="less">
.el-menu {
  height: 100vh;
}

span {
  font-size: 15.5px;
}

.el-menu-item {
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
