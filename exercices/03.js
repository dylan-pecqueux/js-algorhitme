const fs = require('fs');

const fileName = process.argv[2];

fs.readFile(fileName, 'utf8', (error, data) => {
    if (error) {
      console.error(error.message);
      return;
    }
    const splittedNums = data.split(" ").map(element => parseInt(element, 10));
    
    const sum = (numbers, k) => {
      let i = 0
      let j = 1;

      while (i < numbers.length) {
      
        if (numbers[i] + numbers[j] == k && i !== j){
          return true;
        } 
        else {
          j ++;
        }
         
        if (j >= numbers.length){
          i ++;
          j = i + 1;
        } 
      }
      return false;
    }

    console.log(sum(splittedNums, 18));

});