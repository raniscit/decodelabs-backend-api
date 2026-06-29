const express = require("express");

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
} = require("../controllers/userController");

const validateUser = require("../middleware/validation");

const router = express.Router();

router.get("/", getAllUsers);

router.get("/:id", getUserById);

router.post("/", validateUser, createUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;