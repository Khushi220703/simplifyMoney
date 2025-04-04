import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../assets/stylesheet/Navbar.css"; // Import the CSS file
import { Badge } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
function Navbar() {
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setWishlistCount(wishlist.length);
    setCartCount(cart.length);
  }, []);
// navbar having logo and wishlist and cart icons..
  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <h1 className="navbar-logo">
          <Link to="/">E-Commerce</Link>
        </h1>

        
        <div className="navbar-icons">
         
          <Link to="/wishlist" className="icon-link">
        <Badge badgeContent={wishlistCount} color="error">
          <FavoriteIcon fontSize="large" />
        </Badge>
      </Link>

     
      <Link to="/cart" className="icon-link">
        <Badge badgeContent={cartCount} color="error">
          <ShoppingCartIcon fontSize="large" />
        </Badge>
      </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
