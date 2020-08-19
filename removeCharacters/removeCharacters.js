const testString = 'Battle of the Vowels: Hawaii vs. Grozny';
const testToRemove = 'aeiou';





const wordRemoval = (str,reg) =>{
  let res = '';

  for(let i = 0 ; i < str.length ; i++){
    let j = 0; 
    let on = true; 
    while( on ){

      if((j + 1) === reg.length && str[i] !== reg[j] ){ res += str[i] , on = !on ;}

      if(str[i] !== reg[j]){j++;}else{on = !on;}

    }
  }
  return res;
};

// console.log(wordRemoval(testString,testToRemove));

console.log(wordRemoval(testString,testToRemove));
