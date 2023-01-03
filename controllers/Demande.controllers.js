const DemandeSFP = require('../models/Demande.model')
const ValidateDemande = require("../validation/Demande")

const AddDemande = async (req, res) => {
    const { errors, isValid } = ValidateDemande(req.body);
    try {
        if (!isValid) {
            console.log("req.body");
            res.status(404).json(errors);
        } else {
            await DemandeSFP.create(req.body)
            res.status(200).json({ message: "success demande" })
            DemandeSFP.findOne({ user: req.user.id })
                .then(async (demande) => {
                    if (!demande) {
                        //   user schema      = passport
                        req.body.user = req.user.id
                        await demande.create(req.body)
                        res.status(200).json({ message: "success demande" })
                    } else {
                        await DemandeSFP.findOneAndUpdate({ _id: demande._id },req.body,{ new: true })
                        .then(result => {
                            res.status(200).json(result)
                        })
                    }
                })
        }
    } catch (error) {
        res.status(404).json(error.message+'hi')
    }
}
module.exports = {
    AddDemande,
}
