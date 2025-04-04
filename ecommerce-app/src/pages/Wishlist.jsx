import { useEffect, useState } from "react";
import "../assets/stylesheet/Wishlist.css"; 

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(items);
  }, []);

  const removeFromWishlist = (id) => {
    const updatedList = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedList);
    localStorage.setItem("wishlist", JSON.stringify(updatedList));
  };

  return (
    <div className="wishlist-container">
      <h2>My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className="empty-wishlist">Your wishlist is empty.</p>
      ) : (
        <div className="wishlist-grid">
          {wishlist.map((product) => (
            <div key={product.id} className="wishlist-card">
              <img src={product.image} alt={product.title} className="wishlist-img" />
              <h3 className="wishlist-title">{product.title}</h3>
              <p className="wishlist-price">${product.price.toFixed(2)}</p>
              <button className="wishlist-remove" onClick={() => removeFromWishlist(product.id)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
