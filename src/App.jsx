import './App.css'
import Home from './components/common page/Home/Home'
import Cart from './components/common page/Home/Cart'
import ShowSearchResult from './components/common page/Home/ShowSearchResult'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewSelectedProduct from './components/common page/Home/ViewSelectedProduct'
import { PaymentOption } from './components/common page/Home/PaymentOption'
function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search-result" element={<ShowSearchResult />} />
          <Route path="/viewCatagory-result" element={<ViewSelectedProduct />} />
          <Route path="/BuyNow-product" element={<PaymentOption />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App
