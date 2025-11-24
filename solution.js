// const formatValue = (
//   value: string | number | boolean
// ): string | number | boolean => {
//   if (typeof value === "string") {
//     const upperCase = value.toUpperCase();
//     return upperCase;
//   } else if (typeof value === "number") {
//     const multiNumber = value * 10;
//     return multiNumber;
//   } else {
//     const oppositeValue = value ? false : true;
//     return oppositeValue;
//   }
// };
var array1 = [1, "2", 2, 4, 6, 3, 4, 5, 9, 10, 11,];
var array2 = ["3", 4, 5, 6, 7, "0", 4, 7, "6"];
var getUniqueValues = function (array1, array2) {
    var uniqueArr = [];
    var obj = {};
    var formatData = function (num) {
        if (typeof num === "string") {
            return parseInt(num);
        }
        return num;
    };
    for (var i = 0; i < array1.length; i++) {
        var curr = formatData(array1[i]);
        if (!obj[curr]) {
            uniqueArr.push(curr);
        }
        obj[curr] = 1;
    }
    for (var i = 0; i < array2.length; i++) {
        var curr = formatData(array2[i]);
        if (!obj[curr]) {
            uniqueArr.push(curr);
        }
        obj[curr] = 1;
    }
    console.log(array1);
    return 1;
};
console.log(getUniqueValues(array1, array2));
// type Product = {
//   name: string;
//   price: number;
//   quantity: number;
//   discount?: number;
// }; 
// type ProductWithOut = Omit<Product, "discount">;
// const products = [
//   { name: "Pen", price: 10, quantity: 2 },
//   { name: "Notebook", price: 25, quantity: 3, discount: 10 },
//   { name: "Bag", price: 50, quantity: 1, discount: 20 },
// ];
// const calculateTotalPrice = (products: Product[]): number => {
//   let totalPrice = 0;
//   const productsTotalPrice = products.map((elem) => {
//     let productPrice = elem.price * elem.quantity;
//     let finalPrice = productPrice;
//     if (elem.discount) {
//       let discount = (productPrice * elem.discount) / 100;
//       finalPrice = productPrice - discount;
//     }
//     return finalPrice;
//   });
//   productsTotalPrice.forEach((price) => (totalPrice += price));
//   return totalPrice;
// };
