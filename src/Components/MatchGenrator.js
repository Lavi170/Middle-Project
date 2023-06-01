const numberArray = [];
  let firstNam = 1;
  let secondNam = 1;
  for (let i = 0; i < 169; i++) {
      const pair = [firstNam, secondNam];
      if (firstNam!=secondNam) {
          numberArray.push(pair)
      }
      secondNam++
      if (secondNam > 13) {
          secondNam = 1
          firstNam++
      }
  }
  console.log(numberArray);