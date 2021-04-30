const config = require('config')
const User = require('../modules/User')
const Post = require('../modules/Post')

class postController {
    async createPost(req, res) {
        try {
            const {name, text} = req.body
            const post = new Post({name, text, user: req.user.id})
            await post.save()
            return res.json(post)
        } catch(e) {
            console.log(e)
            return res.status(404).json(e)
        }
    }
}

module.exports = new postController()