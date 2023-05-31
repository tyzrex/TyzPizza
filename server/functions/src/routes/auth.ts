import express from "express";
import { loginUser,getUser,logOutUser} from "../controllers/auth";
import { isAuthenticated } from "../middleware/isAuthenticated";

const router = express.Router();

router.route("/loginUser").get(isAuthenticated, loginUser );
router.route("/getuser").get(isAuthenticated, getUser );
router.route("/logout").get(isAuthenticated, logOutUser );


export default router;
