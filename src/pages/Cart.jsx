import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    const options = {
      key: 'rzp_test_IR7o7w2P9xqZ8y', // ✅ Replace with your Razorpay Test Key ID
      amount: totalAmount * 100, // Razorpay expects amount in paisa
      currency: 'INR',
      name: 'ShopSphere',
      description: 'Order Payment',
      image: 'https://your-logo-url.com/logo.png', // Optional
      handler: function (response) {
        alert('✅ Payment Successful!');
        console.log('Razorpay Payment ID:', response.razorpay_payment_id);
        // You can clear the cart or navigate to order success page here
      },
      prefill: {
        name: 'Test User',
        email: 'test@example.com',
        contact: '9999999999'
      },
      notes: {
        address: 'ShopSphere Customer Address'
      },
      theme: {
        color: '#2e7d32'
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart 🛒</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is currently empty.</p>
      ) : (
        <>
          <div className="cart-list">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="item-info">
                  <h4>{item.title}</h4>
                  <p>
                    Price: ₹{item.price} × {item.quantity}
                  </p>
                  <p>Total: ₹{item.price * item.quantity}</p>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Total Amount: ₹{totalAmount.toFixed(2)}</h3>
            <button className="checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

