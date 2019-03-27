

// var colors = prompt(' Укажите цвет телефона: Золотой, Серый или Черный ', '');
//   if (colors == 'Золотой' || colors == 'золотой') {
//     document.write('<img src="img/gold.png">'); 
//   }
//   else if (colors == 'Серый' || colors == 'серый' ){
//     document.write('<img src="img/gray.png">'); 
//   }
//    else if (colors == 'Черный' || colors == 'черный' ){
//     document.write('<img src="img/black.png">'); 
//   }
//   else{
//     alert('Неправильный ввод!');
//   };



//   var a = prompt('Выберите память телефона: 64, 128 или 256');
// if (+a === 64) {
//   document.write('<h1>Цена: 400$</h1>');  
// } else if(+a == 128) {
//   document.write('<h1>Цена: 500$</h1>'); 
// } else if (+a == 256) {
//   document.write('<h1>Цена: 600$</h1>'); 
// }
// else{
//   alert('Неправильный ввод, попробуйте ещё раз'); 
// };



var iphone = [{
    val : 64,
    colors : 'Серый',
    price : 380
  },
  {
    val : 128,
    colors : 'Серый',
    price: 400
  },
  {
    val : 256,
    colors : 'Серый',
    price : 440
  },
  {
    val: 64,
    colors: 'Золотой',
    price:390
  },
  {
    val: 128,
    colors: 'Золотой',
    price: 420
  },
  {
    val: 256,
    colors: 'Золотой',
    price: 460
  },
  {
    val: 64,
    colors: 'Черный',
    price: 400
  },
  {
    val: 128,
    colors: 'Черный',
    price: 430
  },
  {
    val: 256,
    colors: 'Черный',
    price: 470
  }];

  var clrs;
  var price = 0;
  var i;

  clrs: while (true) {
    clrs = prompt('Укажите цвет телефона: Золотой, Серый или Черный ', '');

    if (clrs === null) {
      alert('Пока!');
      break;
    }

    for (var i = 0; i < iphone.length; i++) {
      if (clrs === iphone[i].colors) {
        memory = prompt('Укажите память телефона: 64, 128 или 256', '');
        +memory === iphone[i].val;
        price = iphone[i].price;
        break clrs;
      }
    }
}

document.write('<h1>Price: ' + price + ' $</h1>');

