import {travelItems } from "./listArray";
import React, { useState } from 'react';


function TravelList() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [updatedItems, setUpdatedItems] = useState(travelItems);

  const handleCheckboxChange = (itemName) => {
    const isItemSelected = selectedItems.includes(itemName);

    if (isItemSelected) {
      setSelectedItems(selectedItems.filter((item) => item !== itemName));
    } else {
      setSelectedItems([...selectedItems, itemName]);
    }
  };

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      const updatedItemList = [...updatedItems, newItem];
      setUpdatedItems(updatedItemList);
      setSelectedItems([]);
      setNewItem('');
    }
  };

  const handleDeleteSelectedItems = () => {
    const updatedItemList = updatedItems.filter((item) => !selectedItems.includes(item));
    setUpdatedItems(updatedItemList);
    setSelectedItems([]);
  };

  const handlePrint = () => {
    window.print(); // This will trigger the browser's print dialog
  };

  return (
    <div>
      <button onClick={handlePrint}>Print Page</button>
      <h2>Travel Checklist</h2>
      <ul>
        {updatedItems.map((item, index) => (
          <li className="tl" key={index}>
            <label className="tl">
              <input
                className="tl"
                type="checkbox"
                checked={selectedItems.includes(item)}
                onChange={() => handleCheckboxChange(item)}
              />
              {item}
            </label>
          </li>
        ))}
      </ul>
      <div>
        <h3>Modify Items:</h3>
        <ul>
          {selectedItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add a new item"
        />
        <button onClick={handleAddItem}>Add</button>
        <button onClick={handleDeleteSelectedItems}>Delete Selected</button>
      </div>
      
    </div>
  );
}

export default TravelList;
