 /*
 =================================================================
   Problem 1: Let's play a mind game
 =================================================================
   This function 'mindGame' shows us the basic four mathematical 
   operations for any 'number' type data. It warns if the input 
   data is different.
 -----------------------------------------------------------------
 */
function mindGame(number){
    if(typeof number !== 'number'){
      const notice = 'Your data is not valid here. Please, input correct type of data.';
      return notice;
    }
    const multiply = number * 3;
    const add = multiply + 10;
    const divide = add / 2;
    const subtractFinal = divide - 5;

    return subtractFinal;
}
// const myNumber = 5;
// const result = mindGame(myNumber);
// console.log(result);
/*
 ===============================
   Function of Problem 1: done
 ===============================
*/


/*
 ===================================================================
   Problem 2: Finding even or odd
 ===================================================================
   This function 'evenOdd' determines whether the length of an input
   'string' is even or odd. It can't show result for data other 
   than 'string'.
 -------------------------------------------------------------------
*/
function evenOdd(myString){
  if(typeof myString !== 'string'){
    const notice = 'You are using wrong type of data. Only "string" is allowed.';
    return notice;
  }
  if(myString.length % 2 === 0){
    return 'even';
  }else{
    return 'odd';
  }
}
// const typeStr = 'tanvir ahmed';
// const check = evenOdd(typeStr);
// console.log(check);
/*
 ===============================
   Function of Problem 2: done
 ===============================
*/


/*
 ==================================================================
   Problem 3: Is Less or Greater than seven
 ==================================================================
   'isLGSeven' is a 'number' type data input function. It subtracts 
   7 from the input number.Then compares the result with 7.
   If the result is smaller, it returns the result. Otherwise, it
   returns two times of the result.
 ----------------------------------------------------------------- -
*/
function isLGSeven(number){
  if(typeof number !== 'number'){
    const notice = 'Any data other than "number" type is not applicable here. Please, try again with "number" type data.';
    return notice;
  }
  const subtractNum = number - 7;
  if(subtractNum < 7){
    return subtractNum;
  }else{
    const doubleNum = number * 2;
    return doubleNum;
  }
}
// const ourNumber = 6;
// const numberDifference = isLGSeven(ourNumber);
// console.log(numberDifference);
/*
 ===============================
   Function of Problem 3: done
 ===============================
*/


/*
 =================================================================
   Problem 4: Finding Bad Data
 =================================================================
   This function 'findingBadData' filters the given ages from an 
   input array. It recognizes the invalid age data as 'bad data' and
   stores all the 'bad datas' in a new array. Then shows the length 
   of that array. Only "array" is valid here as input.
 ------------------------------------------------------------------
*/
function findingBadData(ageArr){
     const checkData = Array.isArray(ageArr);  
     if(checkData === false){
       const notice = 'Your data cannot be processed here. It does not allow anything other than "array".';
       return notice;
     }
     const badData = [];
     for(let i = 0; i < ageArr.length; i++){
       const element = ageArr[i];
       if(element < 0){
           badData.push(element);   
       }
      }
      const badDataLength = badData.length;
      return badDataLength;
}
// const friendsAge = [12, 15, -12, -13, -4, 7, 0, -3, -5, -3, -6];
// const badDataNum = findingBadData(friendsAge);
// console.log(badDataNum);
/*
 ===============================
   Function of Problem 4: done
 ===============================
*/


/*
 ===================================================================
   Problem 5: Convert your gems into diamond
 ===================================================================
   This function 'gemsToDiamond' is three 'argument' based function.
   It coverts it's input 'gem' into 'diamond' according to their 
   power. Then takes the sum of 'diamond' numbers and retuns it as 
   per condition. It allows only 'number' data combinedly for all 
   three arguments.
 -------------------------------------------------------------------
*/
function gemsToDiamond(firstFr, secondFr, thirdFr){
  if((typeof firstFr !== 'number') || (typeof secondFr !== 'number') || (typeof thirdFr !== 'number')){
    const notice = 'You inserted incorrect type of data. Please, input correct type for all three arguments.';
    return notice;
  }
    const firstFrGemsPower = 21;
    const secondFrGemsPower = 32;
    const thirdFrGemsPower = 43;

    const firstFrDiamond = firstFr * firstFrGemsPower;
    const secondFrDiamond = secondFr * secondFrGemsPower;
    const thirdFrDiamond = thirdFr * thirdFrGemsPower;
    const totalDiamond = firstFrDiamond + secondFrDiamond + thirdFrDiamond;

    if(totalDiamond >= 2000){
         const subtractFromTotal = totalDiamond - 2000;
         return subtractFromTotal;
    }else{
         return totalDiamond;
    }
}
// const firstFrGems = 3;
// const secondFrGems = 5;
// const thirdFrGems = 7;
// const sumTotal = gemsToDiamond(firstFrGems, secondFrGems, thirdFrGems);
// console.log(sumTotal);
/*
 ===============================
   Function of Problem 5: done
 ===============================
*/ 