function mdArray(array) {
const subArray1 = prompt("Enter your Name : ").split(",");
const subArray2 = prompt("Enter your age : ").split(",").map(Number);

const restructuredArray = [];
for (let i = 0; i < subArray1.length; i++) {
  restructuredArray.push([subArray1[i], subArray2[i]]);
}

alert(restructuredArray);
}