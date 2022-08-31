const {Router} = require('express')
const config = require('config')
const Vehicle = require('../models/Vehicle')
const auth = require('../middleware/auth.middleware')
const router = Router()

//api/vehicle/update
router.put('/update', auth, async (req, res) => {
    try {

        const { _id, year, make, model, color, vin, lp, unit, regExp, regState } = req.body
        
        const vehicle = await Vehicle.findById(_id)
  
        if (year !== vehicle.year) {vehicle.year = year}
        if (make !== vehicle.make) {vehicle.make = make}
        if (model !== vehicle.model) {vehicle.model = model}
        if (color !== vehicle.color) {vehicle.color = color}
        if (vin !== vehicle.vin) {vehicle.vin = vin.toUpperCase()}
        if (lp !== vehicle.lp) {vehicle.lp = lp.toUpperCase()}
        if (unit !== vehicle.unit) {vehicle.unit = unit}
        if (regExp !== vehicle.regExp) {vehicle.regExp = regExp}
        if (regState !== vehicle.regState) {vehicle.regState = regState}

        await vehicle.save()

        res.status(201).json({ vehicle })

   
    } catch (e) {
        res.status(500).json({message: 'Something wrong, try again.'})
    }
})

//api/vehicle/create
router.post('/create', auth, async (req, res) => {
    try {
        const { year, make, model, color, vin, lp, unit, regExp, regState } = req.body
        
        const vehicle = new Vehicle({
            year, make, model, color, vin, lp, unit, regExp, regState, owner: req.user.userId
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

//api/vehicle/delete
router.delete('/delete', auth, async (req, res) => {
    //console.log(req.body.v_id)
    try {
        await Vehicle.findByIdAndDelete(req.body.v_id)
        res.json({message: 'Vehicle deleted'})
   
    } catch (e) {
        res.status(500).json({message: 'Something wrong, try again.'})
    }
})
module.exports = router