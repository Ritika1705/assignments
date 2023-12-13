/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  
  var mp = new Map();
  var len = transactions.length;

  for(var i=0;i<len;i++)
  {
     var cat = transactions[i].category;
     var price = transactions[i].price;

     mp.set(cat , mp.get(cat) + price || price);
  }

  var result = [];
  
  for (let [key, value] of mp) {
    let obj = {category: key, totalSpent: value};
    result.push(obj);
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
