const {Router} = require('express')
//const config = require('config')

const User = require('../models/User')
const auth = require('../middleware/auth.middleware')
const router = Router()

//api/userprofile
router.get('/', auth, async (req, res) => {
    try {
        const userProfile = await User.findById(req.user.userId)
        res.json(userProfile)
   
    } catch (e) {
        res.status(500).json({message: 'Something wrong, try again.'})
    }
})



module.exports = router