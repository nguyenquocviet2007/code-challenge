import express from "express";
import UserController from "../controllers/userController";

const router = express.Router();

router.post("/register", UserController.CreateUser);
router.post("/login", UserController.GetUser);
router.get("/allUsers", UserController.GetAllUser);
router.put("/update/:id", UserController.UpdateUser);
router.delete("/delete/:id", UserController.DeleteUser);

export default router;
