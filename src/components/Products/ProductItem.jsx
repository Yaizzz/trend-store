import { useContext} from "react";
import { CartContext } from "../../context/CartProvider";
import Card from "../UI/Card";
import "./ProductItem.css";
import Rating from "./Rating";
const ProductItem = ({ product }) => {
  const { name, description, img, price } = product;
  const { items, addItem, totalAmount } = useContext(CartContext);
  console.log(totalAmount);
  return (
    <Card>
      <img src={img} alt="" />
      <h3 className="product-title">{name}</h3>
      <p>{description}</p>
      <div className="product-info">
        <Rating />
        <span className="price">{price}₺</span>
      </div>
      <button className="add-to-cart" onClick={()=> addItem(product)}>Sepete Ekle</button>
    </Card>
  );
};

export default ProductItem;
