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
      let ref = numbers.length - 1;
      for (let i = numbers.length - 1; i > 0; i--){
        if(numbers[ref] < numbers[i]) {
          building.push(numbers[i]);
          ref = i;
        }
      }
      building.push(numbers[numbers.length - 1]);
      return building.length;
    }

    console.log(west(splittedNums));

});