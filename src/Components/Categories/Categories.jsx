import "./Categories.css"

import cateimg from "../../assets/img/main/categooo.png"

function Categories() {
  return (
    <div className='categories'>
      <div className="categories__container container">
        <p className='categories__subtitle'>Customer Favorites</p>
        <h2 className='categories__title'>Popular Catagories</h2>
        <div className="categories__cards">
          <div className="categories__cards--card">
            <div className="categories__card--img">
                <img className="header__img"  src={cateimg} alt="photo" />
            </div>
            <h3 className='categories__card--title'>Main Dish</h3>
            <p className='categories__card--subtitle'>(86 dishes)</p>
          </div>

          <div className="categories__cards--card">
            <div className="categories__card--img">
                <img className="header__img"  src={cateimg} alt="photo" />
            </div>
            <h3 className='categories__card--title'>Main Dish</h3>
            <p className='categories__card--subtitle'>(86 dishes)</p>
          </div>

          <div className="categories__cards--card">
            <div className="categories__card--img">
                <img className="header__img"  src={cateimg} alt="photo" />
            </div>
            <h3 className='categories__card--title'>Main Dish</h3>
            <p className='categories__card--subtitle'>(86 dishes)</p>
          </div>

          <div className="categories__cards--card">
            <div className="categories__card--img">
                <img className="header__img"  src={cateimg} alt="photo" />
            </div>
            <h3 className='categories__card--title'>Main Dish</h3>
            <p className='categories__card--subtitle'>(86 dishes)</p>
          </div>

          <div className="categories__cards--card">
            <div className="categories__card--img">
                <img className="header__img"  src={cateimg} alt="photo" />
            </div>
            <h3 className='categories__card--title'>Main Dish</h3>
            <p className='categories__card--subtitle'>(86 dishes)</p>
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default Categories