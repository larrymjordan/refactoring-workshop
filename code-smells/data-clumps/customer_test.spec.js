var Customer = require('./customer')

describe('Address summary', function(){

  var customer = new Customer('fname', 'lname')

  it('returns address summary in the correct format', function(){
    customer.house = "43"
    customer.street = "Rankin Road"
    customer.city = "London"
    customer.post_code = "SW23 9YY"
    customer.country = "United Kingdom"

    expect(customer.addressSummary()).toEqual("43, Rankin Road, London, SW23 9YY, United Kingdom")
  })
})
