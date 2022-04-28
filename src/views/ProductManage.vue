<template>
  <div>
    <el-table
        :data="productTable"
        style="width: 100%">
      <el-table-column
          label="ID"
          width="100"
          prop="id">
      </el-table-column>
      <el-table-column
          label="产品名称"
          width="600"
          prop="title">
      </el-table-column>
      <el-table-column
          label="产品分类"
          prop="category">
      </el-table-column>
      <el-table-column
          label="产品图片"
          prop="imgs"
          >
        <template   slot-scope="scope">
          <el-image
              style="width: 200px; height: 200px"
              :src="scope.row.imgs"
              fit="cover"></el-image>
        </template>
      </el-table-column>
      <el-table-column
          label="产品价格"
          prop="price">
      </el-table-column>
      <el-table-column
          align="right">
        <template slot-scope="scope">
          <el-button
              size="mini"
              @click="editProduct(scope.$index, scope.row)">Edit
          </el-button>
          <el-button
              size="mini"
              type="danger"
              @click="deleteProduct(scope.$index, scope.row)">Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {getProductList} from "@/api/ProductManage";

export default {
  name: "ProductManage",
  data() {
    return {
      productTable: [],
    }
  },
  async mounted() {
    let result = await getProductList(1);
    this.productTable = result.productlist;
    for (const productElement of this.productTable) {
      productElement.imgs = JSON.parse(productElement.imgs)[0].url;
      productElement.sku = JSON.parse(productElement.sku);
    }
    console.log(this.productTable);
  },
  methods: {
    editProduct() {

    },
    deleteProduct() {

    },
  }
}
</script>

<style scoped>

</style>
