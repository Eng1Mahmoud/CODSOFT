import { Router } from "express";
import verifyToken from "../controllers/jwt.mjs";
import { createUser,verification,login,getUser } from "../controllers/User.mjs";
const routerUser = Router()
routerUser.post("/signUp",createUser)
routerUser.post("/verification",verification)
routerUser.post("/login",login)
routerUser.get("/getUser",verifyToken,getUser)
export default routerUser
