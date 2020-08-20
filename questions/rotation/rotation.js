const failTestStr1 = 'amazon';
const failTestSt2 = 'azonma';
//false
const passTestStr1 = 'amazon';
const passTestStr2 = 'azonam';
//true
/*
const alphabetizer = (a,b) => {
  if(a > b) return 1;
  if(b > a) return -1;
  return 0;
};


const alphabetizer = (text) => text.split('').sort().join();
  

const rotation = (str1, str2) => {

  if(str1.length !== str2.length){
    return false;
  }


  const strA = alphabetizer(str1);
  const strB = alphabetizer(str2);
  if( strA !== strB ) return false;
  return true;

};
*/

/*
    that sucked. to find out 
*/

const rotation = (str1,str2) => {
  if(str1.length !== str2.length){
    return false;
  } 
  const l = str2.length; 

  for(let i = 0; i < l ; i++){
    str2 = `${str2.substr(l-1)}${str2.substr(0 ,l-1)}`;
    if(str2.toLowerCase() === str1.toLowerCase()) return true; 
  }
  return false;
};

console.log(rotation(failTestStr1,failTestSt2), 'should be false');

console.log(rotation(passTestStr1,passTestStr2),'should return true');