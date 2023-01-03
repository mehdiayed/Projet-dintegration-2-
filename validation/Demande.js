const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateDemande(data) {
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    // data.tlf = !isEmpty(data.tlf) ? data.tlf : "";
    // data.classe = !isEmpty(data.classe) ? data.classe : "";
    // data.raison_social = !isEmpty(data.raison_social) ? data.raison_social : "";
    // data.adress_societe = !isEmpty(data.adress_societe) ? data.adress_societe : "";
    // data.guvernorat = !isEmpty(data.raison_social) ? data.raison_social : "";
    // data.ville = !isEmpty(data.guvernorat) ? data.guvernorat : "";
    // data.codePostale_socete = !isEmpty(data.codePostale_socete) ? data.codePostale_socete : "";
    // data.responsable_stage = !isEmpty(data.responsable_stage) ? data.responsable_stage : "";
    // data.mail_responsable = !isEmpty(data.mail_responsable) ? data.mail_responsable : "";
    // data.tlf_responsable = !isEmpty(data.tlf_responsable) ? data.tlf_responsable : "";
    // data.post_responsable = !isEmpty(data.post_responsable) ? data.post_responsable : "";
    // data.nom_encadrant = !isEmpty(data.nom_encadrant) ? data.nom_encadrant : "";
    // data.confirmation_encadrant = !isEmpty(data.confirmation_encadrant) ? data.confirmation_encadrant : "";
    // data.titre_projet = !isEmpty(data.titre_projet) ? data.titre_projet : "";
    // data.domaine_projet = !isEmpty(data.domaine_projet) ? data.domaine_projet : "";
    // data.BF_projet = !isEmpty(data.BF_projet) ? data.BF_projet : "";
    // data.TEM_projet = !isEmpty(data.TEM_projet) ? data.TEM_projet : "";
    // data.langue = !isEmpty(data.langue) ? data.langue : "";


    if (validator.isEmpty(data.name)) {
        errors.name = "Required name";
    }
    if (!validator.isEmail(data.email)) {
        errors.email = "Required format email";
    }
    // if (validator.isEmpty(data.email)) {
    //     errors.email = "Required email";
    // }
    // if (validator.isEmpty(data.tlf)) {
    //     errors.tlf = "Required tel";
    // }
    // if (validator.isEmpty(data.classe)) {
    //     errors.classe = "Required class";
    // }
    // if (validator.isEmpty(data.raison_social)) {
    //     errors.raison_social = "Required raison_social";
    // }
    // if (validator.isEmpty(data.adress_societe)) {
    //     errors.adress_societe = "Required adress_societe";
    // }
    // if (validator.isEmpty(data.guvernorat)) {
    //     errors.guvernorat = "Required guvernorat";
    // }
    // if (validator.isEmpty(data.ville)) {
    //     errors.ville = "Required ville";
    // }
    // if (validator.isEmpty(data.codePostale_socete)) {
    //     errors.codePostale_socete = "Required codePostale_socete";
    // }
    // if (validator.isEmpty(data.responsable_stage)) {
    //     errors.responsable_stage = "Required responsable_stage";
    // }
    // if (validator.isEmpty(data.mail_responsable)) {
    //     errors.mail_responsable = "Required mail_responsable";
    // }
    // if (validator.isEmpty(data.tlf_responsable)) {
    //     errors.tlf_responsable = "Required tlf_responsable";
    // }
    // if (validator.isEmpty(data.post_responsable )) {
    //     errors.post_responsable  = "Required post_responsable";
    // }
    // if (validator.isEmpty(data.nom_encadrant)) {
    //     errors.nom_encadrant = "Required nom_encadrant";
    // }
    // if (validator.isEmpty(data.confirmation_encadrant)) {
    //     errors.confirmation_encadrant = "Required confirmation_encadrant";
    // }
    // if (validator.isEmpty(data.titre_projet)) {
    //     errors.titre_projet = "Required titre_projet";
    // }
    // if (validator.isEmpty(data.domaine_projet)) {
    //     errors.domaine_projet = "Required domaine_projet";
    // }
    // if (validator.isEmpty(data.titre_projet)) {
    //     errors.titre_projet = "Required titre_projet";
    // }
    // if (validator.isEmpty(data.BF_projet)) {
    //     errors.BF_projet = "Required BF_projet";
    // }
    // if (validator.isEmpty(data.TEM_projet)) {
    //     errors.TEM_projet = "Required TEM_projet";
    // }
    // if (validator.isEmpty(data.langue)) {
    //     errors.langue = "Required langue";
    // }

    return {
        errors,
        isValid: isEmpty(errors)
    }
};