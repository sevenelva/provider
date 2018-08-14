<!-- by your name -->
<template>
    <div class="main_w1200 main_logistics">
        <div class="add_logistics" @click="addLogistics">新增配送地址</div>
        <div class="logistics_list clearfix">
            <div class="item" v-for="(item,index) of logisticsList" 
            :key="item.Id"
            :class="{'ipt_item':index==isEdit,'default_item':item.IsDefault==1}">
                <div class="name">{{item.Contacts}}</div>
                <input class="ipt_name"  type="text" placeholder="请输入物流公司名称" v-model="name">
                <div class="info">
                    <span>联系电话：</span>
                    <b>{{item.Tel}}</b>
                    <input class="ipt_tel" type="text" placeholder="请输入联系电话" v-model="tel">
                </div>
                <div class="info">
                    <span>联系人：</span>
                    <b>{{item.Contacts}}</b>
                    <input class="ipt_people" type="text" placeholder="请输入联系人" v-model="people">
                </div>
                <div class="default">默认</div>
                <div class="act clearfix">
                    <div class="btn btn_del" @click="setDel(index)">删除</div>
                    <div class="btn btn_cancel" @click="setCancel(index)">取消</div>
                    <div class="btn btn_save" @click="setSave(index)" :class="disabledClass==true?'disabled':''">保存</div>
                    <div class="btn btn_edit" @click="setEdit(index)">编辑</div>
                    <div class="btn btn_default" @click="setDefault(index,item.Id)">设为默认</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type='text/ecmascript-6'>
    export default {
        name:"MyLogistics",
        data () {
            return {
                isDefault:-1, 
                isEdit:-1,
                name:"",
                tel:"",
                people:"",
                oldName:"",
                oldTel:"",
                oldPeople:"",
                saveDisabled:false,
                logisticsList:[]
            };
        },
        mounted(){
            this.oriData();
           
        },
        computed:{
            disabledClass(){
                var regTel=/^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;
                if(this.name==""||!regTel.test(this.tel)||this.people==""){
                    return this.saveDisabled=true;
                }else{
                    return this.saveDisabled=false;
                }
            }
             
        },
     
        methods:{
            //获取数据
            oriData:async function(){
                let params={};
                let obj={
                    isLoading:false
                };
                const res = await this.$root.http.get('/Order/MyLogistics', params, this,obj);
               console.log(res);
                if(res.data.Code==0){
                    this.logisticsList=res.data.Data;
                    console.log(this.logisticsList);
                  
                }
               
            },
            //新增配送地址
            addLogistics(){
                if(this.isEdit==-1){
                    var length=this.logisticsList.length;
                    var str={ID:length,IsDefault:false,Contacts:"",Tel:"",people:""};
                    this.name="";
                    this.tel="";
                    this.people="";
                    this.oldName="";
                    this.oldTel="";
                    this.oldPeople="";
                    this.logisticsList.push(str);
                    this.isEdit=length;
                }
               
            },
            //设置为默认接口
            setDefalutInterface:async function(id){
                    let params={
                        ID:id
                    }
                    let obj={
                        isLoading:false
                    };
                    const res = await this.$root.http.get('/Order/DefaultLogistics', params, this,obj);
                    if(res.data.Code==0){
                        console.log(res);
                    }
                },
            //设置为默认
            setDefault(index,id){
                if(this.isEdit==-1){
                    this.setDefalutInterface(id);
                }
            },
            // 编辑
            setEdit(index){
                if(this.isEdit==-1){
                    this.name=this.logisticsList[index].name;
                    this.oldName=this.logisticsList[index].name;
                    this.tel=this.logisticsList[index].Tel;
                    this.oldTel=this.logisticsList[index].Tel;
                    this.people=this.logisticsList[index].Contacts;
                    this.oldPeople=this.logisticsList[index].Contacts;
                    this.isEdit=index;
                }
            },
            // 保存接口
            setSaveInterface:async function(tel,contacts){
                let params={
                        Tel:tel,
                        Contacts:contacts
                    }
                    let obj={
                        isLoading:false
                    };
                    const res = await this.$root.http.post('/Order/SaveLogistics', params, this,obj);
                    if(res.Code==0){
                        console.log(res);
                    }
            },
            // 保存
            setSave(index){
                if(this.saveDisabled==false){
                    this.logisticsList[index].name=this.name;
                    this.logisticsList[index].tel=this.tel;
                    this.logisticsList[index].people=this.people;
                    this.setSaveInterface(this.tel,this.people);
                    this.isEdit=-1;
                }
            },
            //取消
            setCancel(index){
                if(this.oldName==""||this.oldTel==""||this.oldPeople==""){
                    this.logisticsList.splice(index,1);
                }else{
                    this.logisticsList[index].name=this.oldName;
                    this.logisticsList[index].tel=this.oldTel;
                    this.logisticsList[index].people=this.oldPeople;
                    
                }
                this.isEdit=-1;
            },
            //删除
            setDel(index){
                if(this.isEdit==-1){
                    this.logisticsList.splice(index,1);
                }
            }
        }
    }
