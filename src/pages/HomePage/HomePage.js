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
                    <button>Adquira agora</button>
                </div>
                <img src="./mockup.png" width='400px'/>
            </section>
        </main>
    </>
  );
}

export default HomePage;