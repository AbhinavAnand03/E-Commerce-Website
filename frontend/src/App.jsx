import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import SignIn from "./Pages/SignIn";
import Tracking from "./Pages/Tracking";
import Payment from "./Pages/Payment";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/tracking" element={<Tracking />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
}

export default App;
