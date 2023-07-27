import express from "express";
import { register, login } from "../controllers/auth.js";
const router = express.Router();

//post, get , update, delete
router.post("/register", register); //register kısmına gitsin ve register fonksiyonunu çağırsın
router.post("/login", login); //login kısmına gitsin ve login fonksiyonunu çağırsın

export default router;
