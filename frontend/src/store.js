// store.js
import { create } from "zustand";
import axios from "axios";
import { Navigate } from "react-router-dom";

export const useTodoStore = create((set, get) => ({
  listItems: [],
  itemText: "",
  updateItemText: "",
  isUpdating: null,

  setItemText: (text) => set({ itemText: text }),
  setUpdateItemText: (text) => set({ updateItemText: text }),
  setIsUpdating: (id) => set({ isUpdating: id }),
  setListItems: (items) => set({ listItems: items }),

  fetchItems: async () => {
    try {
      const res = await axios.get("http://localhost:5000/todo/api/items");
      set({ listItems: res.data });
    } catch (error) {
      console.log(error);
    }
  },

  addItem: async () => {
    try {
      const { itemText } = get(); // Use get() to access current state
      const res = await axios.post("http://localhost:5000/todo/api/item", {
        item: itemText,
      });
      set((state) => ({
        listItems: [...state.listItems, res.data],
        itemText: "", // Clear input field after adding
      }));
    } catch (error) {
      console.log(error);
    }
  },

  deleteItem: async (id) => {
    try {
      await axios.delete(`http://localhost:5000/todo/api/item/${id}`);
      set((state) => ({
        listItems: state.listItems.filter((item) => item._id !== id),
      }));
    } catch (error) {
      console.log(error);
    }
  },

  updateItem: async () => {
    const { isUpdating, updateItemText, listItems } = get(); // Use get() to access current state
    try {
      await axios.put(`http://localhost:5000/todo/api/item/${isUpdating}`, {
        item: updateItemText,
      });
      set({
        listItems: listItems.map((item) =>
          item._id === isUpdating ? { ...item, item: updateItemText } : item
        ),
        updateItemText: "",
        isUpdating: null,
      });
    } catch (error) {
      console.log(error);
    }
  },
}));



export const  ProtectedRoute = ({ element }) => {
    const token = document.cookie.split(';').find(cookie => cookie.trim().startsWith('token='));
    return token ? element : <Navigate to="/login" />;
  };
  

//export default useTodoStore;
