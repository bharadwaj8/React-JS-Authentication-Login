import './index.css'

const Header = () => (
  <div>
    <nav className="navbar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="website-logo"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="nav logout"
        className="logout"
      />
      <div className="navbar-options">
        <li className="option">Home</li>
        <li className="option">Products</li>
        <li className="option">Cart</li>
        <button className="option-button" type="button">
          Logout
        </button>
      </div>
    </nav>
    <div className="header-options">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
        alt="nav home"
        className="options-image"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        alt="nav products"
        className="options-image"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        alt="nav cart"
        className="options-image"
      />
    </div>
  </div>
)

export default Header
