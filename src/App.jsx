import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const App = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const AddToList = () => {
    list.push(item);
    setList([...list]);
  };

  const RemoveItem = (index) => {
    /* alert(index); */
    list.splice(index, 1);
    setList([...list]);
  };

  return (
    <div className="container mt-5 col-8">
      <h3 className="mb-4">Todo List</h3>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          onChange={(e) => setItem(e.target.value)}
          value={item}
          placeholder="Add a new task..."
        />
        <button className="btn btn-primary" onClick={AddToList}>
          Add
        </button>
      </div>
      <table className="table table-striped">
        <tbody>
          {list.length !== 0 ? (
            list.map((element, index) => (
              <tr key={index}>
                <td>{element}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      RemoveItem(index);
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No tasks available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default App;
