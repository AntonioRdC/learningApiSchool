import Sequelize from 'sequelize'
import databaseconfig from '../config/config'
import Student from '../models/Student'
import User from '../models/User'

const models = [Student, User]

const connection = new Sequelize(databaseconfig)

models.forEach((model) => model.init(connection))
