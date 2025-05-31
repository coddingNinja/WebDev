const express=require("express")
require("dotenv").config()
const expressLayout=require("express-ejs-layouts")
const app=express()
const mongoose=require("mongoose")
const Product=require("./models/products")
const port=process.env.PORT  || 4000
app.use(expressLayout)
app.use(express.static("public"))
app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))
mongoose.connect(process.env.URL)
const db=mongoose.connection
db.once("open",()=>{
  console.log("conneted")
})
app.get("/",(req,res)=>{
  res.render("index",{layout:false})
})
app.get("/add_product",(req,res)=>{
  res.render("add_product",{layout:false})
})
app.post("/add_product",async (req,res)=>{
let {name,price,Description,imageUrl}=req.body;
console.log(Description)
await Product.create({name,price,Description,imageUrl}).then(()=>{
 console.log("success")
  res.redirect("/add_product")
}).catch(()=>{
  res.redirect("/add_product")
}
)})
app.get("/products", async (req,res)=>{
  const products= await Product.find()
  console.log(products)
  res.render("show_all_produst",{products})

})
app.listen(port)