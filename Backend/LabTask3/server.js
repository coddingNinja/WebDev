const Express=require("express")
const expressLayouts=require("express-ejs-layouts");
const { default: mongoose } = require("mongoose");
const server=Express()

server.use(Express.static("public"));
server.use(expressLayouts)
server.set("view engine","ejs")




server.get('/',(req,res)=>{

res.render("index",{layout:false})
});
server.get('/main_about',(req,res)=>{

    res.render("main_about") 
    });

server.get('/about',(req,res)=>{

        res.render("about") 
        });
server.get('/skills',(req,res)=>{

    res.render("skills") 
});
server.get('/Resume',(req,res)=>{

    res.render("Resume") 
});
server.get('/projects',(req,res)=>{

    res.render("projects") 
});
server.listen(5500)


