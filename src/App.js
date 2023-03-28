import React from "react";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import ProductInfo from "./pages/ProductInfo/ProductInfo";

function App() {
  return (
    <>
      <Header/>
      <main>
        <HomePage/>
        <ProductInfo/>
      </main>
    </>
  );
}

export default App;