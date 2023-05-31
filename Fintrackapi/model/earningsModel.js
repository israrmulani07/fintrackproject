const mongoose = require("mongoose")

const earningsModel = mongoose.model("earnings", {
    item: { type: String },
    cat: { type: Number },
    amt: { type: Number }
})

module.exports = earningsModel;