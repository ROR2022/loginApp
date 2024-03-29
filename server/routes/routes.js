import { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  loginUser,
  signupUser,
  updateUser,
} from "../controllers/apiUsers.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.get("/api/users", getAllUsers);
router.get("/api/users/:email", getUser);
router.post("/api/users", createUser);
router.put("/api/users/:email", updateUser);
router.delete("/api/users/:email", deleteUser);
router.post("/api/login", loginUser);
router.post("/api/signup", signupUser);

export default router;
