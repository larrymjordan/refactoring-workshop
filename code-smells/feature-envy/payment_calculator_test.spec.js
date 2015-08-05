var Employee = require('./employee')
var PaymentCalculator = require('./payment_calculator')

describe('Payment calculation', function(){
  var employee = new Employee(1500000)
  var paymentCalculator = new PaymentCalculator()

  it('calculates user payment correctly', function(){
    expect(paymentCalculator.calculate(employee)).toEqual(1380000)
  })
});
