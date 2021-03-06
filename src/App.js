// Dependencies
import React, { useState, useEffect } from 'react';

// Style
import './style/main.scss';

// Views
import HomeView from './components/Views/HomeView';
import ProductView from './components/Views/ProductView';

// Components
import Header from './components/common/Header';
import Footer from './components/common/Footer';

// Types
import { Pages } from './Types/Types';

const App = () => {
  const [currentPage, setCurrentPage] = useState(Pages.Home);
  const [currentProduct, setCurrentProduct] = useState({ name: '', price: '', img: '', description: '' });

  const changeCurrentPage = page => setCurrentPage(page);
  
  const changeCurrentProduct = product => setCurrentProduct(product);
  
  const renderPage = () => {
    switch (currentPage) {
      case Pages.Home:
        return(
          <HomeView
            product={currentProduct}
            changeProduct={changeCurrentProduct}
            changePage={changeCurrentPage}
          />
        );
      case Pages.ProductDetails:
        return (
          <ProductView
            product={currentProduct}
            changePage={changeCurrentPage}
          />
        );
      default:
        break;
    }
  }
  
  return (
    <div id="app" className="wrapper-1-1 column center">
      <Header/>
      {renderPage()}
      <Footer/>
    </div>
  );
}

export default App;
