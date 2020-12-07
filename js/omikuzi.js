'use strict';

document.getElementById('btn')
.addEventListener('click', () => {
  let randomNumber = Math.floor(Math.random() * 18 + 1);
  /*Math.random()関数は、0–1（0以上、1未満）の範囲で浮動小数点の擬似乱数を返します。
  Math.floor() メソッドは、引数として与えた数以下の最大の整数を返します。
  なので、「Math.random()×6」で「0から6」 までの数字が生成されます。
  これに、１を足し、「Math.floor()」で切り捨てる事で、１から６の整数がほぼ同確率で生成されます。*/

  const image = document.getElementsByClassName('kuzi')[0];
  image.setAttribute('src', 'randomimages/EMTagQSUwAA0nKo' + randomNumber + '.jpeg'); 
  //.setAttributeでimgタグに要素を追加する
})



