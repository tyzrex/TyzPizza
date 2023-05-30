import express from "express";
import { loginUser,getUser} from "../controllers/auth";
import { isAuthenticated } from "../middleware/isAuthenticated";

const router = express.Router();

router.route("/loginUser").get(isAuthenticated, loginUser );
router.route("/getuser").get(isAuthenticated, getUser );

export default router;
