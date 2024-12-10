/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const outPutMap = {};
  transactions.forEach(
    (trans) =>
      (outPutMap[trans.category] = outPutMap[trans.category]
        ? outPutMap[trans.category] + trans.price
        : trans.price)
  );
  let outputArr = [];
  Object.entries(outPutMap).forEach((categoryPrice) =>
    outputArr.push({ category: categoryPrice[0], totalSpent: categoryPrice[1] })
  );
  return outputArr;
}

module.exports = calculateTotalSpentByCategory;
