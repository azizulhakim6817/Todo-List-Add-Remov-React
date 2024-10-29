import { useState } from "react";
import "./assets/css/todoList.css"; // Make sure to import the CSS file

const App = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const AddToList = () => {
    if (item.trim()) {
      setList([...list, item]);
      setItem(""); // Clear input after adding
    }
  };

  const RemoveItem = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  return (
    <div className="container ">
      <h3>Todo Item List Add </h3>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        className="input"
        placeholder="Add a new task..."
      />
      <button onClick={AddToList} className="button">
        Add
      </button>
      <ol className="todo-list">
        {list.length > 0 ? (
          list.map((element, index) => (
            <li key={index} className="todo-item">
              {element}
              <button
                onClick={() => RemoveItem(index)}
                className="remove-button"
              >
                Remove
              </button>
            </li>
          ))
        ) : (
          <li className="empty-state">No Tasks Available</li>
        )}
      </ol>
    </div>
  );
};

export default App;
