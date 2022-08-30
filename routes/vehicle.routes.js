const {Router} = require('express')
const config = require('config')
const Vehicle = require('../models/Vehicle')
const auth = require('../middleware/auth.middleware')
const router = Router()

//api/vehicle/create
router.post('/create', auth, async (req, res) => {
    try {
        const { year, make, model } = req.body
        
        const vehicle = new Vehicle({
            year, make, model, owner: req.user.userId
        })
        
        await vehicle.save()

        res.status(201).json({ vehicle })

   
    } catch (e) {
        res.status(500).json({message: 'Something wrong, try again.'})
    }
})

//api/vehicle
router.get('/', auth, async (req, res) => {
    try {
        const vehicles = await Vehicle.find({ owner: req.user.userId })
        res.json(vehicles)
   
    } catch (e) {
        res.status(500).json({message: 'Something wrong, try again.'})
    }
})

//api/vehicle/:id
router.get('/:id', auth, async (req, res) => {
    try {
        const vehicle = await Vehicle.findById(req.params.id)
        res.json(vehicle)
   
    } catch (e) {
        res.status(500).json({message: 'Something wrong, try again.'})
    }
})

module.exports = router