const {Router} = require('express')
const controller = require('../controllers/usernameController')

const app = Router()

app.get('/', (req, res) => {
  controller.getUsernames(req, res)
})
app.get('/new', (req, res) => {
    res.render('form')
})
app.post('/new', (req, res) => {
    console.log('Username to be saved!', req.body.username)
    controller.createUserPost(req, res)
})

app.get('/search', (req, res) => {
    controller.searchUser(req, res)
})

app.get('/delete', (req,res) => {
    controller.deleteUsers(req, res)
})

module.exports = app