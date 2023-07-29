const BaseService = require('./baseService')
const UserModel = require('../models/user')

class CustomerService extends BaseService {
  createCustomer(data) {
    return this.save(data)
  }

  async getCustomers() {
    return await this.getAll()
  }

  async getCustomersByAdress(adress) {
    return await this.findBy('adress', adress)
  }
}

module.exports = new CustomerService(UserModel)