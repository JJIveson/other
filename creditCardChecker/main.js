// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

// Add your functions below:

/* 
function validateCred(arr) {
  for (let i = arr.length - 2; i >= 0; i -= 2) {
    let multiple = arr[i]*2;
    if(multiple > 9) {
      multiple -=9;
    }
    arr[i] = multiple;
  }
  const sum = arr.reduce((a,b) => {
  return a + b;
  })
  if (sum%10 === 0) {
    return true;
  } else {
    return false;
  }
};
*/

const validateCred = arr => {
  let workingArr = arr.map((i) => i);
  for (let i = workingArr.length - 2; i >= 0; i-=2) {
    let multiple = workingArr[i]*2;
    if (multiple > 9) {
      multiple -= 9;
    }
    workingArr[i] = multiple;
  }
  const sum = workingArr.reduce((a, b) => {
    return a + b;
  })
  if (sum % 10 === 0) {
    return true;
  } else {
    return false;
  }
};
//console.log(validateCred(mystery1));
//console.log(validateCred(mystery2));
//console.log(validateCred(mystery3));
//console.log(validateCred(mystery4));
//console.log(validateCred(mystery5));
let invalidCards = [];
function findInvalidCards(arr2) {
  //let workingArr = arr2.map((i) => i);
    for (let i = 0; i < arr2.length; i++) {
      let returnValue = validateCred(arr2[i]);
      if (returnValue === false) {
        invalidCards.push(arr2[i]);
      }
    }
  return invalidCards;
}
findInvalidCards(batch);
console.log(invalidCards)
//console.log(workingArr)

function idInvalidCardCompanies(arr3) {
  let cardCompanies = [];
  for (let i = 0; i < arr3.length; i ++) {
    //let returnValue2 = findInvalidCards(arr3[i]);
    if (arr3[i][0] === 3) {
      cardCompanies.push('Amex');
    } else if (arr3[i][0] === 4) {
      cardCompanies.push('Visa');
    } else if (arr3[i][0] === 5) {
      cardCompanies.push('MasterCard');
    } else if (arr3[i][0] === 6) {
      cardCompanies.push('Discover');
    } else {
      cardCompanies.push('Error 404: Not found.');
    } 
  }
  let x = (cardCompanies) => cardCompanies.filter((v,i) => cardCompanies.indexOf(v) === i)
  return x(cardCompanies);
}
console.log(idInvalidCardCompanies(invalidCards))
