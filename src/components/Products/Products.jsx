import "./Products.css";
import products from "../../productData";
const Products = () => {
    const productList = products.map((item) => <li key={item.id}>{item.name}</li>)
  return (
    <main className="products-wrapper">
      <ul className="products">
      {productList}
      </ul>
    </main>
  );
};

export default Products;
