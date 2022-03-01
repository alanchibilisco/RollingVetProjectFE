import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import avatarAlan from "./img/Alan.png"
import avatarSanti from "./img/Santy.png"
import avatarMarta from "./img/Mel.png"
import avatarLeonel from "./img/Leonell.png"
import avatarLuis from "./img/Luis.png"
import acercaDeNosotros from "./img/acercadeNosotros.jpg"

const QuienesSomos = () => {
    return (
        <div>
            <NavBar></NavBar>
            <img src={acercaDeNosotros} alt="imagen acercaDeNosotros" width="100%" />
            <h1 className='container text-center mt-5 text-info '>NUESTRO EQUIPO</h1>
             <hr />
            <section className='container mt-3'>
                <h3 className="text-info">Especialistas en crear contenidos, investigadores de los lugares mas recónditos de Google, rápidos hasta donde la calidad no se deteriora, eficaces en llevar a cabo un plan, tu plan y mas alla de todo eso tu equipo</h3>

            </section>
            <section>
                <article className="album py-5">
                    <div className="container">
                    <div className="row row-cols-1 row-cols-sm-12 row-cols-md-3 g-3">
                <div className="col">
                    <img src={avatarAlan} className="bd-placeholder-img card-img-top rounded-circle" width="100px" height="400px" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false" alt='avatarAlan'/>
                    <div className="card shadow-sm">
                        <div className="card-body text-center">
                            <h5 className="fontTitulos">Alan Chibilisco </h5>
                            <p className="fontSubtitulos">Estudiante de Programación</p>
                            <p className="fontSubtitulos">33 Años</p>
                            <p className="fontSubtitulos">alan.chibilisco@gmail.com</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <img src= {avatarSanti} className="bd-placeholder-img card-img-top rounded-circle" width="100px" height="400px" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                    <div className="card shadow-sm">
                        <div className="card-body text-center">
                            <h5 className="fontTitulos">Santiago Adan</h5>
                            <p className="fontSubtitulos">Estudiante de Programación</p>
                            <p className="fontSubtitulos">22 Años</p>
                            <p className="fontSubtitulos">santiadan25@gmail.com</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <img src= {avatarMarta} className="bd-placeholder-img card-img-top rounded-circle" width="100px" height="400px" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                    <div className="card shadow-sm">
                        <div className="card-body text-center">
                            <h5 className="fontTitulos">Marta Arriola</h5>
                            <p className="fontSubtitulos">Estudiante de Programación</p>
                            <p className="fontSubtitulos">34 Años</p>
                            <p className="fontSubtitulos">arriolamarta01@gmail.com</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <img src= {avatarLeonel} className="bd-placeholder-img card-img-top rounded-circle" width="100px" height="400px" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                    <div className="card shadow-sm">
                        <div className="card-body text-center">
                            <h5 className="fontTitulos">Leonel Alderete</h5>
                            <p className="fontSubtitulos">Estudiante de Programación</p>
                            <p className="fontSubtitulos">17 Años</p>
                            <p className="fontSubtitulos">leonel.e.alderete@gmail.com</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <img src= {avatarLuis} className="bd-placeholder-img card-img-top rounded-circle" width="100px" height="400px" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                    <div className="card shadow-sm">
                        <div className="card-body text-center">
                            <h5 className="fontTitulos">Luis Reartez</h5>
                            <p className="fontSubtitulos">Estudiante de Programación</p>
                            <p className="fontSubtitulos">27 Años</p>
                            <p className="fontSubtitulos">Luisreartez55@gmail.com</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
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