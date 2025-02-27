const db = require("../storage/query");

async function getAlimentos(req, res){
    const alimentos = await db.getAllAlimentos();
    res.render("catalogue", {prods: alimentos})
};

async function getGato(req, res){
    const prods = await db.getAllGato();
    res.render("gato", {prods: prods})
};

async function getPerro(req, res){
    const prods = await db.getAllPerro();
    res.render("perro", {prods: prods})
};

async function getAccesorios(req,res){
    const prods = await db.getAllAccesorios();
    res.render("accesorios", {prods: prods});
};
async function getJuguetes(req,res){
    const prods = await db.getAllJuguetes();
    res.render("juguetes", {prods: prods});
};
async function getFeatured(req, res) {
    const prods = await db.getFeatured();
    res.render("index", {featured: prods})    
};
function getBuyForm(req, res){
    const errors = [{msg: "wrong password"}]
    if(req.query.password === process.env.ADMIN_CODE){
        res.send("admin pass granted")
        res.end()
    }else if (!req.query.password){
        res.render("buyForm");
    }
    res.render("buyForm", {errors: errors});
}
module.exports = {
    getAlimentos,
    getGato,
    getPerro,
    getBuyForm,
    getAccesorios,
    getJuguetes,
    getFeatured
}