</script>
<style lang='less' scoped>
.main_logistics{
    margin-top:30px;
    padding-bottom:30px;
    .add_logistics{
        position:relative;
        padding-left:36px;
        width:102px;
        height:32px;
        border:1px solid #E31D19;
        background: #FFF2F1;
        font-size:14px;
        font-weight: bold;
        color:#E31D19;
        line-height: 34px;
        cursor: pointer;
        &:before{
            content: "";
            position: absolute;
            left:18px;
            top:50%;
            margin-top:-5px;
            width:12px;
            height:12px;
            background: url("../../assets/images/plus.png") no-repeat center center;
        }
        &:hover{
            background: #FFEAEA;
        }
    }
    .logistics_list{
        .item{
            &:nth-child(2n){
                margin-right:0;
            }
            &.ipt_item{
                background: #F9F9F9;
                .name{
                    display:none;
                }
                .ipt_name{
                    display: block;
                }
                .info{
                    .ipt_tel,.ipt_people{
                        display:inline-block;
                    }
                    b{
                        display:none;
                    }
                }
                .act{
                    .btn_save,.btn_cancel{
                        display:block;
                    }
                    .btn_edit,.btn_default,.btn_del{
                        display:none;
                    }
                }
            }
            &.default_item{
                .default{
                    display:block;
                }
                .act{
                    .btn_default{
                        display:none;
                    }
                }
            }
            position:relative;
            float:left;
            margin:20px 20px 0 0;
            padding:15px 20px 18px 20px;
            width:548px;
            border:1px solid #ebebeb;
            .name{
                padding-left:10px;
                height:32px;
                line-height: 32px;
                color:#535353;
                font-weight: bold;
                font-size:16px;
            }
            .ipt_name{
                display: none;
                padding:0 9px;
                width:364px;
                height:30px;
                line-height: 30px;
                border:1px solid #EBEBEB;
                font-size:16px;
                font-weight: bold;
                color:#535353;
                outline: none;
                &::-webkit-input-placeholder{
                    font-weight: normal;
                    color:#D3D3D3;
                }
            }
            .info{
                padding:6px 0 0 10px;
                height:24px;
                font-size:0;
                color:#535353;
                line-height: 24px;
                span{
                    display: inline-block;
                    width:70px;
                    font-size:14px;
                }
                b{
                    margin-left:12px;
                    font-size:14px;
                    font-weight: normal;
                }
                .ipt_tel,.ipt_people{
                    display: none;
                    padding:0 11px;
                    width:116px;
                    height:22px;
                    line-height: 22px;
                    border:1px solid #EBEBEB;
                    font-size:14px;
                    color:#535353;
                    outline: none;
                    &::-webkit-input-placeholder{
                        color:#D3D3D3;
                    }
                }
            }
            .default{
                display:none;
                position: absolute;
                top:-1px;
                right:-1px;
                width:44px;
                height:26px;
                background: #95BDFC;
                text-align: center;
                line-height: 26px;
                color:#fff;
                font-size: 14px;
            }
            .act{
                position:absolute;
                right:20px;
                bottom:15px;
                .btn{
                    float:right;
                    margin-left:40px;
                    font-size:14px;
                    color:#66A1FD;
                    line-height: 19px;
                    cursor: pointer;
                    &.disabled{
                        color:#D3D3D3;
                        cursor:default;
                        &:hover{
                            color:#D3D3D3;
                        }
                    }
                    &:hover{
                        color:#2D7AF2;
                    }
                }
                .btn_save,.btn_cancel{
                    display:none;
                }
            }
        }
    }
}
</style>
