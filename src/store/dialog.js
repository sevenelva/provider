export default {
    state: {
      dialogFlag: false, //dialog显示隐藏
      dialogNum: 0, //0 表示用户名   1 表示婴儿    2表示 儿童
      retiredFlag:false  //退改签 显示隐藏
    },
    mutations: {
        dialogHide(state) {
            state.dialogFlag = false;
        },
        dialogShow(state, num) {
            state.dialogFlag = true;
            state.dialogNum = num;
            console.log(state.dialogNum)
        },
        retiredHide(state) {
          state.retiredFlag = false;
        },
        retiredShow(state) {
          state.retiredFlag = true;
        }
    },
    getters: {
        // goCityData: state => state.goCityData
    },
    action: {

    }
}
