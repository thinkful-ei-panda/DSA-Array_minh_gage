const urlFixer = str => {
  if(typeof str !== 'string' || str.length < 0){
    return 'the argument being passed is not a string';
  }
  let res = '';
  for(let i = 0 ; i < str.length; i++){
    if(str[i] === ' '){
      res += '%20';
    }else{
      res += str[i];
    }
  }
  return res; 
};

console.log(urlFixer('test string'));