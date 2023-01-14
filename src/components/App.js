import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import React, { useState } from "react";

function App() {
    const [isDark, setIsDark] = useState(false);

    function handleTogleClick() {
      setIsDark((isDark)=> !isDark)
    }

  const appClass = isDark ? "App dark" : "App light"

  return (
    <div style={{background: appClass}} className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleTogleClick} >{isDark? "Dark Mode" : "Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
