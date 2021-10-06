import React, { useState } from 'react';
import Categories from './components/Categories';
import Menu from './components/Menu';
import items from './data';
import './index.css';
const allCategories = ['filterAll', ...new Set(items.map((item) => item.category))];

function Parent() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);


  const filterItems = (category) => {
    if (category === 'filterAll') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default Parent;