import { Link } from "react-router-dom";
import "../assets/stylesheet/ProductCard.css"; 

function ProductCard({ product }) {

  // showing the prduct card with image ,title , price and detail button.
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <img src={product.image} alt={product.title} className="product-card-image" />
        <div className="product-content">
          <h3 className="product-title">
            {product.title.length > 20 ? product.title.slice(0, 20) + "..." : product.title}
          </h3>
          <p className="product-price">${product.price}</p>
          <button className="product-button">View Details</button>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
