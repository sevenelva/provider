<!-- by your name -->
<template>
    <div class="main_report main_w1200">
        <div class="upload">
            <div class="add_report" @click="fileClick">新增质检报告</div>
            <input @change="fileChange($event)" type="file" id="upload_file" multiple style="display: none" accept="image/*"/>
        </div>

        <div class="report_list clearfix">
            <div class="item" v-for="(item,index) of reportList" :key="item.id">
                <div class="btn btn_del" @click="setDel(index)">删除</div>
                <div class="btn btn_look">查看</div>
                <div class="name">{{item.name}}</div>
            </div>
        </div>
    </div>
</template>
<script type='text/ecmascript-6'>
   import axios from 'axios'
    export default {
        name:"MyReport",
        data () {
            return {
                reportList:[
                    {id:'1',name:"质检报告1.pdf"},
                    {id:'2',name:"质检报告2.pdf"},
                    {id:'3',name:"质检报告3.pdf"},
                    {id:'4',name:"质检报告4.pdf"},
                    {id:'5',name:"质检报告5.pdf"},
                    {id:'6',name:"质检报告6.pdf"}
                    ]
            };
        },
        methods:{
            // 删除
            setDel(index){
                this.reportList.splice(index,1);
            },
            fileClick(){
                document.getElementById('upload_file').click()
            },
            fileChange(el){
                let files = el.target.files
                let AllowImgFileSize = 2100000;
                let data={}
                let count = 0;
                for(let i=0;i<files.length;i++){
                   let reader = new FileReader();
                   let imgName = encodeURIComponent(files[i].name);
                   let imgUrlBase64 = reader.readAsDataURL(files[i]);
                    reader.onload = function (e) {
                      //var ImgFileSize = reader.result.substring(reader.result.indexOf(",") + 1).length;//截取base64码部分（可选可不选，需要与后台沟通）
                      if (AllowImgFileSize != 0 && AllowImgFileSize < reader.result.length) {
                            alert( '上传失败，请上传不大于2M的图片！');
                            return;
                        }else{
                            //执行上传操作
                            data[imgName] = reader.result
                            count ++
                            if(count == files.length ){
                              console.log(data)
                              //this.imgRequest(data)
                            }
                        }
                    }
                }

            },
            imgRequest:async function(data){
              let params = data
              let obj={
                isLoading:false
              }
              const res = await this.$root.http.get('login/CheckPwd', params, this,obj)
            }

        }
    }
</script>
<style lang='less'  scoped>
.main_report{
    margin:30px auto;
    .add_report{
        width:138px;
        height:32px;
        border:1px solid #E31D19;
        background: #FFF2F1;
        text-align: center;
        font-size:14px;
        font-weight: bold;
        color:#E31D19;
        line-height: 34px;
        cursor: pointer;
        &:hover{
            background: #FFEAEA;
        }
    }
    .report_list{
        .item{
            &:nth-child(2n){
                margin-right:0;
            }
            float:left;
            margin:20px 20px 0 0;
            padding:0 24px 0 25px;
            width:539px;
            height:58px;
            border:1px solid #EBEBEB;
            line-height: 58px;
            .btn{
                float:right;
                margin-left:40px;
                font-size:14px;
                color:#66A1FD;
                cursor: pointer;
                &:hover{
                    color:#2D7AF2;
                }
            }
            .name{
                margin-right:120px;
                color:#535353;
                font-size:16px;
                font-weight: bold;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }
    }
}
</style>
