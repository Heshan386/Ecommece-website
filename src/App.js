import Navbar from './component/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Shop from './pages/Shop';
import ShopCatagory from './pages/ShopCatagory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSingup from './pages/LoginSingup';
import Footer from './component/footer/Footer';
import men_banner from './component/assets/banner_mens.png';
import women_banner from './component/assets/banner_women.png';
import kid_banner from './component/assets/banner_kids.png';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/mens' element={<ShopCatagory banner={men_banner} category="men"/>} />
        <Route path='/womens' element={<ShopCatagory banner={women_banner} category="women"/>} />
        <Route path='/kids' element={<ShopCatagory banner={kid_banner} category="kid"/>} />
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/loging' element={<LoginSingup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
