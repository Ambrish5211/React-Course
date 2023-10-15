import { useState } from "react";
import "./index.css";

function App() {
  const [items, setItems] = useState([]);

  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id))
  }

  return (
    <div className="app">
      <Logo />
      <Form setItems={setItems} />
      <PackingList items={items} onDelete={handleDelete}/>
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 🌴</h1>;
}

function Form({ setItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSetItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newList = { description, quantity, packed: false, id: Date.now() };

    handleSetItems(newList);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need 😍 for your trip. </h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Items..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({ items, onDelete }) {
  return (
    <div className="list">
      <ul>
        {items.map((list) => {
          return <List list={list} onDelete={onDelete} key={list.id}/>;
        })}
      </ul>
    </div>
  );
}

function List({ list, onDelete }) {
  return (
    <li>
      <span style={list.packed ? { textDecoration: "line-through" } : {}}>
        {list.quantity} {list.description}
      </span>
      <button onClick={() => onDelete(list.id)}>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>💼 You have X element in your list, and you already packed X. </em>
    </footer>
  );
}

export default App;
