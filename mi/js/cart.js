class Carts {
  constructor(){
    this.getCartGoods();
    // 获取全选按钮，且绑定点击事件
    this.allChec=document.querySelectorAll('.check-col1');
    this.oneChec=document.querySelectorAll('.check-one1');
    // console.log(this.allChec,this.oneChec);
    // this.allChec.addEventListener('click', this.allCCFn(this.eve))
    // console.log(this.allCCFn());
    this.allChec[0].addEventListener('click', this.allCCFn.bind(this))
    // this.allChec[1].addEventListener('click', this.allCCFn.bind(this, 0));
    this.oneFn();
    // 获取数量input
    // this.int=document.querySelectorAll('.goods-num')
    // console.log(this.int);
    // this.int.addEventListener('blur',this.tbFn.bind(this))
    this.$('.body').addEventListener('click', this.tbodyFn.bind(this))
    this.goodsnum=document.querySelectorAll('.goods-num')
    // console.log(this.goodsnum.length);
    // this.goodsnum.addEventListener('blur',this.blurfn.bind(this))
    // console.log(this.hhh('.goods-num').length);
    for (let i = 0; i < this.goodsnum.length; i++) {
      this.hhh('.goods-num')[i].addEventListener('blur',this.blurfn.bind(this)) 
    }
  }
  //更新local
  modLocal(goodsId,num=0){
    // 获取local数据
    let god = localStorage.getItem('cart');
    // 无数据则清空
    if (!god) return;
    god = JSON.parse(god);
    // console.log(god);
    god.forEach((goods, index) => {
      // console.log(goodsId == goods.id);
      // console.log(goodsId);
      if (goodsId == goods.id) {
        if (num) {goods.num = num; 
          // console.log(goodsId == goods.id);
         }// 修改数量
        else {  // 删除当前商品
          god.splice(index, 1)
          // console.log("3");
        }
      }
    });
    // console.log(god);
    localStorage.setItem('cart', JSON.stringify(god))
    // console.log(god);
  }
  tbodyFn(eve){
     if(eve.target.className=='delete'){
      this.deleteFn(eve.target)
    }
  }9
  deleteFn (tar) {
    // console.log(tar);
    // console.log(tar.parentNode.parentNode.parentNode);
    let trObj = tar.parentNode.parentNode.parentNode;
    console.log(trObj);
    let id = trObj.getAttribute('goods-id');
    let that = this;
    // console.log(id);
    // 弹出框,是否删除
    layer.confirm('是否删除？', {
      btn: ['确定', '取消'] //按钮
    }, function (index) {
      layer.close(index);
      // console.log(this); 
      // 当前商品选中,则更新数量
      trObj.remove();
      if ((trObj.children)[0].firstElementChild.checked) {
        that.totalNP(document.querySelectorAll('.check-one'))
      }
      // 更新local中的数据
      that.modLocal(id);
      // console.log(id);
    });


  }
   // 统计数量和价格
   totalNP (oneObj = '') {
    // 删除的时候,重新获取check-one数据
    this.oneChec = oneObj || this.oneChec;
    // console.log(this.oneChec);
    let totalNum = 0;
    let totalPrice = 0;
    // 1 循环商品,找出选中的
    this.oneChec.forEach(goods => {
      // console.log(goods);
      // console.log(goods.checked);
      if (goods.checked) {  // 判断选中的商品
        let goodsTrObj = goods.parentNode.parentNode;
        // console.log(goodsTrObj);
        let num = goodsTrObj.querySelector('.goods-num').value - 0;
        let subT = goodsTrObj.querySelector('.col-total').innerHTML-0;
        // console.log(subT);
        //  console.log(num, subT);
        totalNum += num;
        totalPrice += subT;
        // console.log(totalPrice);
      }
    });
    // console.log(totalNum, totalPrice);

    // 显示到总计
    this.$('.cart-total').innerHTML = totalNum;
    this.$('.total-price').innerHTML = totalPrice;
  }
  addFn(tar){
    let numObj=tar.previousElementSibling;
    let num=numObj.value
  }
  //全选遍历实现
  allCCFn(eve){
    // console.log(this);
    // console.log(eve.target);
    // console.log(eve.target.checked);
    let allStatus = eve.target.checked;
    // // console.log(allStatus);
    this.oneChec.forEach(check=>{
      check.checked=allStatus
    });
    this.totalNP();
  }
  //单个商品选中事件
  oneFn(){
    let that=this;
    let checkNum = 0;
    let len = this.oneChec.length;
    this.oneChec.forEach((one, key) => {
      // console.log(one.checked);
      one.checked && checkNum++;
      one.onclick = function () {
        // console.log(this.checked);
        if (this.checked) {
          // 选取当前处于选中状态按钮
          checkNum++
          // console.log(checkNum);
          // console.log(key);
          // 让全选选中
          checkNum == len && (that.allChec[0].checked = true);
        } else {
          checkNum--;
          // 取消全选
          that.allChec[0].checked = false;
          // that.allChec[1].checked = false;
        }
        that.totalNP();
      }
    })
  }
  
  getCartGoods(){
    let cartG=localStorage.getItem('cart');
    // console.log(cartG);
    let html=''
    JSON.parse(cartG).forEach(data => {
      html+=`  <div goods-id=${data.id}>
      <div class="item-row clearfix">
        <div class="col-check"><input type="checkbox" class='check-one1'></div>
        <div class="col-img"><a href="javascript:void(0)"><img alt=""
              src="${data.src}"
              width="70" height="70"></a></div>
        <div class="col-name">
          <h4 class="name"><a href="javascript:void(0)">${data.name}</a></h4>
        </div>
        <div class="col-price">${data.price}元
        </div>
        <div class="col-num">
          <input type="text" autocomplete="off" class="goods-num"
           value="${data.num}">
        </div>
        <div class="col-total">${data.price * data.num}
        </div>
        <div class="col-action"><span class="delete">删除</span></div>
      </div>
    </div>`
    });
    this.$('.body').innerHTML = html;
  }
  blurfn(eve){
    this.blur(eve.target)
   }
   blur(tar){
     let trObj = tar.parentNode.parentNode.parentNode;
     console.log(trObj);
     // let val=this.hhh('.goods-num')[0].value
    //  let val=this.$('.goods-num').value
    let val=tar.value
     // console.log(val);
     console.log(val);
     let id = trObj.getAttribute('goods-id');
     this.modLocal(id,val)
     location.reload();
   }
  $ (tag) {
    return document.querySelector(tag);
  }
  hhh(tag){
    return document.querySelectorAll(tag);
  }
 }
 new Carts;
