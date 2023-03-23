const { mongoose } = require('mongoose');
const { ItemModel } = require("../models/item.model");

exports.getAll = async (req, res) => {
  try {
    const {page} = req.query
    const item = await ItemModel.find().skip(4*(page-1)).limit(4);
    res.status(200).send({ Message: "All items", Data: item });
  } catch (err) {
    console.log(err);
    res.status(500).send({ Error: "Something went wrong" });
  }
};

exports.searchbyname = async (req, res) => {
  try {
    const {name,page} = req.query
    let data = await ItemModel.find({name}).skip(4*(page-1)).limit(4)
    res.status(200).send(data)
  } catch (err) {
    console.log(err);
    res.status(500).send({ Error: "Something went wrong" });
  }
};


exports.filterbyCategory = async(req,res)=>{
  try {
    const {category,page} = req.query
    let data = await ItemModel.find({category}).skip(4*(page-1)).limit(4)
    res.status(200).send(data)
  } catch (err) {
    console.log(err);
    res.status(500).send({ Error: "Something went wrong" });
  }
}


exports.sort = async (req,res)=>{
  try{
    const {sort,page} = req.query
    let data = await ItemModel.find().sort({'postedAt':sort}).skip(4*(page-1)).limit(4)
    res.status(200).send({message : "Sorted Data",data})
  } catch (err) {
    console.log(err);
    res.status(500).send({ Error: "Something went wrong" });
  }
}

exports.create = async (req, res) => {
  try {
    const payload = req.body;
    console.log(payload);
    const UserId = req.body.UserId;
    payload.UserId = UserId;
    const item = await new ItemModel(payload);
    item.save();
    res.status(200).send({ message: "Item added sucessfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ Error: "Something went wrong" });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    const { Id } = req.params;
    
    const item = await ItemModel.findById({_id : Id})
   
    if(item){
      await ItemModel.findByIdAndDelete({_id : Id})
      res.status(200).send({message : `Item with Id : ${Id} deleted Sucessfully`})
    }else{
      res.status(404).send({message : "Item not found"})
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ Error: "Something went wrong" });
  }
};
