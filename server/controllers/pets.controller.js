const Pet = require('../models/pets.model');

module.exports.getPets=(req, res)=>{
    Pet.find({}).sort("type")
        .then(allPets => res.json( allPets ))
        .catch(err => res.json(err));
};

module.exports.createPet=(req, res)=>{
    console.log(req.body)
    Pet.create(req.body)
        .then(newPet => res.json(newPet))
        .catch(err => res.json(err));

};

module.exports.deletePet=(req, res)=>{
    Pet.findByIdAndDelete({_id:req.params.id})
        .then(deletedPet => res.json(deletedPet))
        .catch(err => res.json(err));

};

module.exports.updatePet=(req, res)=>{
    Pet.findByIdAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators: true, context: 'query'})
        .then(updatedPet => res.json(updatedPet))
        .catch(err => res.json(err));

};

module.exports.deletePet=(req, res)=>{
    Pet.findOneAndDelete({_id: req.params.id})
        .then(deletedPet => res.json({deletion: deletedPet}))
        .catch(err => res.json(err));
};

module.exports.displayOnePet=(req,res)=>{
    Pet.findOne({_id: req.params.id})
        .then(onePet=> res.json({single: onePet}))
        .catch(err=>res.json(err));
};
