class TestClass {
  constructor() {
    this.counter = 5;
  }

  upCounter = () => {
    this.counter++;
  }

  showCounter = () => console.log(this.counter);
}

const myCar = new TestClass;

myCar.showCounter();
myCar.upCounter();
myCar.showCounter();