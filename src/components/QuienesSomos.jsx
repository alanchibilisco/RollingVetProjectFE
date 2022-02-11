import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import avatarAlan from "./img/avatarAlan3.jpg"
import avatarSanti from "./img/avatarSantiago3.jpg"
import avatarMarta from "./img/avatarMarta.jpg"
import avatarLeonel from "./img/AvatarLeonel.jpg"
import avatarLuis from "./img/avatarLuis3.jpg"

const QuienesSomos = () => {
    return (
        <div>
            <NavBar></NavBar>
            <h1 className='container text-center mt-3'>Quienes Somos</h1>
             <hr />
            <section className='container mt-3'>
                <h4>Misión</h4>
                <p>Nuesta Misión es proporcionar a nuestros clientes una experiencia inolvidable que exceda sus expectativas, de forma coherente, para que vuelvan a elegirnos </p>
                <h4>Visión</h4>
                <p>Nuestra Visión es ser referentes, resaltándonos como la mejor opción para toda persona que desea tener una excelente experiencia </p>
                <h4>Valores</h4>
                <p>Respeto: por los demás, la comunidad en la que operamos y sobre todo, por nuestros clientes, siempre y en todas nuestras acciones. </p>
                <p>Inclusión: queremos que todos se sientan parte de nuestra familia </p>
                <p>Ambición: buscamos siempre mejorar, crecer, innovar</p>
            </section>
            <section>
                <article className="album py-5">
                    <div className="container">
                    <div class="row row-cols-1 row-cols-sm-12 row-cols-md-3 g-3">
                <div class="col">
                    <img src={avatarAlan} class="bd-placeholder-img card-img-top rounded-circle" width="100px" height="400px" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveaspectratio="xMidYMid slice" focusable="false" alt='avatarAlan'/>
                    <div class="card shadow-sm">
                        <div class="card-body text-center">
                            <h5 class="fontTitulos">Alan Chibilisco </h5>
                            <p class="fontSubtitulos">Estudiante de Programación</p>
                            <p class="fontSubtitulos">33 Años</p>
                            <p class="fontSubtitulos">alan.chibilisco@gmail.com</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <img src= {avatarSanti} class="bd-placeholder-img card-img-top rounded-circle" width="100px" height="400px" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveaspectratio="xMidYMid slice" focusable="false"/>
                    <div class="card shadow-sm">
                        <div class="card-body text-center">
                            <h5 class="fontTitulos">Santiago Adan</h5>
                            <p class="fontSubtitulos">Estudiante de Programación</p>
                            <p class="fontSubtitulos">22 Años</p>
                            <p class="fontSubtitulos">santiadan25@gmail.com</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <img src= {avatarMarta} class="bd-placeholder-img card-img-top rounded-circle" width="100px" height="400px" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveaspectratio="xMidYMid slice" focusable="false"/>
                    <div class="card shadow-sm">
                        <div class="card-body text-center">
                            <h5 class="fontTitulos">Marta Arriola</h5>
                            <p class="fontSubtitulos">Estudiante de Programación</p>
                            <p class="fontSubtitulos">34 Años</p>
                            <p class="fontSubtitulos">arriolamarta01@gmail.com</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <img src= {avatarLeonel} class="bd-placeholder-img card-img-top rounded-circle" width="100px" height="400px" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveaspectratio="xMidYMid slice" focusable="false"/>
                    <div class="card shadow-sm">
                        <div class="card-body text-center">
                            <h5 class="fontTitulos">Leonel Alderete</h5>
                            <p class="fontSubtitulos">Estudiante de Programación</p>
                            <p class="fontSubtitulos">17 Años</p>
                            <p class="fontSubtitulos">leonel.e.alderete@gmail.com</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <img src= {avatarLuis} class="bd-placeholder-img card-img-top rounded-circle" width="100px" height="400px" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveaspectratio="xMidYMid slice" focusable="false"/>
                    <div class="card shadow-sm">
                        <div class="card-body text-center">
                            <h5 class="fontTitulos">Luis Reartez</h5>
                            <p class="fontSubtitulos">Estudiante de Programación</p>
                            <p class="fontSubtitulos">27 Años</p>
                            <p class="fontSubtitulos">Luisreartez55@gmail.com</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    </div> 
                    </div>
                    </article>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default QuienesSomos;