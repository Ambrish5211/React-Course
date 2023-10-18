import { useState } from "react";

function PackingList({ items, onDelete, onChecked, onClearList }) {
    const [sortBy, setSortBy] = useState("input");
  
    let sortedItems;
  
    if (sortBy === "input") sortedItems = items;
    else if (sortBy === "description")
      sortedItems = items
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
  
    if (sortBy === "packed")
      sortedItems = items
        .slice()
        .sort((a, b) => Number(a.packed) - Number(b.packed));
  
    return (
      <div className="list">
        <ul>
          {sortedItems.map((list) => {
            return (
              <List
                list={list}
                onDelete={onDelete}
                onChecked={onChecked}
                key={list.id}
              />
            );
          })}
        </ul>
  
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by input order </option>
            <option value="description">Sort by description order </option>
            <option value="packed">Sort by packed order </option>
          </select>
  
          <button onClick={onClearList}>Clear List</button>
        </div>
      </div>
    );
  }

  function List({ list, onDelete, onChecked }) {
    return (
      <li>
        <input
          type="checkbox"
          input={list.packed}
          onChange={() => onChecked(list.id)}
        ></input>
  
        <span style={list.packed ? { textDecoration: "line-through" } : {}}>
          {list.quantity} {list.description}
        </span>
        <button onClick={() => onDelete(list.id)}>❌</button>
      </li>
    );
  }

  export default PackingList;