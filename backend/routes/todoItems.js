// const router = require("express").Router();
// const todoItemsModel = require("../models/todoItems");

// router.post("/api/item", async (req, res) => {
//   try {
//     const newItem = new todoItemsModel({
//       item: req.body.item,
//     });
//     const saveItem = await newItem.save();
//     res.status(200).json(saveItem);
//   } catch (error) {
//     res.status(500).json({ message: "Error saving item", error });
//   }
// });

// router.get("/api/items", async (req, res) => {
//   try {
//     const allItems = await todoItemsModel.find({});
//     res.status(200).json(allItems);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching items", error });
//   }
// });

// router.put("/api/item/:id", async (req, res) => {
//   try {
//     const updateItem = await todoItemsModel.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: req.body,
//       },
//       { new: true }
//     ); // Return the updated document
//     res.status(200).json(updateItem);
//   } catch (error) {
//     res.status(500).json({ message: "Error updating item", error });
//   }
// });

// router.delete("/api/item/:id", async (req, res) => {
//   try {
//     const deleteItem = await todoItemsModel.findByIdAndDelete(req.params.id);
//     res.status(200).json({ message: "Item deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Error deleting item", error });
//   }
// });

// module.exports = router;
