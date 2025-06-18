import React from "react";
import Carousels from "../components/carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div>
      <h1>Bem-vindo à Sua Nova Loja de Confiança — Produtos de Qualidade para Você!</h1>
      <div style={{ width: "600px", margin: "40px auto" }}>
        <Carousels>
          <img
            src="C:\Users\amlgp\projeto_final_fullstack_grupo_3\frontend\src\assets\imagens\e-commerce.jpg"
            alt="Ref 1"
            style={{ width: "100%", height: "300px", objectFit: "cover" }}
          />
        </Carousels>
        {/* Puedes agregar más imágenes y lógica de carousel aquí */}
        
        <div class="corpo-categorias">
          <h2 class="titulo">Produtos em Destaque</h2>
      
          <div class="linha">
        
            <div class="col-4">
              <img src="assets/img/produto-1.jpg" alt=""></img>
              <h4>Toti FullStack</h4>
              <div class="classificacao">
               <ion-icon name="star"></ion-icon>
               <ion-icon name="star"></ion-icon>
               <ion-icon name="star"></ion-icon>
               <ion-icon name="star"></ion-icon>
               <ion-icon name="star"></ion-icon>
              </div>
              <p>R$997,90</p>
           </div>

            <div class="col-4">
             <img src="assets/img/produto-2.jpg" alt="" />
             <h4>Toti FullStack</h4>
             <div class="classificacao">
               <ion-icon name="star"></ion-icon>
               <ion-icon name="star"></ion-icon>
               <ion-icon name="star"></ion-icon>
               <ion-icon name="star"></ion-icon>
               <ion-icon name="star"></ion-icon>
             </div>
             <p>R$997,90</p>
           </div>

            <div class="col-4">
              <img src="assets/img/produto-3.jpg" alt=""/>
              <h4>Toti FullStack</h4>
              <div class="classificacao">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
              </div>
             <p>R$997,90</p>
            </div>

          </div>



        </div>
    </div>
    </div>
  );
};

export default Home;