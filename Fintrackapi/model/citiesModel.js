const mongoose = require("mongoose")

const citiesModel = mongoose.model("cities", {
    id: { type: Number },
    name: { type: String },
    ctrId: { type: Number }
})

module.exports = citiesModel;