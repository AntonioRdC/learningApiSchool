import Student from '../models/Student'

class HomeController {
  async index(req, res) {
    const newStudent = await Student.create({
      first_name: 'Antônio',
      last_name: 'Ribeiro',
      email: 'antonio@email.com',
      age: 20,
    })
    res.json(newStudent)
  }
}

export default new HomeController()
