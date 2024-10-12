import logo from './logo.svg';
import './App.css';
import { Home } from './components/pages/Home';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { ProductContext, ProductProvider } from './components/productContext';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Cart } from './components/pages/cart';
import { Fav } from './components/pages/fav';
import { NewHeader } from './components/navHeader';
import { DetailedPage } from './components/detailPage';
import { Clothes } from './components/clothes';
import { Notify } from './components/notify';
function App() {
  return (
    <div className="App pointer cursor-pointer">
      <ProductProvider>
        <BrowserRouter>
        <NewHeader/>
        <Notify/>
        
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/fav' element={<Fav />} />
            <Route path='/:productName/:category/:id' element={<DetailedPage/>}/>
            <Route path='/product/:productName' element ={<Clothes/>}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </ProductProvider>
    </div>
  );
}

export default App;