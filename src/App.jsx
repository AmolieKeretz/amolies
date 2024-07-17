import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Products from './Pages/Products';
import ShopCategory from './Pages/ShopCategory'
import ShopContextProvider from './Context/ShopContext';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
//banner
import men_banner from './Components/Assests/banner_Two.jpg';
import women_banner from './Components/Assests/banner_one.jpg';
import kid_banner from './Components/Assests/banner_Five.jpg'
///
import AuthProvider from './Context/AuthContext';
import SearchResultsPage from './Components/SearchResultPage/SearchResultPage';



function App() {
  return (
    <AuthProvider>
    <ShopContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category = "men"/>}/>
          <Route path='/womens' element={<ShopCategory banner={women_banner} category = "women"/>}/>
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category = "kid"/>}/>
          <Route path='/products' element={<Products/>}>
            <Route path=':productId' element={<Products />} />
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
          <Route path='/search' element={<SearchResultsPage/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </ShopContextProvider>
    </AuthProvider>
  );
}

export default App;
