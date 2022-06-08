function Calculator(numberList) {
    let numberArray = [];
      
      this.read = function read() {
          for(let i = 0; i < numberList; i++) {
            numberArray[i] = Number(prompt("Enter the number...", 0));
          }
      }
  
      this.sum = function sum() {
          let result = 0;
          for(let key of numberArray) {
              result += key;
          } 
          return result;
      }
  
      this.mul = function mul() {
          let result = 1;
          for(let key of numberArray) {
              result *= key;
          } 
          return result;
      }
  }
  
    let calculator = new Calculator(3);
    calculator.read();
    alert("Sum=" + calculator.sum());
    alert("Mul=" + calculator.mul());