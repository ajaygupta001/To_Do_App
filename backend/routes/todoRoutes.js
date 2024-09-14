const express = require("express");
const router = express.Router();
const todoController = require("../controller/todoController");
//const authController = require('../controller/authController');

// Create new to-do item
router.post("/api/item", todoController.createItem);

// Get all to-do items
router.get("/api/items", todoController.getAllItems);

// Update to-do item by ID
router.put("/api/item/:id", todoController.updateItem);

// Delete to-do item by ID
router.delete("/api/item/:id", todoController.deleteItem);

module.exports = router;
