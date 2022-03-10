import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Swal from "sweetalert2";

const CardComentarios = ({ com, getApiComentarios, URLComentarios, session }) => {

  const handleDelete = (id) => {
    Swal.fire({
      title: "¿Estas seguro de eliminar este comentario?",
      text: "No puedes revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Borrar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`${URLComentarios}/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (res.status === 200) {
            Swal.fire("Borrado!", "El comentario ah sido borrado.", "success");
            getApiComentarios();
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <div>
      {!session ? (
        <Row className="mb-2">
          <Col sm={12} className="border border-2">
            <Card.Body>
              <Card.Title className="font-celeste-crud fw-bold text-break">{com.user}</Card.Title>
              <Card.Text>{com.message}</Card.Text>
              <div className="text-end my-3 font-celeste-crud">{new Date(com.date).toLocaleString()}</div>
            </Card.Body>
          </Col>
        </Row>
      ) : (
        <>
          <Row className="mb-2">
            <Col sm={12} className="border border-2">
              <Card.Body>
                <Card.Title className="font-celeste-crud fw-bold">{com.user}</Card.Title>
                <Card.Text>{com.message}</Card.Text>
                <div className="text-end my-3 font-celeste-crud">{new Date(com.date).toLocaleString()}</div>
                <div className="text-end">
                  <button
                    className="btn-red-crud text-decoration-none mx-1"
                    onClick={() => {
                      handleDelete(com._id);
                    }}
                  >
                    BORRAR
                  </button>
                </div>
              </Card.Body>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};

export default CardComentarios;
