import React, { useEffect } from 'react';
import "../App.css";
import {useTodoStore }from '../store';  // Import Zustand store

const Todo = () => {
  const {
    itemText,
    setItemText,
    listItems,
    fetchItems,
    addItem,
    deleteItem,
    isUpdating,
    setIsUpdating,
    updateItemText,
    setUpdateItemText,
    updateItem,
  } = useTodoStore();

  useEffect(() => {
    fetchItems(); // Fetch to-do items when component mounts
  }, [fetchItems]);

  return (
    <div className="App">
      <div>
        <h1>TO DO App</h1>
        <div>
          <div style={{ textAlign: "center" }}>
            <div id="division">
              <label htmlFor="input1" id="h3">Enter your note:</label>
              <input
                style={{ marginRight: "15px" }}
                placeholder="Enter your text"
                value={itemText}
                onChange={e => setItemText(e.target.value)}
                type="text"
                id="input1"
                name="notes"
              />
              <button
                style={{ fontSize: "25px", marginLeft: "15px" }}
                type="button"
                onClick={addItem}
              >
                Enter
              </button>
            </div>
            {listItems.map(item =>
              item._id === isUpdating ? (
                <ul style={{ display: "flex", justifyContent: "space-around" }} key={item._id}>
                  <input
                    id="input1"
                    style={{ fontSize: "20px", borderRadius: "5px" }}
                    onChange={e => setUpdateItemText(e.target.value)}
                    value={updateItemText}
                  />
                  <button
                    style={{ marginTop: "15px", color: "black", backgroundColor: "green" }}
                    onClick={updateItem}
                  >
                    Update
                  </button>
                </ul>
              ) : (
                <ul key={item._id}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <p>{item.item}</p>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <button
                        style={{ color: "black", backgroundColor: "yellow", margin: "10px" }}
                        onClick={() => {
                          setIsUpdating(item._id);
                          setUpdateItemText(item.item);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        style={{ color: "black", backgroundColor: "rgb(204, 70, 70)", margin: "10px" }}
                        onClick={() => deleteItem(item._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </ul>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
