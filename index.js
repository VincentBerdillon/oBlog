
//*import express
const express = require("express");
const app = express();
const port = 3001;

//* import router

const router = require("./src/router");

//*import ejs
app.set("view engine", "ejs");
app.set("views", "views");

//*import données
const data = require("./data/articles.json");
app.locals.data = data;

//*Middelware
app.use(express.static("public"));

//*Routes

app.use(router);

app.use((req, res) => {
    res.status(404).render("erreur");
});

app.listen(port, ()=>console.log(`écoute du port ${port}`));
