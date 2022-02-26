import React, { useState } from "react";

import Header from "./components/Layout/Header";
import Banner from "./components/Layout/Banner/Banner";
import Mangas from "./components/Mangas/Mangas";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Layout/Footer/Footer";
import CartProvider from "./store/CartProvider";

const App = () => {
const [cartIsShown, setCartIsShown] = useState(false)

const showCartHandler = () => {
  setCartIsShown(true);
}

const hideCartHandler = () => {
  setCartIsShown(false);
}

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      <Banner />
      <Mangas />
      <Footer />
    </CartProvider>
  );
};

export default App;
