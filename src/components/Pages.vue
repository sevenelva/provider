<!-- 发送方式dialog -->
<template>
  <div class="el-pages">
       <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
            prev-text="上一页"
            next-text="下一页"
            >
          </el-pagination>
          <span class="el-sure">确定</span>
        </div>
  </div>
</template>
<script>
export default {
  name:"Pages",
  data () {
    return {
      currentPage4: 1, //当前页码
    };
  },
   methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.$emit("pageChange",val);
      }
    }
}

</script>
<style>
.el-pages{ 
  background:#fff;
  position:relative;
}
.el-pages .el-sure{
  display: inline-block;
  width:56px;
  height:40px;
  background:rgba(255,255,255,1);
  border:1px solid rgba(235,235,235,1);
  box-sizing: border-box;
  font-size:14px;
  font-weight:bold;
  color:rgba(151,151,151,1);
  line-height:40px;
  text-align:center;
  position:relative;
  top:16px;
  left:5px;
  cursor:pointer;
}
.block{
  text-align:center;
}
.el-pagination {
    display: inline-block;
    white-space: normal;
    padding: 2px 5px;
    color: #303133;
    font-weight: 700;
}
.el-pagination .btn-prev, .el-pagination .btn-next{
    padding-right: 0px;
    width:87px;
    height:40px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(235,235,235,1);
    box-sizing: border-box;
}
.el-pagination .btn-next{
   border-left:none;
}
.el-pagination .btn-next span{
  display:inline-block;
  width:60px;
  height:40px;
  font-size:14px;
  font-weight:bold;
  color:rgba(151,151,151,1);
  line-height:40px;
  background:url('../assets/images/icon_next.png') right no-repeat;
  background-size:6px 10px;
  padding-right: 6px;
  margin-left:-20px;
}
.el-pagination .btn-prev span{
  display:inline-block;
  width:60px;
  height:40px;
  font-size:14px;
  font-weight:bold;
  color:rgba(151,151,151,1);
  line-height:40px;
  background:url('../assets/images/icon_pre.png') left no-repeat;
  background-size:6px 10px;
  padding-left: 6px;
  margin-left:-5px;
}
.el-pager li {
    padding: 0px;
    background: #fff;
    font-size: 13px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    border:1px solid rgba(235,235,235,1);
    border-left:none;
    box-sizing: border-box;
    color:#979797;
    font-weight:bold;
}
.el-pager li:hover {
    color:#E31D19;
}
.el-pager li.active {
    color:#E31D19;
    cursor: default;
    border-top:none;
    border-bottom:none;
}
.el-pager li.btn-quicknext, .el-pager li.btn-quickprev {
    line-height: 40px;
    color: #303133;
}
.el-pagination__total,.el-pagination__sizes{
  display:none !important;
}
.el-pagination__jump {
    margin-left: 24px;
    font-size:14px;
    font-weight:bold;
    color:rgba(151,151,151,1);
    line-height:40px;
}

.el-pagination__editor.el-input .el-input__inner {
    width:42px;
    height:40px;
    line-height:40px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(235,235,235,1);
    box-sizing: border-box;
    border-radius: 0px;
}
</style>
