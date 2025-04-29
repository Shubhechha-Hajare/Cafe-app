// src/components/MenuCategory.jsx
// src/components/MenuCategory.jsx
import MenuItem from "./MenuItem";

export default function MenuCategory({ category, items, onOrder }) {
  return (
    <section className="menu-category">
      <h2>{category}</h2>
      <div className="items">
        {items.map((item, index) => (
          <MenuItem
            key={index}
            name={item.name}
            price={item.price}
            onOrder={onOrder}
          />
        ))}
      </div>
    </section>
  );
}

