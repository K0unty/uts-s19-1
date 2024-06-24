/* 
S19 Work in here 
*/

// console.log("hehe");
// console.table("What is thte main");

// Testing if node can compile ts
let age: number;
age = 5;
console.log(age);

// Write async await function

const getCat = async () => {
  const response = await fetch("https://api.thecatapi.com/v1/images/search");
  const data = await response.json();
  console.log(data);
};
getCat();
