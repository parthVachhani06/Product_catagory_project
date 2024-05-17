const productModel = require("../models/product");
const fs = require("fs");





const homecontroller = (req, res) => {
    res.render("index");
}




const viewcontroller = async (req, res) => {
    const products = await productModel.find({});
    res.render('views', { products });
    console.log("complate viwes...");
}



const deletecontroller = async (req, res) => {
    const id = req.params.id;

    let proSingal = await productModel.findOne({ _id: id })
    console.log("pro", proSingal);
    fs.unlinkSync(`${proSingal.proimages}`)

    await productModel.deleteOne({ _id: id });
    res.redirect("/views");
    console.log("delet sucess....");
}



const editcontroller = async (req, res) => {
    const id = req.params.id;
    const singleproduct = await productModel.findById(id);
    res.render("edit", { singleproduct });

}


const updatecontroller =async (req,res)=>{
       
    var {editId} = req.body ;
    console.log("files" ,req.file);
    console.log("body",req.body);


    if(!editId){
        const productData = new productModel ({
            Product_name : req.body.Product_name,
            rate : req.body.rate,
            catagory : req.body.catagory,
            price : req.body.price,
            proimages : req.file.path
        })
    
        await productData.save();
        
       
    }else{

        await productModel.findByIdAndUpdate(editId,{
            Product_name : req.body.Product_name,
            rate : req.body.rate,
            catagory : req.body.catagory,
            price : req.body.price
        })
        console.log("Edit Complate..");
    }

   
   await res.redirect("/views");
}






module.exports = { homecontroller, viewcontroller, deletecontroller, editcontroller,updatecontroller };


