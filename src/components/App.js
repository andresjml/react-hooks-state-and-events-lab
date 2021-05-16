import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  
  //declare and set the state
  const [isDark, setIsDark] = useState(false);

  //create a handler function
  function darkMode() {
    setIsDark((isDark) => !isDark);
  }

  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

  return (
    <div className={"App " + (isDark ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={darkMode}>{isDark ? 'Dark Mode' : 'Light Mode'}</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
