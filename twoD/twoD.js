const test = [
  [1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]
];
/*
    goal
   [0,0,0,0,0],
   [0,0,0,0,0],
   [0,0,1,1,0],
   [0,0,0,0,0],
   [0,0,1,1,0]
*/
/*
    for t[x][x]
    if t[x][...x] || t[...x][x] has 0
        print 0 in new t[x][x]
    else
        print 1 in new t[x][x]
*/

const rowFix = test => {
  let res = [];


  for(let i = 0 ; i < test.length ; i++){
    res.push([]);
    for(let j = 0 ; j < test[i].length ; j++ ){
      res[i].push(1);
    }
  }
  for(let i = 0 ; i < test.length ; i++){
    for(let j = 0 ; j < test[i].length ; j++ ){
      if(test[i][j] === 0 ){
        let x = i;
        let y = 0;
        while(x < test.length){
          res[x][j] = 0;
          x++;
        }
        while(y < test[i].length){
          res[i][y] = 0;
          y++;
        } 
      }
    }
  }
  return res; 
};


console.log(rowFix(test));