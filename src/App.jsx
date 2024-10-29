import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const App = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const AddToList = () => {
    if (item.trim()) {
      // Prevent empty tasks
      setList([...list, item]);
      setItem(""); // Clear input after adding
    } else {
      alert("Please enter a valid task."); // Alert for empty input
    }
  };

  const RemoveItem = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4 text-center">Todo List</h3>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Add a new task..."
          aria-label="New Task"
        />
        <button className="btn btn-primary" onClick={AddToList}>
          Add
        </button>
      </div>

      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th scope="col">Task</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {list.length > 0 ? (
            list.map((element, index) => (
              <tr key={index}>
                <td>{element}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => RemoveItem(index)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2" className="text-center">
                <i>No tasks available</i>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default App;
