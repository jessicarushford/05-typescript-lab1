import { Mountain } from "./models/Mountain";

const mountains: Mountain[] = [
  {
    name: "Kilimanjaro",
    height: 19341,
  },
  {
    name: "Everest",
    height: 29029,
  },
  {
    name: "Denali",
    height: 20310,
  },
];

const findNameOfTallestMountain = (array: Mountain[]): string => {
  if (array.length === 0) {
    return "";
  } else {
    let currentTallestMountain: Mountain = array[0];
    array.forEach((item) => {
      if (item.height > currentTallestMountain.height) {
        currentTallestMountain = item;
      }
    });
    return currentTallestMountain.name;
  }
};

console.log("Everest", findNameOfTallestMountain(mountains));
console.log("Empty array", findNameOfTallestMountain([]));
