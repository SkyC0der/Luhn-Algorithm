function luhn_check(input){
   let num = input.replace(/\s/g, "");
   if(input.length == 1 && input == 0){
      return true
   }
 
   if (input <= 1 || input.match(/[A-za-z:#$-]/g)) {
     return false;
   }
 
   let luhnNumber = num.split("").map(el => parseInt(el));
 
   for (let i = luhnNumber.length - 2; i >= 0; i -= 2) {
     luhnNumber[i] * 2 > 9
       ? (luhnNumber[i] = luhnNumber[i] * 2 - 9)
       : (luhnNumber[i] = luhnNumber[i] * 2);
   }
 
   return luhnNumber.reduce((a, b) => a + b) % 10 === 0;
 };
console.log(luhn_check('055# 444$ 285'))
module.exports = luhn_check;
