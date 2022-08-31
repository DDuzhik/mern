const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    year: {type: Number, required: true},
    make: {type: String, required: true},
    model: {type: String, required: true},
    color: {type: String},
    vin: {type: String},
    lp: {type: String},
    regState: {type: String},
    regExp: {type: Date, default: Date.now},
    unit: {type: String},
    joinDate: {type: Date, default: Date.now},
    owner: {type: Types.ObjectId, ref: 'User'},
    drivers: [{ type: Types.ObjectId, ref: 'User'}]
})


module. exports = model('Vehicle', schema)