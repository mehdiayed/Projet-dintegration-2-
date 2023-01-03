const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const societeSchema = mongoose.Schema({
//     raison_social: "string",
//     adress_societe: { type: String },
//     guvernorat: { type: String },
//     ville: { type: String },
//     codePostale_socete: { type: String },
//     responsable_stage: { type: String },
//     mail_responsable: { type: String },
//     tlf_responsable: { type: String },
//     post_responsable: { type: String }
// });

// const encadrantSchema = mongoose.Schema({
//     nom_encadrant: { type: String },
//     confirmation_encadrant: { type: Boolean }
// });

const DemandeSFP = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "users",
            // required: true
        },

        name: "string",
        email: {    
            type: "string",
            trim: true,
            unique: true,
        },
        // tlf: "string",
        // classe: "string",
        // titre_projet: "string",
        // domaine_projet: "string",
        // BF_projet: "string",
        // TEM_projet: "string",
        // langue: "string",
        // raison_social: "string",
        // adress_societe: "string",
        // guvernorat: "string",
        // ville: "string",
        // codePostale_socete: "string",
        // responsable_stage: "string",
        // mail_responsable: "string",
        // tlf_responsable: "string",
        // post_responsable: "string",
        // nom_encadrant: "string",
        // confirmation_encadrant: Boolean
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("DemandeSFP", DemandeSFP);