import React from "react";
import Header from "../../components/Header/Header";
import './HomePage.css';

const HomePage = () => {
  return (
    <>
        <Header/>
        <main className="HomeContent">
            <section className="HomeSection">
                <div className="HomeBookInfo">
                    <h1>Este e-book é perfeito para você!</h1>
                    <p>Um guia prático e completo para todos os níveis de desenvolvedores front-end.</p>
                    <div>
                      <button className="HomeBtnBuyNow">Adquira agora</button>
                      <button className="HomeBtnLearnMore">Saiba mais</button>
                    </div>
                </div>
                <img className="HomeImageBook" src="./capa.png"/>
            </section>
        </main>
    </>
  );
}

export default HomePage;