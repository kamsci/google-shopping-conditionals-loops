var data = require('../products.json');

// console.log(data[0]);  //undefined
// console.log(data.items[0]); //prints an item

// console.log(typeof data); //var data == object
// console.log(typeof "hi"); //string

/* 1.) Go through the items and find all results that have kind of
shopping#product. Print the count of these results.
Where else is this count information stored in the search results?
*/

// var itemCount = 0;

// for (var i = 0; i < data.items.length; i++) {
//   if (data.items[i].kind === 'shopping#product' {
//     itemCount++;
//   }
// }
// console.log(itemCount);

// 2.a) Print the title all items with a backorder availability in inventories.

// var itemCount = 0;

// for (var i = 0; i < data.items.length; i++) {
//   if (data.items[i].product.inventories[0].availability === 'backorder') {
//     itemCount++;
//     console.log(data.items[i].product.title);
//   }
// }

// 2.b) If there were more than 1 inventory itemin the inventory array
// you would need a nested loop.


for (var i = 0; i < data.items.length; i++) {
  for (var j = 0; j < data.items[i].product.inventories.length; j++) {
    if (data.items[i].product.inventories[j].availability === 'backorder') {
      console.log(data.items[i].product.title);
    }
  }
}
// 3.) Print the title all items with more than one image link.

// for (var i = 0; i < data.items.length; i++) {
//   if (data.items[i].product.images.length > 1) {
//     console.log(data.items[i].product.title);
//   }
// }

// 4.) Print all "Cannon" products in the items (careful with case sensitivity).


// for (var i = 0; i < data.items.length; i++) {
//   if (data.items[i].product.brand === 'Canon') {
//     console.log(data.items[i].product.title);
//   }
// }

// 5.) Print all items that have an author name of "eBay" and are brand "Canon".

// for (var i = 0; i < data.items.length; i++) {
//   if (data.items[i].product.brand === 'Canon' && data.items[i].product.author.name === 'eBay') {
//     console.log(data.items[i].product.title);
//   }
// }


// 6.) Print all the products with their brand, price, and an image link

// for (var i = 0; i < data.items.length; i++) {
//   console.log(data.items[i].product.title);
//   console.log(data.items[i].product.brand);
//   console.log(data.items[i].product.inventories[0].price);
//   console.log(data.items[i].product.images[0]);
//   console.log(' ');
// }
