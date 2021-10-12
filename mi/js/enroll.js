class enroll{
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
     this.yz=this.$$('#yanzheng')
     // 绑定获取鼠标焦点
    //  this.user.addEventListener('focus', this.userFn.bind(this));
    //  this.user.addEventListener('blur', this.userrFn.bind(this));
    //  this.pwd.addEventListener('focus', this.pwdFn.bind(this));
     this.pwd.addEventListener('blur', this.pwddFn.bind(this));
     this.yz.addEventListener('blur', this.yzFn.bind(this));
     //获取注册按钮
     this.btn=this.$$("#btn")
     this.btn.addEventListener('click', this.btnFn.bind(this));
  }

  pwddFn(f){
     let pwdk=this.pwd.value;
     if(!pwdk){
      this.pwd.style.background='#fcf2f3'
    }
    let reg=/^1[3578]{1}\d{9}/;
    if(reg.test(pwdk)){
      this.pwdkk.innerHTML = `<span style='color:green'>用户名可以使用</span>`;
      if(f==1){
        this.yzFn(1);
      }
    }else{
      this.pwdkk.innerHTML = `<span>用户名不符合规则</span>`;
    }
  }
  yzFn(f){
  let yzk=this.yz.value;
  if(!yzk){
    this.yz.style.background='#fcf2f3'
  }
  let reg=/[a-zA-Z_0-9]\w{5,16}/
  if(reg.test(yzk)){
    this.userr.innerHTML = `<span style='color:green'>可以使用</span>`;
    if(f==1){
      // console.log('t');
      axios.get('./register.json').then(data => {
        JSON.parse(data).forEach(p => {
          let u=p.pwd
          if(u==yzk){
            // console.log(1);
          }else{
            // console.log('添加');     
            // console.log(JSON.parse(data));  
            // JSON.parse(data).attr('name','hqx')
          }
        })
      })
    }
  }else{
    this.userr.innerHTML = `<span>长度6-16位</span>`;
  }
}
  btnFn(){
  this.pwddFn(1);
  location.href='./register.html'
}



  enterFn() {
    this.ewm.style.opacity= 1
    this.popover($("[data-toggle='idea-popover']"))
  }
  levenFn(){
    this.ewm.style.opacity= .4
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
}
new enroll;