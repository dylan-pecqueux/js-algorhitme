const fs = require('fs');

const fileName = process.argv[2];

fs.readFile(fileName, 'utf8', (error, data) => {
    if (error) {
      console.error(error.message);
      return;
    }
    const splittedNums = data.split(" ").map(element => parseInt(element, 10));

    const west = (numbers) => {
      let building = [];
      let i = 0
      let isTrue = false;
      let j = 1;

      while (i < numbers.length) {
        isTrue = false;
      
        if (numbers[i] > numbers[j]){
          isTrue = true;
          j ++;
        } 
        else {
          isTrue = false;
          i ++;
          j = i + 1;
        }
         
        if (isTrue === true && j >= numbers.length){
          building.push(numbers[i]);
          i ++;
          j = i + 1;
        } 
      }
      building.push(numbers[numbers.length - 1]);
      return building.length;
    }

    console.log(west(splittedNums));

});