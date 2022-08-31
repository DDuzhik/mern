const {Router} = require('express')
//const config = require('config')

const User = require('../models/User')
const auth = require('../middleware/auth.middleware')
const router = Router()

//api/userprofile/update
router.put('/update', auth, async (req, res) => {
    try {

        const { _id, email, fName, lName, dateOfBirth, dl, dlState, dlExp } = req.body
        
        const user = await User.findById(_id)
  
        if (email !== user.email) {user.email = email}
        if (fName !== user.fName) {user.fName = fName}
        if (lName !== user.lName) {user.lName = lName}
        if (dateOfBirth !== user.dateOfBirth) {user.dateOfBirth = dateOfBirth}
        if (dl !== user.dl) {user.dl = dl.toUpperCase()}
        if (dlState !== user.dlState) {user.dlState = dlState.toUpperCase()}
        if (dlExp !== user.dlExp) {user.dlExp = dlExp}

        await user.save()

        res.status(201).json({ user })

   
    } catch (e) {
        res.status(500).json({message: 'Something wrong, try again.'})
    }
})

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