import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onNewItem, itemName, onItemCat, itemCat, onItemFormSubmit }) {

  function handleSubmit(e){
    e.preventDefault()
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCat
    }
    onItemFormSubmit(newItem)
    console.log(newItem)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={onNewItem}/>
      </label>

      <label>
        Category:
        <select value={itemCat} onChange={onItemCat} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
