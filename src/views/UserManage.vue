<template>
  <div class="main">
    <transition name="fade">
      <Modal v-if="showModal" :userInfo="userInfo" class="modal" @cancelChange="cancelChange" @addSuccess="refresh"></Modal>
    </transition>
    <el-button type="primary" @click="showModalMethod('add')" style="margin: 10px 10px;">添加用户</el-button>
    <div>
      <el-table
          ref="table"
          v-loading="isLoading"
          :data="userList"
          style="width: 100%">
        <el-table-column
            width="150"
            label="id"
            prop="id">
        </el-table-column>
        <el-table-column
            width="250"
            label="注册日期"
            :formatter="formatTime"
            prop="reg_time">
        </el-table-column>
        <el-table-column
            label="用户名"
            prop="username">
        </el-table-column>
        <el-table-column
            width="200"
            label="积分"
            prop="score">
        </el-table-column>
        <el-table-column
            label="邮箱"
            width="300"
            prop="email">
        </el-table-column>
        <el-table-column
            label="联络方式"
            width="200"
            prop="mobile">
        </el-table-column>
        <el-table-column
        >
          <template slot-scope="scope" style="margin-left: 60px;">
            <el-button
                size="medium"
                @click="handleEdit(scope.$index, scope.row)">Edit
            </el-button>
            <el-button
                size="medium"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">Delete
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="page">
      <el-pagination
          class="pageSeperate"
          background
          @current-change="onCurrentChange"
          :page-size="10"
          layout="prev, pager, next, jumper"
          :total="totalPage">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import {getUserInfo} from "@/api/UserManageApi";
import {deleteUser} from "@/api/UserManageApi";
import Modal from "@/components/Modal";
export default {
  name: "UserManage",
  components: {Modal},
  data() {
    return {
      userList: [],
      totalPage: 0,
      currentPage: 1,
      isLoading:false,
      showModal:false,
      userInfo:null,
    }
  },
  mounted() {
    this.loadUser(1);
  },
  methods: {
    showModalMethod(type){
      if(type==='add') {
        this.userInfo = {type:'reg'};
        this.showModal = true;
      }
    },
    formatTime(row,column) {
      let timeScroll = new Date(row.reg_time);
      let year = timeScroll.getFullYear();
      let month = timeScroll.getMonth();
      let date = timeScroll.getDate();
      return year+'-'+month+'-'+date;
    },
    async loadUser(page) {
      this.isLoading = true;
      let res = await getUserInfo({page: page});
      this.userList = res.userlist;
      this.totalPage = Math.ceil(res.total / 10) * 10;
      this.isLoading = false;
    },
    handleEdit(index, row) {
      this.userInfo = row;
      this.showModal = true;
    },
    handleDelete(index, row) {
      let confirmDelete = this.$confirm('确定要删除该用户吗，此操作不可逆');
      confirmDelete.then(() => {
        let res = deleteUser({id: row.id});
        this.$alert('删除成功!');
        this.loadUser(this.currentPage);
      })
    },
    onCurrentChange(page) {
      this.currentPage = page;
      this.loadUser(page);
    },
    cancelChange() {
      this.showModal = false;
    },
    refresh() {
      this.showModal = false;
      this.loadUser(this.currentPage);
    }
  }
}
</script>

<style scoped>
.main {
  width: 100%;
  background-color: white;
  height: 95%;
  position: relative;
}

.page {
  position: absolute;
  margin-top: 15px;
  right: 0;
}
.modal {
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
