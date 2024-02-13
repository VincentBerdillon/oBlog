
const data = require("../data/articles.json");

const controller = {

    pageAcceuil : (req, res)=>{
        res.render("index", {data});
    },

    pageArticle : (req, res)=>{
        const detail = Number(req.params.id);
        const dataId = data.find((article)=>detail===article.id);
        res.render("article",{dataId});
    },

    pageCategories : (req, res)=>{
        let myArray = new Array(); 
            for (article of data){
                if (!myArray.includes(article.category)) {
                myArray.push(article.category);
            };
        };
        const {categories} = req.query;
        res.render("categories", {myArray, categories});
    },
};

module.exports=controller;