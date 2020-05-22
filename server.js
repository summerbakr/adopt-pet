const express=require('express');
const app=express();
const port=8000;
const cors = require('cors')

require('./server/config/database.config')

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors());

const PetRoutes=require('./server/routes/pets.route');
PetRoutes(app);

app.listen(port, ()=> console.log(`Your port ${port} is running and ready`));