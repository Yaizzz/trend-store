import { useContext } from "react";
import Offcanvas from "../UI/Offcanvas";
import { CartContext } from "../../context/CartProvider";
import CartItem from "./CartItem";
import "./Cart.css";
const Cart = ({ onClose }) => {
  const {items, totalAmount} = useContext(CartContext)
  const cartItems = (
    <ul className="cart-items">
      {items.map((item) => (
        <CartItem key={item.id} product={item} />
      ))}
    </ul>
  );
  return (
    <Offcanvas onClose={onClose}>
      <div className="cart-head">
        <h2>Sepetim</h2>
        <a href="" className="cart-close" onClick={onClose}>
          X
        </a>
      </div>
      {cartItems}
      <div className="total">
        <span>Toplam Değer</span>
        <span>{totalAmount.toFixed(2)}₺</span>
      </div>
      <div className="actions">
        <button className="cart-order">Sipariş Ver</button>
        <button className="cart-clear">Temizle</button>
      </div>
    </Offcanvas>
  );
};

export default Cart;
