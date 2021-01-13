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

      for (let i = 0; i < numbers.length; i ++) {
        let isTrue = false;
        
        for (let j = i + 1; j < numbers.length; j++) {
          if (numbers[i] > numbers[j]) isTrue = true;
          else {
            isTrue = false;
            break;
          }
        }
        if (isTrue === true) building.push(numbers[i]);
      }
      building.push(numbers[numbers.length - 1]);
      return building.length;
    }

    console.log(west(splittedNums));

});