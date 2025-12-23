import "./Sells.css";

import productSells from "../../../assets/img/main/sellsproduct.png";

function Sells() {




  return (
    <div className="sells">
      <div className="sells__container container">
        <div className="sells__info flex__between">
          <h2 className="sells__info--title">Daily Best Sells</h2>
          <div className="sells__info--links flex__center">
            <a className="sells__info--link" href="">Featured</a>
            <a className="sells__info--link" href="">Popular</a>
            <a className="sells__info--link" href="">New added</a>
          </div>
        </div>

        <div className="sells__cards">
          
            <div className="sells__cards--card">
            <img className='sells__card--img' src={productSells} alt="" />
            <h3 className='sells__card--title'>All Natural Italian-Style Chicken Meatballs</h3>
            <p className='sells__card--price'>$23.855</p>
            <div className="sells__card--range"> </div>        
            <span className="sells__card--subtitle">Sold: 90/120</span>
            <button className='sells__card--btn'>Add To Cart</button>
          </div>

           <div className="sells__cards--card">
            <img className='sells__card--img' src={productSells} alt="" />
            <h3 className='sells__card--title'>All Natural Italian-Style Chicken Meatballs</h3>
            <p className='sells__card--price'>$23.855</p>
            <div className="sells__card--range"> </div>        
            <span className="sells__card--subtitle">Sold: 90/120</span>
            <button className='sells__card--btn'>Add To Cart</button>
          </div>

           <div className="sells__cards--card">
            <img className='sells__card--img' src={productSells} alt="" />
            <h3 className='sells__card--title'>All Natural Italian-Style Chicken Meatballs</h3>
            <p className='sells__card--price'>$23.855</p>
            <div className="sells__card--range"> </div>        
            <span className="sells__card--subtitle">Sold: 90/120</span>
            <button className='sells__card--btn'>Add To Cart</button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Sells;
