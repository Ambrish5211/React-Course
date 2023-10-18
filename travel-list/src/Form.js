import { useState } from "react";

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

  export default Form;