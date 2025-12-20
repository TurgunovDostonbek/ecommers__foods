import "./Navbar.css";

import navimg from "../../assets/img/navbar/navimg.png";

import { CiUser } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";
import { CiShoppingBasket } from "react-icons/ci";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__container container flex__between">
        <div className="navbar__logo">
          <a className="navbar__logo--link" href="">
            <img className="navbar__logo--img" src={navimg} alt="" />
          </a>
        </div>

        <div className="navbar__search">
          <form className='navbar__search--form'>
            <input className='navbar__search--input' placeholder='Search For items...' type="text" />
          </form>
        </div>

        <div className="navbar__icons flex__center">
          <p className='navbar__icons--icon'><CiUser /> Account</p>
          <p className='navbar__icons--icon'><AiOutlineLike/> Wishlist</p>
          <p className='navbar__icons--icon'><CiShoppingBasket/> Cart</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
