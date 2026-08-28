const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,currval){
//     console.log(`acc:${acc} and currval: ${currval}`);
//     return acc + currval

// },0)

const myTotal = myNums.reduce((acc,curr) => acc+curr,0)
console.log(myTotal);

const shoppingCart = [
    {
     itemName: "Js course",
    price: 5000
    },
    {
     itemName: "web development",
    price: 7000
    },
    {
     itemName: "DSA course",
    price: 8700
    },
]

const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price,0)
console.log(priceToPay);