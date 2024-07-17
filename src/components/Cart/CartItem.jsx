import { useContext } from "react";
import "./CartItem.css";
import { CartContext } from "../../context/CartProvider";

const CartItem = ({ product }) => {
  const { removeItem } = useContext(CartContext);
  return (
    <li className="cart-item">
      <div className="cart-item-img">
        <img src={product.img} alt="" />
      </div>
      <div className="cart-item-info">
        <div className="cart-item-texts">
          <b>{product.name}</b>
          <div>
            <span>₺{product.price} x </span>
            <span className="cart-item-amount">{product.amount}</span>
          </div>
        </div>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            removeItem(product.id);
          }}
          className="cart-item-remove"
        >
          X
        </a>
      </div>
    </li>
  );
};

export default CartItem;
