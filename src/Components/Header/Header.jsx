import "./Header.css";

import { FaBarsStaggered } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";

function Header() {
  return (
    <div className="header">
      <div className="header__container container flex__between">
        <div className="header__bars flex__center">
          <div className='header__bars--bar flex__center'><FaBarsStaggered/></div>
        </div>
        <div className="header__links">
          <ul className='header__links--item flex__center'>
              <li className='header__links--list'><a className='header__links--link' href="">Home</a></li>
              <li className='header__links--list'><a className='header__links--link' href="">Category</a></li>
              <li className='header__links--list'><a className='header__links--link' href="">Products</a></li>
              <li className='header__links--list'><a className='header__links--link' href="">Pages</a></li>
              <li className='header__links--list'><a className='header__links--link' href="">Blog</a></li>
              <li className='header__links--list'><a className='header__links--link' href="">Elements</a></li>
          </ul>
        </div>
        <div className="header__tel flex__center">
          <p className='header__tel--tel flex__center'><b><BsTelephone/></b> +123 ( 456 ) ( 7890 )</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
