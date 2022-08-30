const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    fName: {type: String},
    lName: {type: String},
    dateOfBirth: {type: Date, default: Date.now},
    dl: {type: String},
    dlExp: {type: Date, default: Date.now},
    joinDate: {type: Date, default: Date.now},
    vehicles: [{ type: Types.ObjectId, ref: 'Vehicle'}],
    links: [{ type: Types.ObjectId, ref: 'Link'}]
})

module. exports = model('User', schema)