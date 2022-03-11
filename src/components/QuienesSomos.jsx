import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import avatarAlan from "./img/Alan.png";
import avatarSanti from "./img/Santy.png";
import avatarMarta from "./img/Mel.png";
import avatarLeonel from "./img/Leonell.png";
import avatarLuis from "./img/Luis.png";
import acercaDeNosotros from "./img/acercadeNosotros.jpg";

const QuienesSomos = () => {
  return (
    <div>
      <NavBar></NavBar>
      <img
        src={acercaDeNosotros}
        alt="imagen acercaDeNosotros"
        width="100%"
        className="img-nosotros"
      />
      <h1 className="container text-center mt-5 font-celeste-crud">NUESTRO EQUIPO</h1>
      
      <section className="container mt-3">
        <h3 className="font-celeste-crud">
          Especialistas en crear contenidos, investigadores de los lugares mas
          recónditos de Google, rápidos hasta donde la calidad no se deteriora,
          eficaces en llevar a cabo un plan, tu plan y mas alla de todo eso tu
          equipo
        </h3>
      </section>
      <section className="container py-5">
        <div className="row d-flex justify-content-evenly">
          <div className="col-sm-12 col-md-6 col-lg-4 my-2">
            <div class="card">
                <div className="container my-1">
                <img src={avatarAlan} class="card-img-top" alt="Avatar Alan"/>     
                </div>              
                <div class="card-body text-center">
                    <h5 class="card-title fw-bold font-celeste-crud">Alan Chibilisco</h5>
                    <p class="card-text">Estudiante de Programacion, 33 años</p>                    
                    <p className="card-text">alan.chibilisco@gmail.com</p>
                </div>
            </div>         
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 my-2">
            <div class="card">
                <div className="container my-1">
                <img src={avatarSanti} class="card-img-top" alt="Avatar Santiago"/>
                </div>            
                <div class="card-body text-center">
                    <h5 class="card-title fw-bold font-celeste-crud">Santiago Adan</h5>
                    <p class="card-text">Estudiante de Programacion, 22 años</p>                    
                    <p className="card-text">santiadan25@gmail.com</p>
                </div>
            </div>         
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 my-2">
            <div class="card">
                <div className="container my-1">
                <img src={avatarLeonel} class="card-img-top" alt="Avatar Leonel"/>         
                </div>          
                <div class="card-body text-center">
                    <h5 class="card-title fw-bold font-celeste-crud">Leonel Alderete</h5>
                    <p class="card-text">Estudiante de Programacion, 17 años</p>                    
                    <p className="card-text">leonel.e.alderete@gmail.com</p>
                </div>
            </div>         
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 my-2">
            <div class="card">
                <div className="container my-1">
                <img src={avatarLuis} class="card-img-top" alt="Avatar Luis"/>  
                </div>                 
                <div class="card-body text-center">
                    <h5 class="card-title fw-bold font-celeste-crud">Luis Reartez</h5>
                    <p class="card-text">Estudiante de Programacion, 27 años</p>                    
                    <p className="card-text">Luisreartez55@gmail.com</p>
                </div>
            </div>         
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 my-2">
            <div class="card">
                <div className="container my-1">
                <img src={avatarMarta} class="card-img-top" alt="Avatar Marta"/>  
                </div>                 
                <div class="card-body text-center">
                    <h5 class="card-title fw-bold font-celeste-crud">Marta Arriola</h5>
                    <p class="card-text">Estudiante de Programacion, 34 años</p>                    
                    <p className="card-text">arriolamarta01@gmail.com</p>
                </div>
            </div>         
          </div>       
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default QuienesSomos;
