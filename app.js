const express = require ("express");
const app = express();
const path = require('path');

const controller = require("./controllers/controller");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.get("/", controller.getFeatured);
app.get("/catalogue", controller.getAlimentos);
app.get("/gato", controller.getGato);
app.get("/perro", controller.getPerro);
app.get("/buy", controller.getBuyForm);
app.get("/accesorios", controller.getAccesorios);
app.get("/juguetes", controller.getJuguetes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express application listening on port ${PORT}`));