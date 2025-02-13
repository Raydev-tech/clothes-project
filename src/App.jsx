import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Navbar from "./Components/Navbar";
import TransactionDashboard from "./Pages/TransactionDashboard";
import Payment from "./Pages/Payment";
import Shirt from "./Pages/Shirt";
import TShirt from "./Pages/TShirt";
import Sweatshirt from "./Pages/Sweatshirt";
import Product from "./Pages/Product";
import Jean from "./Pages/Jean";
import Bag from "./Pages/Bag";


function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/transactionDashboard" element={<TransactionDashboard />} />
          <Route path="/shirt" element={<Shirt />} />
          <Route path="/tshirt" element={<TShirt />} />
          <Route path="/sweatshirt" element={<Sweatshirt />} />
          <Route path="/product" element={<Product />} />
          <Route path="/jean" element={<Jean />} />
          <Route path="/bag" element={<Bag />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;