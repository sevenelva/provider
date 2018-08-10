<!--  -->
<template>
  <div class="login_wrap">
    <div class="login_box">
      <div class="login_content">
          <h3>供应商登录</h3>
          <div class="ipt_box" :class="{'error':user_err_info}">
            <i class="username_icon"></i>
            <input type="text" v-model.trim.lazy="username" placeholder="账号" @blur="fnError(1)" @focus="user_err_info = ''"/>
            <span>{{user_err_info}}</span>
          </div>
          <div class="ipt_box" :class="{'error':pass_err_info}">
            <i class="pass_icon"></i>
            <input type="password" v-model.trim.lazy="password" placeholder="密码" @blur="fnError(2)" @focus="pass_err_info = ''" ref="pass" />
            <span>{{pass_err_info}}</span>
          </div>
          <div class="ipt_box ipt_box_check" :class="{'error':check_err_info}">
            <i class="check_icon"></i>
            <input type="text" v-model.trim.lazy="check" placeholder="验证码" @blur="fnError(3)" @focus="check_err_info = ''"/>
            <span>{{check_err_info}}</span>
            <em>验证码</em>
          </div>
          <div class="login_forget clearfix">
            <div class="auto_login fl" >
              <input type="checkbox" id="autoLogin" :checked = "autoLogin"/>
              <label for="autoLogin" @click="fnAutoLogin">自动登录</label>
            </div>
            <a class="forget fr" href="javascript:;">忘记密码？</a>
          </div>
          <div class="btn" @click="fnSure">登录</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Login',
  data () {
    return {
      // username:'V03815',
      // password:'123',
      username:"",
      password:'',
      check:'',
      user_err_info:'',//  账号错误信息
      pass_err_info:'',//  密码错误信息
      check_err_info:'',//  验证信息错误信息
      autoLogin:true, // 自动登录
    };
  },
  computed:{

  },
  mounted(){
    let loginInfo = this.getCookie('login_info');
    if(this.autoLogin && loginInfo == true){
      loginInfo = JSON.parse(loginInfo)
      this.username = loginInfo.username;
      this.password = loginInfo.password;
      this.autoLogin = loginInfo.autoLogin;
    }else if(this.autoLogin){
      loginInfo = JSON.parse(loginInfo)
      this.username = loginInfo.username;
      this.autoLogin = loginInfo.autoLogin;
      this.password = ''
    }
  },
  methods:{
    // 提交
      fnSure:async function() {
        if(this.user_err_info == '' || this.pass_err_info == ''){
          this.fnError(1)
          this.fnError(2)
          return;
        }
          let params = {
            password:this.password,
            username:this.username
          }
          let obj={
            isLoading:false
          }
          const res = await this.$root.http.post('login/CheckPwd', params, this,obj)
          if(res.data.Code == 0){
            this.setCookie('token',res.data.Data.token)
            let setUserInfo = {
               password:this.password,
               username:this.username,
               autoLogin:this.autoLogin
            }
            setUserInfo = JSON.stringify(setUserInfo)
            this.setCookie('login_info',setUserInfo)
          }

      },
    // 验证信息错误提示
    fnError(arg){
      // arg 1 表示账号  2 表示密码   3 表示验证信息
      if(arg === 1){
        if(this.username == '' || this.username == undefined){
          this.user_err_info = '账号不能为空'
        }else if(this.username.length < 5 || this.username.length > 7){
          this.user_err_info = '账号长度为5-7位'
        }
      }else if(arg === 2){
        if(this.password == '' || this.password == undefined){
          this.pass_err_info = '密码不能为空'
         }//else if(this.password.length < 6 || this.password.length > 8){
        //   this.pass_err_info = '密码长度为6-8位'
        // }
      }else if(arg === 3){
        if(this.check == '' || this.check == undefined){
          this.check_err_info = '验证码不能为空'
        }
      }
    },
    // 自动登录
    fnAutoLogin(){
      this.autoLogin = !this.autoLogin;
      let loginInfo = this.getCookie('login_info');
      if(this.autoLogin == true && loginInfo){
        loginInfo = JSON.parse(loginInfo)
        this.password = loginInfo.password;
        this.pass_err_info = ''
      }else if(!this.autoLogin){
        this.password = '';
      }
    }

  }
}
</script>
<style lang ="less" scoped>
.login_wrap{
  width:100%;
  height:490px;
  background:url('../../assets/images/login_banner.jpg') no-repeat top center;
  .login_box{
    width:1200px;
    margin:0 auto;
    position:relative;
    .login_content{
      position:absolute;
      top:54px;
      right:0px;
      width:320px;
      height:313px;
      background:rgba(255,255,255,1);
      padding:30px 30px 40px;
      h3{
        height:21px;
        font-size:16px;
        font-weight:bold;
        color:rgba(83,83,83,1);
        line-height:21px;
        padding-bottom:20px;
      }
      .ipt_box{
        margin-bottom:20px;
        position:relative;
        width:320px;
        height:44px;
        &:last-child{
          margin-bottom:17px;
        }
        i{
          position: absolute;
          left:12px;
          top:9px;
          width:20px;
          height:25px;
          &.username_icon{
            display:block;
            background:url('../../assets/images/username.png') no-repeat;
          }
          &.pass_icon{
            background:url('../../assets/images/password.png') no-repeat;
          }
          &.check_icon{
            background:url('../../assets/images/check.png') no-repeat;
          }
        }
        input{
          outline:none;
          border:none;
          width:320px;
          height:44px;
          padding-left:44px;
          line-height:44px;
          font-size:14px;
          color:rgba(83,83,83,1);
          border:1px solid rgba(211,211,211,1);
          box-sizing: border-box;
        }
        span{
          display:none;
        }
        &.error{
          input{
             border:1px solid rgba(227,29,25,1);
          }
          span{
            display:block;
            position:absolute;
            top:0px;
            right:14px;
            font-size:14px;
            height:44px;
            line-height:44px;
            color:rgba(227,29,25,1);
          }
        }
        &.ipt_box_check{
          span{
            display:block;
            position:absolute;
            top:0px;
            right:85px;
            font-size:14px;
            height:44px;
            line-height:44px;
            color:rgba(227,29,25,1);
          }
          em{
            display:inline-block;
            width:69px;
            height:32px;
            background:red;
            position:absolute;
            top:6px;
            right:6px;
          }
        }
      }
      .login_forget{
        .auto_login{
          input{
            display:none;
          }
          label{
            display:inline-block;
            height:19px;
            font-size:14px;
            color:rgba(151,151,151,1);
            line-height:19px;
            background:url('../../assets/images/choose_icon.png') left no-repeat;
            background-size:17px 17px;
            padding-left: 25px;
            cursor: pointer;
            vertical-align: middle;
          }
          & input:checked + label{
            background:url('../../assets/images/bill_chooseon_icon.png') left no-repeat;
          }
        }
        .forget{
          height:19px;
          font-size:14px;
          color:rgba(151,151,151,1);
          line-height:19px;
        }
      }
      .btn{
        width:320px;
        height:44px;
        background:rgba(227,29,25,1);
        border-radius:5px;
        text-align:center;
        font-size:18px;
        color:rgba(255,255,255,1);
        line-height:44px;
        margin-top:20px;
        cursor:pointer;
        &:hover{
           background:rgba(227,29,25,0.8);
        }
      }
    }
  }

}
</style>
