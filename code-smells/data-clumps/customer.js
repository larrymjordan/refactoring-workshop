module.exports = function(firstName, lastName, house, street, city, postCode, country) {
  this.firstName = firstName
  this.lastName  = lastName
  this.house     = house
  this.street    = street
  this.city      = city
  this.postCode  = postCode
  this.country   = country

  this.addressSummary = function() {
    return this.house + ", " + this.street + ", " + this.city + ", " + this.post_code + ", " + this.country
  }
}