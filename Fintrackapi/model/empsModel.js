const mongoose = require("mongoose")

const empsModel = mongoose.model("emps", {
    id: { type: Number },
    name: { type: String },
    city: { type: String }
})

module.exports = empsModel;