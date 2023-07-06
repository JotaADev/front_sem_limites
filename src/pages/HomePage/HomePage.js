import React from "react";
import './HomePage.css';

const HomePage = () => {
  function downToLearnMore() {
    document.getElementById('ProductInfo').scrollIntoView({behavior:"smooth"})
  }

  return (
    <>
      <section className="HomeContent">
          <div className="HomeSection">
              <div className="HomeBookInfo">
                  <h1>Este e-book é perfeito para você!</h1>
                  <p>Um guia prático e completo para todos os níveis de desenvolvedores front-end.</p>
                  <div>
                    <button
                      onClick={() => {window.open('https://front-sem-limites.vercel.app/');}}
                      className="HomeBtnBuyNow">Adquira agora
                    </button>
                    <button  onClick={downToLearnMore} className="HomeBtnLearnMore">Saiba mais</button>
                  </div>
              </div>
              <img className="HomeImageBook" src="./capa.png"/>
          </div>
      </section>
    </>
  );
}

export default HomePage;
