import Sequelize from 'sequelize'
import databaseconfig from '../config/config'
import Student from '../models/Student'

const models = [Student]

const connection = new Sequelize(databaseconfig)

models.forEach((model) => model.init(connection))
