const fs = require('fs');

const fileName = process.argv[2];

fs.readFile(fileName, 'utf8', (error, data) => {
    if (error) {
      console.error(error.message);
      return;
    }
    const splittedFusion = data.split(" ").map(element => parseInt(element, 10));
    const splittedCocktail = [...splittedFusion];
    const splittedComb = [...splittedFusion];
    console.log(splittedFusion);

    let totalFusion = 0;
    
    const fusionSort = (numbers) => {
      if (numbers.length <= 1) return numbers;

      const middle = Math.floor(numbers.length / 2);

      const left = numbers.slice(0, middle);
      const right = numbers.slice(middle);

      return fusionMerge(fusionSort(left), fusionSort(right));
    }

    const fusionMerge = (left, right) => {
      let resultArray = [];
      let leftIndex = 0;
      let rightIndex = 0;

      while (leftIndex < left.length && rightIndex < right.length) {
        totalFusion ++;
        if (left[leftIndex] < right[rightIndex]) {
          resultArray.push(left[leftIndex]);
          leftIndex ++;
        } else {
          resultArray.push(right[rightIndex]);
          rightIndex++;
        }
      }

      return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    }

    const finalFusion = fusionSort(splittedFusion);
    

  const cocktailSort = (arr) => {
    let total = 0;
    let isSorted = true;

    while (isSorted){
        for (let i = 0; i< arr.length - 1;i++){
                total ++;
                if (arr[i] > arr[i + 1])
                {
                    let temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i+1] = temp;
                    isSorted = true;
                }
        }
    
        if (!isSorted) break;
    
        isSorted = false;
    
        for (let j = arr.length - 1; j > 0; j--){
                if (arr[j-1] > arr[j])
                {
                    let temp = arr[j];
                    arr[j] = arr[j - 1];
                    arr[j - 1] = temp;
                    isSorted = true;
                }
        }
    }
    console.log(`Tri cocktail : ${total} comparaisons - ${arr}`);
  }
  
  cocktailSort(splittedCocktail);

  const combSort = (numbers) => {
    let n = numbers.length;
    let total = 0;

    while (n > 1 || change == true) {
      n = n / 1.3;
      if (n < 1) n = 1;
      let i = 0;
      change = false;
      while (i < numbers.length - n) {
        total ++;
        if (numbers[i] > numbers[i + n]) {
          let tmp = numbers[i];
          numbers[i] = numbers[i + n];
          numbers[i + n] = tmp;
          change = true;
        }
        i ++;
      }

    }
    console.log(`Tri à peigne : ${total} comparaisons - ${numbers}`);
  }
  combSort(splittedComb);

  console.log(`Tri fusion : ${totalFusion} comparaisons - ${finalFusion}`);
    

});