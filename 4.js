function numberInterval(a, b) {
    var i = a;
    let intervalId = setInterval(function() {
        if (i > b) {
            clearInterval(intervalId);
        } else {
            console.log(i);
            i++;
        }
    }, 1000);
  }
  
  numberInterval(1, 10);