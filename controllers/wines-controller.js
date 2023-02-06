const Wine = require("../model/wine");


const getAllWines = async(req,res,next) => {
    let wines;
    try {
wines = await Wine.find();
    } catch (err) {
        console.log(err);
    }

    if(!wines) {
        return res.status(404).json({message: "No Wines Found"})
    }
    return res.status(200).json({ wines });
}

const addWine = async (req,res,next) => {
    const {name, brand, vintage, varietal, appellation, harvestdate, aging, bottlingdate, alcohol} = req.body;
    let wine;
    try {
        wine = new Wine({
            name,
            brand,
            vintage,
            varietal,
            appellation,
            harvestdate,
            aging,
            bottlingdate,
            alcohol
        });
        await wine.save();
    }catch (err){
        console.log(err);
    }

    if (!wine) {
        return res.status(500).json({message:'Unable To Add'})
    }
    return res.status(201).json({ wine });
};


exports.getAllWines = getAllWines;
exports.addWine = addWine;