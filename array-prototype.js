// ---------------------
// arrary length prototype
const arr = [2, 5, 6, 7, 4];
console.log(arr.length);
// expected output 5
// ------------------------------------
// array prototype at()
let index = 4;
console.log(
  "using at method we can going to direct index value",
  arr.at(index)
);
// expected output 4
// ------------------------------------
//array prototype concat()
const arr1 = ["Ankit", "Satoniya"];
const arr2 = arr.concat(arr1);
console.log(arr2);
//expected [2, 5, 6, 7, 4, 'Ankit', 'Satoniya']
// -------------------------------
//array prototype entries()
const itration1 = arr1.entries();
console.log(itration1.next().value);
// ------------------------------------
//array prototype every()
const isBelowThreshold = (currentValue) => currentValue < 40;
console.log(arr.every(isBelowThreshold));
//expected  output true
// ------------------------------------
//array prototype fill()
console.log(arr.fill(0, 2, 4));
console.log(arr.fill(1, 5));
//expected output 2 5 0 0 4
//expected output 2 5 0 0 4
// ----------------------------------
//arrary prototype filter
const arr3 = ["Ankit", "satoniya"];
const result = arr3.filter((word) => arr3.length > 6);
console.log(result);
//expected output ["satoniya"]
// ________________________________
//array prototype find()
const find = arr.find((element) => element > 4);
console.log(find);
// expected output 5
// array prototype findIndex
const isLargeNumber = (element) => element > 13;
console.log(arr.findIndex(isLargeNumber));
// expected output: 3
//array prototype flat()
const arr4 = [0, 1, 2, [3, 4]];
console.log(arr4.flat());
// expected output: [0, 1, 2, 3, 4]
//array prototype from
console.log(Array.from("foo"));
// expected output: Array ["f", "o", "o"]
console.log(Array.from([1, 2, 3], (x) => x + x));
// expected output: Array [2, 4, 6]
//includes prototype includes()
console.log(arr.includes(2));
//expected true
//array prototype indexOf()
console.log(arr3.indexOf("Ankit"));
// expected output: 0
//from()
console.log(Array.from("Ankit"));

//join()
console.log(arr2.join());

//keys()
const array1 = ["a", "b", "c"];
const iterator1 = array1.keys();

for (const key of iterator1) {
  console.log(key);
}

//lastIndex
console.log(arr2.lastIndexOf("2"));

//map
const result2 = arr1.map((x) => x * 2);
console.log(result2);

//Array of
console.log(Array.of(1, 2, 3));

//pop
console.log(arr1.pop());
console.log(arr1.pop());

//push
console.log(arr2.push("5"));
console.log(car2.push("6"));
console.log(car2.push(new Date()));

//reduce
const reducer = (previousValue, currentValue) => previousValue + currentValue;
console.log(arr1.reduce(reducer));

//reverse
console.log(arr2.reverse());

//shift
console.log(arr2.shift());

//slice
console.log(arr2.slice(3, 5));

//some
console.log(arr2.some(checkpass));

//sort
console.log(arr2.sort());

//splice
console.log(arr1.splice(0, 2, "Ankit", "Satoniya"));

//toLocalString
const array2 = [1, "a", new Date("21 Dec 1997 14:12:00 UTC")];
const localeString = array2.toLocaleString("en", {timeZone: "UTC"});

console.log(localeString);

//toString
console.log(arr1.toString());

//unshift
console.log(arr1.unshift(6, 7));
