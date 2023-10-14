import { useState } from "react";
import "./index.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

function App() {
  return (
    <div className="app">
      <Logo />
      <Form initialItems={initialItems} />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 🌴</h1>;
}

function Form({initialItems}) {

  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState(1)

  function handleSubmit(e) {
    e.preventDefault();

    if(!description) return;

    const newList = {description, quantity, packed: false, id: Date.now()}
     initialItems = {...initialItems,newList}

     console.log(initialItems)
    console.log(newList)

    setDescription('')
    setQuantity(1)

    
  }


  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need 😍 for your trip. </h3>
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} >
        {Array.from({length: 20}, (_,i) => i + 1).map((num) => <option value={num} key={num}>{num}</option> )}
      </select>
      <input type="text" placeholder="Items..." value={description} onChange={(e) => setDescription(e.target.value)} />
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((list) => {
          return <List list={list} />;
        })}
      </ul>
    </div>
  );
}

function List({ list }) {
  return (
    <li>
      <span style={list.packed ? { textDecoration: "line-through" } : {}}>
        {list.quantity} {list.description}
      </span>
      <button>❌</button>
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
