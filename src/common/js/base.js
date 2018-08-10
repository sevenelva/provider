import Vue from 'vue'

// 判断移动还是pc访问
Vue.prototype.isPC = function () { // 全局函数判断pc访问还是移动访问
    let userAgentInfo = navigator.userAgent
	let Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
	let flag = true
	for (var v = 0; v < Agents.length; v++) {
	if (userAgentInfo.indexOf(Agents[v]) > 0) {
	    flag = false
	    break
	   }
	}
	return flag
}
// 判断低andr  还ios
Vue.prototype.andrIos = function(){
  let ua = navigator.userAgent.toLowerCase(); 
  if (/android/.test(ua)) {
    return true
  }else {
    false
  }
}

// Cookie
Vue.prototype.removeCookie = function (name){
  setCookie(decodeURIComponent(name),'',-1);
}

Vue.prototype.getCookie = function (name){
  //user=alex; address=外滩18号; user2=ritian
   var arr=document.cookie.split('; ');
   for(var i=0;i<arr.length;i++){
    //arr[i]  ==   'user=alex'
    var arr2 = arr[i].split('=');//['user','alex']
    if(arr2[0]==decodeURIComponent(name)){
      return decodeURIComponent(arr2[1]); 
    }
   }
   return '';
}

Vue.prototype.setCookie = function (name,value,timeout){
  timeout = 90
  name = encodeURIComponent(name)
  value = encodeURIComponent(value)
  var d=new Date();
  d.setDate(d.getDate()+timeout);
  document.cookie=name+'='+value+';expires='+d;
}

// 划入效果

  Vue.prototype.enterPublick = function(id,bool){
    let btn = document.getElementById(id)
      if(bool){
        btn.style.background = ''
        btn.style.cursor = "pointer"
        btn.onmouseover = function(){
            btn.style.background = '#CD474C'
            btn.style.transition = 'all .3s ease'

        }
        btn.onmouseout = function(){
            btn.style.background = '#C0191F'
        }
      } else {
        this.$nextTick(function(){
         let btn = document.getElementById(id)
          btn.style.cursor = ""
          btn.onmouseover = btn.onmouseout = null
          btn.style.background = '#D3D3D3'
        })
        
      } 
  }

//  处理小数加减乘除

Vue.prototype.floatTool = function() {
  /*
     * 判断obj是否为一个整数
     */
    function isInteger(obj) {
        return Math.floor(obj) === obj
    }

    /*
     * 将一个浮点数转成整数，返回整数和倍数。如 3.14 >> 314，倍数是 100
     * @param floatNum {number} 小数
     * @return {object}
     *   {times:100, num: 314}
     */
    function toInteger(floatNum) {
        var ret = {times: 1, num: 0}
        if (isInteger(floatNum)) {
            ret.num = floatNum
            return ret
        }
        var strfi  = floatNum + ''
        var dotPos = strfi.indexOf('.')
        var len    = strfi.substr(dotPos+1).length
        var times  = Math.pow(10, len)
        var intNum = parseInt(floatNum * times + 0.5, 10)
        ret.times  = times
        ret.num    = intNum
        return ret
    }

    /*
     * 核心方法，实现加减乘除运算，确保不丢失精度
     * 思路：把小数放大为整数（乘），进行算术运算，再缩小为小数（除）
     *
     * @param a {number} 运算数1
     * @param b {number} 运算数2
     * @param digits {number} 精度，保留的小数点数，比如 2, 即保留为两位小数
     * @param op {string} 运算类型，有加减乘除（add/subtract/multiply/divide）
     *
     */
    function operation(a, b, op) {
        var o1 = toInteger(a)
        var o2 = toInteger(b)
        var n1 = o1.num
        var n2 = o2.num
        var t1 = o1.times
        var t2 = o2.times
        var max = t1 > t2 ? t1 : t2
        var result = null
        switch (op) {
            case 'add':
                if (t1 === t2) { // 两个小数位数相同
                    result = n1 + n2
                } else if (t1 > t2) { // o1 小数位 大于 o2
                    result = n1 + n2 * (t1 / t2)
                } else { // o1 小数位 小于 o2
                    result = n1 * (t2 / t1) + n2
                }
                return result / max
            case 'subtract':
                if (t1 === t2) {
                    result = n1 - n2
                } else if (t1 > t2) {
                    result = n1 - n2 * (t1 / t2)
                } else {
                    result = n1 * (t2 / t1) - n2
                }
                return result / max
            case 'multiply':
                result = (n1 * n2) / (t1 * t2)
                return result
            case 'divide':
                return result = function() {
                    var r1 = n1 / n2
                    var r2 = t2 / t1
                    return operation(r1, r2, 'multiply')
                }()
        }
    }

    // 加减乘除的四个接口
    function add(a, b) {
        return operation(a, b, 'add')
    }
    function subtract(a, b) {
        return operation(a, b, 'subtract')
    }
    function multiply(a, b) {
        return operation(a, b, 'multiply')
    }
    function divide(a, b) {
        return operation(a, b, 'divide')
    }

    // exports
    return {
        add: add,
        subtract: subtract,
        multiply: multiply,
        divide: divide
    }
}()

/*
  //加减乘除的调用
this.floatTool.add(a,b);//相加
floatTool.subtract(a,b);//相减
floatTool.multiply(a,b);//相乘
floatTool.divide(a,b);//相除
*/

// 限制输入框的内容长度
Vue.prototype.iptLength = function(id,num){
  let ipt = document.getElementById(id)
  ipt.oninput = function () {
      if(this.value.length > num){
          this.value = this.value.slice(0,num)
      }
  }
}

