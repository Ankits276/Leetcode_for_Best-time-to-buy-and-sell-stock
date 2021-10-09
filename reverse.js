function reverseWord(finalstr) {
  if (typeof finalstr !== "string") {
    return "String is not there";
  }
  let stringsAndNumbers = finalstr.split(/(\d+)/g);
  let finalString = "";
  for (let outerdummy of stringsAndNumbers) {
    let revarray = outerdummy.split("");
    if (typeof outerdummy === "string" && !Number(outerdummy)) {
      finalString = finalString + revarray.reverse().join("");
    } else {
      finalString = finalString + outerdummy;
    }
  }
  return finalString;
}
console.log(reverseWord("true"));
console.log(reverseWord("ABC123EFG"));
