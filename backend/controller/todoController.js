const todoItemsModel = require("../models/todoItems");

// Create new to-do item
exports.createItem = async (req, res) => {
  try {
    const newItem = new todoItemsModel({
      item: req.body.item,
    });
    const saveItem = await newItem.save();
    res.status(200).json(saveItem);
  } catch (error) {
    res.status(500).json({ message: "Error saving item", error });
  }
};

// Get all to-do items
exports.getAllItems = async (req, res) => {
  try {
    const allItems = await todoItemsModel.find({});
    res.status(200).json(allItems);
  } catch (error) {
    res.status(500).json({ message: "Error fetching items", error });
  }
};

// Update to-do item by ID
exports.updateItem = async (req, res) => {
  try {
    const updateItem = await todoItemsModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true } // Return the updated document
    );
    res.status(200).json(updateItem);
  } catch (error) {
    res.status(500).json({ message: "Error updating item", error });
  }
};

// Delete to-do item by ID
exports.deleteItem = async (req, res) => {
  try {
    await todoItemsModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting item", error });
  }
};
