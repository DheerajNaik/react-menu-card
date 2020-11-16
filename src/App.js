import React, { useState } from "react";
import "./index.css";
import Menu from "./Menu";
import Categories from "./Categories";
import data from "./data";

const allCategories = ["All", ...new Set(data.map((item) => item.category))];

export default function App() {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    if (category === "All") {
      setMenuItems(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    console.log(newItems);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Bi*ch Lasagne menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={allCategories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}
