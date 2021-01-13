const fs = require('fs');

const fileName = process.argv[2];

fs.readFile(fileName, 'utf8', (error, data) => {
    if (error) {
      console.error(error.message);
      return;
    }
    const splittedNums = data.split(" ").map(element => parseInt(element, 10));
    
    const sum = (numbers, k) => {
      let isTrue = false;
      for (let i = 0; i < numbers.length; i ++) {
        for (let j = 0; j < numbers.length; j++) {
          if (numbers[i] + numbers[j] == k && i !== j) isTrue = true;
        }
      }
      return isTrue;
    }

    console.log(sum(splittedNums, 10));

});