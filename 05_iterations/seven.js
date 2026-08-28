const myNumber = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumber.map((num) => num + 10)
// const newNums = myNumber.map((num) =>{ return num + 10}) if your are opening scope means num + 10 ko {}isme likh rhe ho toh return likhna hi hoga

const newNums = myNumber.map((num) => num * 10) .map( (num) => num + 1).filter((num) => num>=40)
console.log(newNums);