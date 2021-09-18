import Sequelize, { Model } from 'sequelize'
import bcryptjs from 'bcryptjs'

export default class User extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome deve ter 3 a 255 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já existe',
        },
        validate: {
          isEmail: {
            msg: 'Email inválido',
          },
        },
      },
      passwordHash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [4, 20],
            msg: 'Senha deve ter 4 a 20 caracteres',
          },
        },
      },
    }, {
      sequelize,
    })

    this.addHook('beforeSave', async (user) => {
      user.passwordHash = await bcryptjs.hash(user.password, 8)
    })

    return this
  }
}
