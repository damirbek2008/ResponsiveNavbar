let words = ["Hello","Bye","Welcome","Good  morning","afternoon"]

let filter =words.filter((word) =>word.length >=5 )
let sort =words.sort()
console.log(filter);
console.log(sort);



// let number = [21,21,14,51,61,73,62,51,11]

// let check=number.hasOwnProperty(10)
// console.log(check );


// function isBigEnough(element, index, array){
// return element === 10;
// }
// [21,21,14,51,61,73,62,51,11].every(isBigEnough)
// [10].every(isBigEnough)



const equal = (isEqual) => isEqual=== 10;

const array1 = [21,21,14,51,61,73,62,51,11]
const array2 = [10]
console.log(array1.every(equal));
console.log(array2.every(equal));

function showSidebar(){
    const sidebar =document.querySelector(".sidebar").style.display ="flex"
}

function hideSidebar(){
    const hideSidebar=document.querySelector('.sidebar').style.display ="none"
    
}

