<template>
  <div class="main">
    <div class="content">
      <span class="title">{{ title }}</span>
      <el-form ref="form" :model="user" label-width="80px" style="margin-top: 10px;">
        <el-form-item label="用户名">
          <el-input :disabled="user.type!=='addUser'" v-model="user.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="user.password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="user.email"></el-input>
        </el-form-item>
        <el-form-item label="用户角色">
          <el-select v-model="user.role_id" placeholder="请选择用户角色">
            <el-option label="admin" :value="0"></el-option>
            <el-option label="Svip" :value="1"></el-option>
            <el-option label="normal user" :value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="联络号码">
          <el-input v-model="user.mobile"></el-input>
        </el-form-item>
      </el-form>
      <div style="margin-top: 25px;" v-if="user.type==='addUser'">
        <el-button type="primary" @click="addUser">确定增加</el-button>
        <el-button type="info" @click="$emit('cancelChange')">取消增加</el-button>
      </div>
      <div style="margin-top: 25px;" v-else>
        <el-button type="primary" @click="updateUser">确定修改</el-button>
        <el-button type="info" @click="$emit('cancelChange')">取消修改</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import {addUser} from "@/api/UserManageApi";
import {updateUser} from "@/api/UserManageApi";

export default {
  name: "Modal",
  data() {
    return {
      title: this.userInfo.type === 'addUser' ? '新增用户' : '修改用户',
      user: this.userInfo,
    }
  },
  methods: {
    async updateUser() {
      console.log(this.user);
      let result = await updateUser({
        id: this.user.id,
        password: this.user.password,
        email: this.user.email,
        mobile: this.user.mobile,
        role_id: 1,
      })
      if(result.msg==='更新成功2') {
        await this.$message('更新成功');
        this.$emit('refresh');
      }
    },
    async addUser() {
      console.log(this.userInfo);
      let res = await addUser({
        username: this.userInfo.username,
        password: this.userInfo.password,
        email: this.userInfo.email,
        mobile: this.userInfo.mobile,
        role_id: this.userInfo.role_id,
      })
      if (res.msg === '添加成功') {
        this.$alert(res.msg);
        this.$emit('refresh');
      }
    }
  },
  props: ['userInfo'],
  mounted() {
    this.user = this.userInfo;
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

.title {
  width: 100%;
  border-bottom: 1px solid lightgrey;
  text-align: center;
  display: block;
  height: 40px;
  line-height: 40px;
}

.content {
  width: 450px;
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
