const BaseService = require('./baseService')
const UserModel = require('../models/user')

class CustomerService extends BaseService {
  createUser(data) {
    return this.save(data)
  }

  async getUsers() {
    return await this.getAll()
  }

  async getUsersByAdress(adress) {
    return await this.findBy('adress', adress)
  }

  async deleteUserById(id) {
    return await this.deleteBy('_id', id)
  }
}

module.exports = new CustomerService(UserModel)