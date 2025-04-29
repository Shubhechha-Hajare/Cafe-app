// src/components/MenuItem.jsx
// export default function MenuItem({ name, price }) {
//     return (
//       <div className="menu-item">
//         <p>{name}</p>
//         <span>{price}</span>
//       </div>
//     );
//   }
  
// src/components/MenuItem.jsx
export default function MenuItem({ name, price, onOrder }) {
  return (
    <div className="menu-item">
      
      <div>
        <p>{name}</p>
        <span>{price}</span>
      </div>
      <button className="order-btn" onClick={() => onOrder(name, price)}>
        Order
      </button>
    </div>
  );
}


