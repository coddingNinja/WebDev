const { name } = require("ejs")
const mongoose=require("mongoose")


const product_sceema=new mongoose.Schema({
    name:{
        type :String,
        require:true,
    },
    price :{
        type:Number,
        require:true,
    },
    Description:{
        type: String,
        require :true,
    },
    imageUrl:{
        type:String,
        require:true
    }
})


module.exports=mongoose.model("products",product_sceema)