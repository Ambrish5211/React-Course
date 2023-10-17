import { useState } from "react";
import "./index.css";

function App() {
  const [items, setItems] = useState([]);

  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id))
  }

  function handleChecked(id) {
   setItems((items) =>
    items.map((item) => 
    item.id === id ? {...item, packed : !item.packed} : item
   ))
  }

  return (
    <div className="app">
      <Logo />
      <Form setItems={setItems} />
      <PackingList items={items} onDelete={handleDelete} onChecked={handleChecked} />
      <Stats items={items} />
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

function PackingList({ items, onDelete, onChecked }) {

    const [sortBy, setSortBy] = useState("input")

    let sortedItems;

    if(sortBy === "input") sortedItems = items;
    else if(sortBy === "description") sortedItems = 

  return (
    <div className="list">
      <ul>
        {sortedItems.map((list) => {
          return <List list={list} onDelete={onDelete} onChecked={onChecked} key={list.id}/>;
        })}
      </ul>

        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by input order </option>
            <option value="description">Sort by description order </option>
            <option value="packed">Sort by packed order </option>
          </select>

        </div>

    </div>
  );
}

function List({ list, onDelete, onChecked }) {
  return (
    <li>
      <input type="checkbox" input={list.packed} onChange={()=> onChecked(list.id)}></input>
     
      <span style={list.packed ? { textDecoration: "line-through" } : {}}>
        {list.quantity} {list.description}
      </span>
      <button onClick={() => onDelete(list.id)}>❌</button>
    </li>
  );
}

function Stats({items}) {
  const x= items.length;
  const y = items.filter((item)=> item.packed === true).length;
  const percentage = (Math.floor(y/x*100))
  return (
    <footer className="stats">
      {percentage === 100 ? <em>All done. You are ready to go.✈</em> : <em>💼 You have {x} element in your list, and you already packed {y} {x === 0 ?  "(0 %)" : `(${percentage}%)` } </em>}
      
    </footer>
  );
}

export default App;