// src/components/Cart.jsx
export default function Cart({ cartItems, onPay }) {
    const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price.slice(1)), 0);
  
    return (
      <div className="cart">
        <h2>🛒 Your Order</h2>
        {cartItems.length === 0 ? (
          <p>No items ordered yet!</p>
        ) : (
          <>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  {item.name} - {item.price}
                </li>
              ))}
            </ul>
            <h3>Total: ${total.toFixed(2)}</h3>
            <button className="pay-btn" onClick={onPay}>Pay Now</button>
          </>
        )}
      </div>
    );
  }
