let cyy=document.querySelectorAll(".cyy")
// console.log(cyy);
cyy[1].onclick=function(){
  // let c=eve.target
  // console.log(c);
  cyy[1].classList.add('active');
  console.log('1');
}
cyy.forEach((v,k) => {
  cyy[k].onclick=function(){
    // let c=eve.target
    // console.log(c);
    cyy[k].classList.add('active');
    let sb = this.parentNode.children //查找所有节点
    for (let o = 0; o < sb.length; o++) {
      if (sb[o].nodeType === 1 && sb[o] !== this) { //剔除自己
        sb[o].classList.remove('active') //操作
      }
    }
  }
});


axios.get('./goods.json').then(data => {
  let html = '';
  JSON.parse(data).forEach(goods => {
    // console.log(goods.herff);
    // console.log(goods);
    html =
      `<div data-v-381dda6a="" data-v-70283663="" class="sale-btn"
      onclick="addCarts(${goods.id},'${goods.name}','${goods.src}','${goods.price}',1)"><a data-v-381dda6a=""
        class="btn btn-primary" data-spm="product_14999.add_cart.1" href="./购物车.html"
        data-params="&quot;&quot;">加入购物车</a>
    </div>`;
  })
  $('#box2').innerHTML = html;
})

// function addCarts(id, name, src, price, num) {
//   let cartGoods = localStorage.getItem('cart')
//   // console.log(cartGoods); 所有数据
//   if (cartGoods) {
//     cartGoods = JSON.parse(cartGoods);
//     // console.log(cartGoods); 转化之后的数据
//     let exists = false;
//     cartGoods.forEach(v => {
//       //遍历数组，点击返回该条数据
//       if (v.id == id) {
//         v.num = v.num - 0 + (num - 0)
//         exists = true;
//         // console.log(v); 
//       }
//     })
//     if (!exists) {
//       cartGoods.push({
//         id,
//         name,
//         src,
//         price,
//         num
//       })
      
//     }

//     localStorage.setItem('cart', JSON.stringify(cartGoods))
//   } else {
//     let tmpGoods = {
//       id,
//       name,
//       src,
//       price,
//       num
//     };
//     let goodsArr = [tmpGoods];
//     localStorage.setItem('cart', JSON.stringify(goodsArr))
//   }
// }
function $ (tag) {
  return document.querySelector(tag)
}