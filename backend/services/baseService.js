class BaseService {
  constructor(model) {
    this.model = model
  }

  async create(data) {
    return this.model.create(data)
  }

  async getAll() {
    return await this.model.find()
  }

  async findBy(property, value) {
    return await this.model.find({ [property]: value })
  }
}

module.exports = BaseService