const PetController = require('../controllers/pets.controller');

module.exports= app =>{
    app.get('/api/pets', PetController.getPets);
    app.post('/api/pets/new', PetController.createPet);
    app.delete('/api/delete/:id', PetController.deletePet);
    app.put('/api/pets/edit/:id', PetController.updatePet);
    app.get('/api/singlepet/:id', PetController.displayOnePet);
};