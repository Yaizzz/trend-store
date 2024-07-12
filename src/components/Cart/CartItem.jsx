import "./CartItem.css";

const CartItem = ({product}) => {
  return (
    <li className="cart-item">
      <div className="cart-item-img">
        <img src={product.img} alt="" />
      </div>
      <div className="cart-item-info">
        <div className="cart-item-texts">
          <b>{product.name}</b>
          <div>
            <span>₺{product.price} x</span>
            <span>{product.amount}</span>
          </div>
        </div>
        <a href="/" className="cart-item-remove">
          X
        </a>
      </div>
    </li>
  );
};

export default CartItem;
