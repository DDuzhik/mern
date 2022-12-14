const {Router} = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')
const router = Router()

// /api/auth/register
router.post(
    '/register', 
    [
        check('email', 'Incorrect E-mail').isEmail(),
        check('password', 'Min 6 simbows').isLength({ min: 6 })
    ],
    
    async (req, res) => {
    try {

        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Incorrect data'
            })
        }

        const {email, password} = req.body

        const candidate = await User.findOne({ email })

        if (candidate) {
            return res.status(400).json({ message: 'This Username is busy'})
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User ({ email, password: hashedPassword })

        await user.save()

        res.status(201).json({ message:'User has been created' })

    } catch (e) {
        res.status(500).json({message: 'Something wrong, try again.'})
    }
})

// /api/auth/login
router.post(
    '/login', 
    [
        check('email', 'Enter correct e-mail')/*.normalizeEmail()*/.isEmail(),
        check('password', 'Enter password').exists()
    ],
    async (req, res) => {
        try {

            const errors = validationResult(req)
    
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Incorrecr data'
                })
            }

            const {email, password} = req.body

            //console.log(req.body)

            const user = await User.findOne({ email })

            if (!user) {
                return res.status(400).json({ message: `Username is not found: "${user}"`})
            }

            const isMatch = await bcrypt.compare(password, user.password)
            
            if (!isMatch) {
                return res.status(400).json({ message: 'Incorrect password' })
            }

            const token = jwt.sign(
                { userId: user.id },
                config.get('jwtSecret'),
                { expiresIn: '30d'}
            )
        
            res.json({ token, userId: user.id })
            
            
        } catch (e) {
            res.status(500).json({message: 'Something wrong, try again.'})
        }
})

module.exports = router