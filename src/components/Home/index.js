import './index.css'
import Header from '../Header'

const Home = () => (
  <div className="home-bg">
    <Header />
    <div className="home-body">
      <div className="home-body-left">
        <h1 className="bg-heading">Clothes that Get YOU Noticed</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="clothes-sm-image"
        />
        <p className="home-desc">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <button className="shop-now-button" type="button">
          Shop Now
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="clothes-lg-image"
      />
    </div>
  </div>
)

export default Home
