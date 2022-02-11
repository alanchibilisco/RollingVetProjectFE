import React from "react";

import nuestroequipo from "../components/img/NuestroEquipo.jpg";

import doc1 from "../components/img/doc1.png";
import doc2 from "../components/img/doc2.png";
import doc3 from "../components/img/doc3.png";

const Nuestoequipo = () => {
  return (
    <div style={{ backgroundImage: `url(${nuestroequipo})` }}>
      <h1 class=" mt-3 display-3 text-light text-center">NUESTRO EQUIPO</h1>
      <div class="row justify-content-center">
      <div class="col-4">
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div
              style={{ width: "18rem" }}
              class="card m-1"
            >
              <img variant="top" class="card-img-top " src={doc1} />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div
              style={{ width: "18rem" }}
              class="card m-1 "
            >
              <img variant="top" class="card-img-top " src={doc2} alt="" />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div
              style={{ width: "18rem" }}
              class=" card m-1"
            >
              <img variant="top" class="card-img-top " src={doc3} alt="" />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Nuestoequipo;
