import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import Checkout from './Checkout/Checkout';
import ProductPage from './ProductPage/ProductPage';
import ShopThreeColumnsPage from './ShopThreeColumnsPage/ShopThreeColumnsPage';
import ShopFourColumnsPage from './ShopFourColumnsPage/ShopFourColumnsPage';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import { BrowserRouter, Route} from 'react-router-dom';
import About from './About/About';
import Contacts from './Contacts/Contacts';

function App() {
  return (
  	<BrowserRouter>
    	<div className="app-wrapper">
      	<Header />
      	<div className="content">
        	<Route path="/home" component={Home} />
        	<Route path="/product-page" component={ProductPage} />
        	<Route path="/shop-3-columns-page" component={ShopThreeColumnsPage} />
        	<Route path="/shop-4-columns-page" component={ShopFourColumnsPage} />
        	<Route path="/checkout" component={Checkout} />
        	<Route path="/about" component={About} />
        	<Route path="/contacts" component={Contacts} />
      	</div>
      	{/*// <Footer />*/}
    	</div>
  	</BrowserRouter>

  );
}

export default App;
