class Register{
  constructor(){
  // 获取节点
    this.ewm=this.$$('.erweima');
    // 绑定鼠标移入移出事件
    this.ewm.addEventListener('mouseenter', this.enterFn.bind(this));
    this.ewm.addEventListener('mouseleave', this.levenFn.bind(this));
    // 获取表单节点
    this.user=this.$$('#user')
    this.pwd=this.$$('#password')
    this.userr=this.$$('#uerss')
    this.pwdkk=this.$$('#pwdk')
    // 绑定获取鼠标焦点
    this.user.addEventListener('focus', this.userFn.bind(this));
    this.user.addEventListener('blur', this.userrFn.bind(this));
    this.pwd.addEventListener('focus', this.pwdFn.bind(this));
    this.pwd.addEventListener('blur', this.pwddFn.bind(this));
    //获取登录按钮
    this.btn=this.$$("#btn")
    this.btn.addEventListener('click', this.btnFn.bind(this));
  }
  btnFn(){
    this.pwddFn(1);
    // this.userrFn(1);
    // console.log();
    // console.log(u==pwdk);
    // window.open("./indexs.html");
  }
  pwdFn(){
    // console.log('获取pwd');
  }
  pwddFn(text){
    // console.log('失去pwd');
    let pwdk=this.pwd.value
    // console.log(pwdk);
    if(!pwdk){
      this.pwd.style.background='#fcf2f3'
      // console.log(this.pwd);
      // this.pwd.creatElement('p')
      // ('this.pwd').innerHTML = html
    }
   
    axios.get('./register.json').then(data => {
      // let html = '';
      JSON.parse(data).forEach(user => {
       let u=user.pwd
      //  console.log(u);
      // console.log(pwdk);  
      if(u==pwdk){
        // console.log('密码正确');
      }else{
        this.pwdkk.innerHTML = `<span>密码错误</span>`;
      }
      })
      JSON.parse(data).forEach(user => {
        let u=user.pwd
       //  console.log(u);
       // console.log(pwdk);  
       if(u==pwdk){
        //  console.log('密码正确');
        this.pwdkk.innerHTML = "";
        if(text==1){
          // location.href="./indexs.html";
          this.userrFn(1)
        }
       }
       })
    })
  }
  userFn(){
    // console.log('获取user');
    this.userr.innerHTML = "";
  }
  userrFn(t){
    // console.log('失去user焦点');
    let userr=this.user.value
    // console.log(pwdk);
    if(!userr){
      this.user.style.background='#fcf2f3'
    }
    axios.get('./register.json').then(data => {
      // let html = '';
      JSON.parse(data).forEach(k => {
       let u=k.user
      //  console.log(u);
      // console.log(pwdk);  
      if(u==userr){
        // console.log('用户名正确');
        // this.userr.innerHTML = "";
      }else{
        this.userr.innerHTML = `<span>用户名不匹配</span>`;
      }
      })
      JSON.parse(data).forEach(k => {
        let u=k.user
        // console.log(u);
       // console.log(pwdk);  
       if(u==userr){
        //  console.log('用户名正确');
         this.userr.innerHTML = "";
         if(t==1){
          location.href="./indexs.html";
        }
       }
       })
      // $('').innerHTML = html;
    })
  }
  enterFn() {
    // console.log(123);
    this.ewm.style.opacity= 1
    // this.popover($("#idea-text"));
    //显示扫码登录
    // console.log($("#idea-text"));
    // console.log($$("#idea-text"));
    // console.log(popover);
    // this.ewm.popover('show')
    // $("#idea-text").popover('show')
    // $('#example').tooltip(options)
    // console.log($("[data-toggle='idea-popover']"));
    // this.popover($("[data-toggle='idea-popover']"))
    this.popover($("[data-toggle='idea-popover']"))
  }
  levenFn(){
    this.ewm.style.opacity= .4
    //扫码登录消失
    // this.popover($("#idea-text"));
    // $("#idea-text").popover('hide')
    // $('[data-toggle="tooltip"]').popovers()
    // console.log($("[data-toggle='idea-popover']"));
    // this.popovers($($("[data-toggle='idea-popover']")))
    this.popovers($("[data-toggle='idea-popover']"))
  }
  popover (sel) {
    sel.popover('show');
  }
  popovers (sel) {
    sel.popover('hide');
  }
  $$(ele) {
      return document.querySelector(ele)
    }
    // $(function () {
      // $('[data-toggle="tooltip"]').tooltip()
    // })
}
new Register;


