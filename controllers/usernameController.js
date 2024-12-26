const db = require('../db/queries')

async function getUsernames(req, res){
const username = await db.getAllUsernames()
res.send('Usernames: ' + username.map(user => user.username).join(', '))
}

async function createUserGet(req, res){
    res.render('form')
}

async function createUserPost(req, res) {
    const username = req.body.username
    await db.insertUsername(username)
    res.redirect('/')
}

async function searchUser(req, res){
    const search = req.query.search
    const searchedUsernames = await db.searchUser(search) 
    const results = []
    searchedUsernames.map(user => results.push(user.username))
    res.render('search', {results})
}

async function deleteUsers(req, res){
    await db.deleteUsers()
    res.redirect('/')
}

module.exports = {
    getUsernames,
    createUserGet,
    createUserPost,
    searchUser,
    deleteUsers
  };