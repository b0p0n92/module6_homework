function isSimple(val) {
    if (typeof val != "number" || val == NaN) {
      console.log("Не число");
      return;
    }
    if (val > 1000) {
      console.log("Числа более 1000 не поддерживаются");
      return;
    }
    if (val == 0 || val == 1) {
      console.log("Число не простое");
      return;
    }
    for (let i = 2; i < val; i++) {
      if (val % i == 0) {
        console.log("Число не простое");
        return;
      }
    }
    console.log("Число простое");
  }
  
  isSimple(1001);
  