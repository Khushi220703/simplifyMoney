import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../assets/stylesheet/ProductDetails.css"; 

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
  };

  const addToWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (!wishlist.some((item) => item.id === product.id)) {
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      alert("Added to wishlist!");
    }
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-container">
      <img className="product-image" src={product.image} alt={product.title} />
      <div className="product-details">
        <h2>{product.title}</h2>
        <h3 className="product-price">${product.price}</h3>
        <p>{product.description}</p>
        <button className="btn add-to-cart" onClick={addToCart}>Add to Cart</button>
        <button className="btn add-to-wishlist" onClick={addToWishlist}>Add to Wishlist</button>
      </div>
    </div>
  );
}

export default ProductDetails;
