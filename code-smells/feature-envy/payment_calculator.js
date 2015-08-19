var PaymentCalculator = function() {

  this.calculate = function(employee) {
    var pensionDiscount =  employee.salary * 0.04;
    var healthDiscount  =  employee.salary  * 0.04;
    var totalDiscount   = pensionDiscount + healthDiscount
    return  employee.salary - totalDiscount
  }
}

module.exports = PaymentCalculator
