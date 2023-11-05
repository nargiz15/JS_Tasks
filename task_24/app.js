// Calculator obyekti yaradin. 5 methodu olsun: read(), sum(), multiply(), divide(), subtract()

// read() -> prompt-la 2 eded alsin, ve onlari calculator-da proeprty kimi yadda saxlasin,
// qalanlari da neticeni console-a cixarsin.

// istifade edeceyiniz seylerden biri de   [ ] dynamic property-dir, ya da this.



let calculator = {


    read: function()  {
        this.num1 = +prompt("Write first number")
        this.num2 = +prompt("Write second number")
    },

    sum: function()  {
        console.log(this.num1 + this.num2);
    },

   multiply: function() {
    console.log(this.num1 * this.num2)
   },

   divide: function() {
    console.log(this.num1 / this.num2)
   },

   subtract: function() {
    console.log(this.num1 - this.num2)
   }
}

calculator.read()
calculator.sum()
calculator.multiply()
calculator.divide()
calculator.subtract()
