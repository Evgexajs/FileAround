const Router = require('express');
const User = require('../modules/User');
const router = new Router();
const config = require('config')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const {check, validationResult} = require('express-validator')
const authMiddleware = require('../middleware/auth.middleware')
const fileService = require('../services/fileService')
const File = require('../modules/File')

router.post('/registration', 
    [
        check('email', 'Uncorrect email').isEmail(),
        check('password', 'Password must be longer that 3 and shorter that 12').isLength({min:3,max:12})
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(400).json({message: 'Uncorrect request', errors})
        }
        const {name, lastName, email, password} = req.body
        const candidate = await User.findOne({email})

        if(candidate) {
            return res.status(400).json({message: `User with email ${email} already exist`})
        }
        const hashPassword = await bcrypt.hash(password, 7)
        const user = new User({name, lastName, email, password: hashPassword})
        await user.save();
        await fileService.createDir(req, new File({user: user._id, name: ""}))
        return res.json({message: "User was created"})
    } catch(e) {
        console.log(e)
        res.send({message: "Server error"})
    }
})

router.post('/login',
    async (req, res) => {
    try {
        const {email, password} = req.body
        const user = await User.findOne({email})
        if(!user) {
            return res.status(404).json({message:"User not found"})
        }
        const isPassValid = bcrypt.compareSync(password, user.password)
        if(!isPassValid) {
            return res.status(404).json({message:"Invalid password"})
        }
        const token = jwt.sign({id: user.id}, config.get('secretKey'), {expiresIn: '1h'})
        return res.json({
            token,
            user: {
                id: user.id,
                name: user.name,
                lastName: user.lastName,
                email: user.email,
                avatar: user.avatar
            }
        })
    } catch(e) {
        console.log(e)
        res.send({message: "Server error"})
    }
})

router.get('/auth', authMiddleware,
    async (req, res) => {
    try {
        const user = await User.findOne({_id: req.user.id})
        const token = jwt.sign({id: user.id}, config.get('secretKey'), {expiresIn: '1h'})
        return res.json({
            token,
            user: {
                id: user.id,
                name: user.name,
                lastName: user.lastName,
                email: user.email,
                avatar: user.avatar
            }
        })
    } catch(e) {
        console.log(e)
        res.send({message: "Server error"})
    }
})

module.exports = router