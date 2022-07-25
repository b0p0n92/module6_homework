function func1(num1) {

    const func2 = function(num2) {
      return num1 + num2; 
    }
    return func2(2);
  }
  
  func1(1);
  