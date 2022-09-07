import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState('');
  const [itemName, setItemName] = useState('');
  const [newItemCat, setNewItemCat] = useState('Produce')
  const [allItems, setAllItems] = useState(items)


  function handleItemName(event){
    setItemName(event.target.value)
  }

  function handleItemCat(event){
    setNewItemCat(event.target.value)
  }

  function handleSearchChange(event) {
    setSearch(event.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onItemFormSubmit(itemObj) {
    setAllItems([...allItems, itemObj])
    console.log(allItems)
  }


  let searchLowerCased = search.toLowerCase();

  const itemsToDisplay = allItems
    .filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  })
    .filter(item => item.name.toLowerCase().includes(searchLowerCased))



  return (
    <div className="ShoppingList">
      <ItemForm 
      onNewItem={handleItemName} 
      itemName={itemName} 
      onItemCat={handleItemCat} 
      itemCat={newItemCat}
      onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
