import { useState } from "react";
import { menuData } from "./data/menuData";
import Header from "./components/Header";
import MenuCategory from "./components/MenuCategory";
import Cart from "./components/Cart";
import OrderSuccess from "./components/OrderSuccess";
import "./App.css";

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false); // ✅ new state

  const handleOrder = (name, price) => {
    setCartItems([...cartItems, { name, price }]);
  };

  const handlePayment = () => {
    // Razorpay logic here...

    // Inside Razorpay's handler after payment success:
    setOrderPlaced(true); // ✅ trigger success screen
    setCartItems([]);
  };

  if (orderPlaced) {
    return <OrderSuccess />;
  }

  return (
    <div className="App">
      <Header />
      <Cart cartItems={cartItems} onPay={handlePayment} />
      {menuData.map((menu, index) => (
        <MenuCategory
          key={index}
          category={menu.category}
          items={menu.items}
          onOrder={handleOrder}
        />
      ))}
    </div>
  );
}
