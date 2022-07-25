function EvenOddCalculator(arr) {  
    let evenCount = 0,
      oddCount = 0,
      zeroCount = 0;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] == "number") {
        if (arr[i] === 0) {
          zeroCount++;
        } else if (arr[i] % 2 == 0) {
          evenCount++;
        } else {
          oddCount++;
        }
      }
    }
    console.log(`Количество четных значений в массиве ${evenCount}`);
    console.log(`Количество нечетных значений в массиве ${oddCount}`);
    console.log(`Количество нулевых значений в массиве ${zeroCount}`);
    }
    
    let arr = [1, 1, 2, "1", 0];
    EvenOddCalculator(arr);