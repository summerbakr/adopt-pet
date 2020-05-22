const mongoose=require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const PetSchema= new mongoose.Schema({
    name: {
        type: String,
        required: [true, "You must include the pet's first name!"],
        minlength: [3, "That name is too short, must be 3 characters minimum." ],
        unique:[true, "This pet already exists in our database."]

    },

    type: {
        type: String,
        required: [true, "The pet must have a type!"],
        minlength: [3, 'Please provide 3 characters minimum.']
    },
    description: {
        type: String,
        required: [true, 'The pet must have a description!'],
        minlength: [3, "Must be at least 3 characters."],
        unique: [true, "This description already exists."]

    },
    skill1: {
        type: String
    },
    skill2: {
        type: String
    },
    skill3: {
        type: String
    }
}, {timestamps: true});
PetSchema.plugin(uniqueValidator);
const Pet = mongoose.model("Pet", PetSchema);

module.exports=Pet;
