const db = require("../storage/query");

async function getAlimentos(req, res){
    const alimentos = await db.getAllAlimentos();
    res.render("catalogue", {alimentos: alimentos})
};

async function getGato(req, res){
    const prods = await db.getAllGato();
    console.log(prods);
    res.render("gato", {prods: prods})
};

async function getPerro(req, res){
    const prods = await db.getAllPerro();
    res.render("perro", {prods: prods})
};


module.exports = {
    getAlimentos,
    getGato,
    getPerro
}