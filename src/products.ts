import { Product } from "../src/models/Product";

const products: Product[] = [
  {
    name: "pistachios",
    price: 5,
  },
  {
    name: "computer",
    price: 1000,
  },
  {
    name: "glasses",
    price: 120,
  },
];

const calcAverageProductPrice = (array: Product[]): number => {
  let sum = 0;
  if (array.length == 0) {
    return 0;
  } else {
    array.forEach((item) => {
      sum += item.price;
    });
    return sum / array.length;
  }
};

console.log(calcAverageProductPrice([]));
