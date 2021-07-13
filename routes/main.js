const{index, about}=require("../controllers/mainController");
const express=require("express");
const router=express.Router();

router.get("/",index);
router.get("/about",about);

module.exports=router;