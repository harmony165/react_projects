import React from "react";
import Cart from "./Cart";
import "./styles.css";

const items = [
  { id: 1, name: "IPhone", price: 699, qty: 2 },
  { id: 2, name: "Macbook Pro", price: 1299, qty: 3 },
  { id: 3, name: "EarPods", price: 159, qty: 1 }
];

function App() {
  return (
    <div>
      <Cart initialItems={items} />
    </div>
  );
}

export default App;
