import { Router } from "express";
import {AddTest,getAllTests,getTestById} from "../controllers/Test.mjs";
import verifyToken from "../controllers/jwt.mjs";

 const routerTest = Router();

routerTest.post("/addTest",verifyToken, AddTest);
routerTest.get("/getTests",verifyToken, getAllTests);
routerTest.get("/getTestById/:id",verifyToken, getTestById);

export default routerTest;