<template>
  <div class="main">
    <div class="mainHeader">
      <el-avatar :size="120" style="margin-left: 10px;" :src="circleUrl"></el-avatar>
      <div class="welcome">
        <h2>下午好，admin，来一杯热可可吗?</h2>
        <div style="margin-top: 20px;color: grey">前端工程师 | 小羊猫迷妹 | xxx </div>
      </div>
    </div>

    <div class="mainContent">
      <div class="leftPart">
        <div class="toDo">
          <div class="todoTitle">
            <div style="margin-left: 10px;">进行中的事项</div>
          </div>
          <div class="todoContent">
            <div v-for="item in 6" class="contentUnit">
              <div>暂时没有</div>
            </div>
          </div>
        </div>
      </div>
      <div class="rightPart">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeMain",
  data() {
    return {
      circleUrl: 'data:image/jpeg;base64,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',
    }
  }
}
</script>

<style scoped lang="less">
.main {
  width: 100%;
  height: 100%;
  background-color: #efefef;
  overflow: hidden;
}

.mainHeader {
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: white;
  height: 150px;
  border-radius: 4px;
  .welcome {
    margin-left: 20px;
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
    flex-direction: column;
  }
}
.mainContent {
  margin-top: 20px;
  width: 100%;
  height: 100%;
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  .toDo {
    width: 800px;
    height: 400px;
    background-color: white;
    border-radius: 10px;
    .todoTitle {
      width: 100%;
      height: 65px;
      display: flex;
      align-items: center;
      font-size: 20px;
      color: grey;
      border-bottom: 1px #e8e6e6 solid;
    }
    .todoContent {
      display: flex;
      justify-content: center;
      width: 100%;
      height: 334px;
      flex-wrap: wrap;
      .contentUnit {
        width: 33%;
        height: 50%;
        border:1px solid #f8f4f4;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
.test {
  width: 300px;
  height: 700px;
  background-color: pink;
}
</style>
