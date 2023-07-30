import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { Container } from "react-bootstrap";

import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import Success from "./pages/success";

function App() {
  return (
    <CartProvider>
      <Container>
        <Navbar></Navbar>
        <Routes>
          <Route index element={<Shop />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Container>
    </CartProvider>
  );
}

export default App;
