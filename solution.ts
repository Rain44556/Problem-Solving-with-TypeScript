const formatValue = (
  value: string | number | boolean
): string | number | boolean => {
  if (typeof value === "string") {
    const upperCase = value.toUpperCase();
    return upperCase;
  } else if (typeof value === "number") {
    const multiNumber = value * 10;
    return multiNumber;
  } else {
    const oppositeValue = value ? false : true;
    return oppositeValue;
  }
};


const getLength = (value: string | number[]): number =>{
if(typeof value === "string"){
    const numOfChar = value.length;
    return numOfChar;
}else{
    const numOfElement = value.length;
    return numOfElement;
}
}


class Person {
  name: string;
  age: number;
  
  constructor( name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    const personNameAge = `'Name: ${this.name}, Age: ${this.age}';`;
    return personNameAge;
  }
}


type Item = {
  title: string; 
  rating: number;
} 

const books  = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];
 
const filterByRating = ( books : Item[]): Item[] =>  {
  const filter = books.filter(book => book.rating >= 4);
  return filter;
}


type User = {
  id: number; 
  name: string;
  email: string;
  isActive: boolean;
} 

const users: User[] = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

const filterActiveUsers = (users: User[]) : User[] =>{
  const activeUser = users.filter(user => user.isActive === true);
  return activeUser;
}


interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true ,
};

const printBookDetails = (myBook: Book) =>{
    console.log(`Title: ${myBook.title}, Author: ${myBook.author}, Published: ${myBook.publishedYear}, Available: ${myBook.isAvailable ? "Yes" : "No"}`);
}


type Value = number | string;
type ObjType = {
  [key:number]: number
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const getUniqueValues = (array1: Value[], array2: Value[]): number[] => {
  const uniqueArr: number[] = [];
  const obj: ObjType = {};

  const formatData = (num: number | string) => {
    if (typeof num === "string") {
      return parseInt(num);
    }
    return num;
  };

  for (let i = 0; i < array1.length; i++) {
    const curr: number = formatData(array1[i]);

    if (!obj[curr]) {
      uniqueArr.push(curr);
    }
    obj[curr] = 1;
  }

  for (let i = 0; i < array2.length; i++) {
    const curr: number = formatData(array2[i]);

    if (!obj[curr]) {
      uniqueArr.push(curr);
    }
    obj[curr] = 1;
  }
  return uniqueArr;
};



type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}; 

type ProductWithOut = Omit<Product, "discount">;

const products = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];

const calculateTotalPrice = (products: Product[]): number => {
  let totalPrice = 0;
  const productsTotalPrice = products.map((elem) => {
    let productPrice = elem.price * elem.quantity;
    let finalPrice = productPrice;
    if (elem.discount) {
      let discount = (productPrice * elem.discount) / 100;
      finalPrice = productPrice - discount;
    }
    return finalPrice;
  });
  productsTotalPrice.forEach((price) => (totalPrice += price));
  return totalPrice;
};