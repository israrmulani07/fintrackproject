const { json } = require("express"); //imported json to show data in json 
const express = require("express"); //imported express after installing
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const countriesModel = require("./model/countiresModel");
const citiesModel = require("./model/citiesModel");
const empsModel = require("./model/empsModel");
const categoriesModel = require("./model/categoriesModel");
const earningsModel = require("./model/earningsModel");
const expensesModel = require("./model/expensesModel")


app.use(json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/findb")
    .then(() => console.log("DB is Connected"))
    .catch((err) => console.log(err));


// mongoose.connect("mongodb://127.0.0.1:27017/detaildb")
//     .then(() => console.log("DB is Running on server"))
//     .catch((err) => console.log((err)));


app.get("/", (req, res) => {
    res.json("Welcome to my financal tracking app")

});



app.get("/countries", async (req, res) => {
    const result = await countriesModel.find({})
    res.json({ result })
});

app.get("/cities", async (req, res) => {
    const result = await citiesModel.find({})
    res.json({ result })
});

app.get("/categories", async (req, res) => {
    const result = await categoriesModel.find({})
    res.json(result)
});

app.get("/catdd", async (req, res) => {
    const result = await categoriesModel.find({})
    const newData = result.map((item) => ({ value: item.id, label: item.name }))
    res.json(newData)
})


// app.post("/citiesbyfil", async (req, res) => {
//     const result = await citiesModel.find(req.body)
//     res.json({ result })
// });


app.post("/citiesbyfilt", async (req, res) => {
    const result = await citiesModel.find(req.body)
    res.json({ result })
});

app.post("/emps", async (req, res) => {
    const result = await empsModel.find(req.body)
    res.json({ result })
});

app.post("/addearning", (req, res) => {
    try {
        const payload = req.body
        const newEaring = new earningsModel(payload)
        newEaring.save()
        res.send("Sucessfully added the Earning")
        res.send(err)
    }
    catch (err) {
        res.send(err)
    }

});

app.post("/addexpenses", (req, res) => {
    try {
        const payload = req.body
        const newexpenses = new expensesModel(payload)
        newexpenses.save()
        res.send("Successfully Added the Expenses")
    }
    catch (err) {
        res.send(err)
    }
})

// to bring all earning data
app.get("/earnings", async (req, res) => {
    const result = await earningsModel.find({})  // we will bring all data so this is async call
    res.json(result)
});

//expense data
app.get("/expenses", async (req, res) => {
    const result = await expensesModel.find({})
    res.json(result)

});

//Wrapper for earnig to delete by id
app.post("/deleteearnings", (req, res) => {
    const payload = { _id: req.body._id }
    earningsModel.findOneAndDelete(payload, (err, docs) => {
        if (err) {
            res.json(err)
        } else {
            res.json(docs)
        }
    })
})

app.listen(3030, (req, res) => {
    console.log("server is runing at 3030....")

});
