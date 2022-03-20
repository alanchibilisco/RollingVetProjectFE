import React, { useState, useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../Footer";
import NavBar from "../NavBar";
import { validateTextoEsp } from "../Validaciones";
//datepickery
import DatePicker from "react-datepicker";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";
import { addDays, setHours, setMinutes } from "date-fns";

const CrearTurno = ({ pacientes, URLTurnos, getApiTurnos, turnos }) => {
  const minDate = addDays(setHours(setMinutes(new Date(), 0), 8), 2); 
  const redirect = useNavigate();
  const session = JSON.parse(sessionStorage.getItem("stateSession")) || false;
  if (!session) {
    redirect("/");
  }

  const [detalleCita, setDetalleCita] = useState("");
  const [veterinario, setVeterinario] = useState("");
  const [mascota, setMascota] = useState("");

  //manejo de FH
  const [startDate, setStartDate] = useState(minDate);
  const [turnoVetFilter, setTurnoVetFilter] = useState([]);
  //fin FH
  //validaciones
  const [inputMasc, setInputMasc] = useState("");
  const [inputVet, setInputVet] = useState("");
  const [inputDetail, setInputDetail] = useState("");
  const [inputDate, setInputDate] = useState("");
  useEffect(() => {
    setInputMasc(document.getElementById("inputMasc"));
    setInputVet(document.getElementById("inputVet"));
    setInputDetail(document.getElementById("inputDetail"));
    setInputDate(document.getElementById("inputDate"));
  }, []);

  const testMasc = () => {
    if (validateTextoEsp(inputMasc.value) && inputMasc.value !== "") {
      inputMasc.className = "form-control is-valid";
      return true;
    } else {
      inputMasc.className = "form-control is-invalid";
      return false;
    }
  };

  const testVet = () => {
    if (validateTextoEsp(inputVet.value) && inputVet.value !== "") {
      inputVet.className = "form-control is-valid";
      return true;
    } else {
      inputVet.className = "form-control is-invalid";
      return false;
    }
  };

  const testDetail = () => {
    if (validateTextoEsp(inputDetail.value) && inputDetail.value.length >= 4) {
      inputDetail.className = "form-control is-valid";
      return true;
    } else {
      inputDetail.className = "form-control is-invalid";
      return false;
    }
  };

  const testDate = () => {
    if (startDate.getDay() !== 0 && startDate.getDay() !== 6) {
      inputDate.className = " container-fluid form-control is-valid mb-3";
      return true;
    } else {
      inputDate.className = " conmtainer-fluid form-control is-invalid mb-3";
      return false;
    }
  };

  //fin validaciones
  const handleVet = (target) => {
    setVeterinario(target.value.trimStart());
    const filter = turnos.filter(
      (turno) => turno.veterinario === target.value.trimStart()
    );
    setTurnoVetFilter(filter);
  };

  //manejo de turnos

  const mapTurnos = []; //aqui guardare los turnos en formato Date
  turnoVetFilter.map((turno) => mapTurnos.push(new Date(turno.startDate))); //recorro el array de turnos y los voy convirtiendo a formato Date y guardando en el array mapTurnos.
  const filterTurnos = mapTurnos.filter(
    (turno) => turno.getDate() === startDate.getDate()
  ); //filtro los turnos en funcion a la fecha
  const excTimes = []; //aqui se guardaran los excludes times del dia de la fecha
  filterTurnos.map((turno) =>
    excTimes.push(
      setHours(setMinutes(turno, turno.getMinutes()), turno.getHours())
    )
  ); //aqui mapeo los turnos filtrados
  //prueba
  const incTimes = [
    setHours(setMinutes(new Date(), 0), 8),
    setHours(setMinutes(new Date(), 0), 9),
    setHours(setMinutes(new Date(), 0), 10),
    setHours(setMinutes(new Date(), 0), 11),
    setHours(setMinutes(new Date(), 0), 12),
    setHours(setMinutes(new Date(), 0), 14),
    setHours(setMinutes(new Date(), 0), 15),
    setHours(setMinutes(new Date(), 0), 16),
    setHours(setMinutes(new Date(), 0), 17),
    setHours(setMinutes(new Date(), 0), 18),
  ];
  //fin manejo turnos

  const navigate = useNavigate();

  //handle date
  const handleDate = (date) => {
    setStartDate(date);
  };

  //fin handle date

  const gralValidate = () => {
    if (
      validateTextoEsp(detalleCita) &&
      validateTextoEsp(veterinario) &&
      validateTextoEsp(mascota) &&
      testDate()
    ) {
      return true;
    } else {
      return false;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (gralValidate()) {
      const newTurno = {
        detalleCita,
        veterinario,
        mascota,
        startDate: startDate.toString(),
      };

      Swal.fire({
        title: "Estas Seguro?",
        text: "No puedes revertir esto",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Guardar",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const res = await fetch(URLTurnos, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newTurno),
            });
            if (res.status === 201) {
              Swal.fire("Creado!", "El turno fue creado.", "OK");
              getApiTurnos();
              navigate("/Adm/turnos");
            }
          } catch (error) {
            console.log(error);
          }
        }
      });
    } else {
      Swal.fire(
        "Ops!",
        "Debe completar todos los campos correctamente",
        "error"
      );
      testMasc();
      testVet();
      testDetail();
      testDate();
    }
  };

  return (
    <div>
      <NavBar></NavBar>
      <Container className="py-5">
        <h1 className="font-celeste-crud">Agregar Turno</h1>
        <hr />
        <Form className="my-5" onSubmit={handleSubmit} noValidate>
          <Form.Group className="mb-3">
            <Form.Label className="font-celeste-crud" htmlFor="inputMasc">
              Mascota*
            </Form.Label>
            <Form.Select
              required
              id="inputMasc"
              onChange={({ target }) => {
                setMascota(target.value.trimStart());
                testMasc();
              }}
            >
              <option value="">Selecciona una mascota</option>
              {pacientes.map((paciente) => (
                <option
                  value={`${paciente.nombreMascota} - ${paciente.nombreDueño} ${paciente.apellidoDueño}`}
                  key={paciente._id}
                >{`${paciente.nombreMascota} - ${paciente.nombreDueño} ${paciente.apellidoDueño}`}</option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid" className="fw-bold">
              Seleccione una mascota de la lista
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="font-celeste-crud" htmlFor="inputVet">
              Veterinario*
            </Form.Label>
            <Form.Select
              required
              id="inputVet"
              onChange={({ target }) => {
                handleVet(target);
                testVet();
              }}
            >
              <option value="">Selecciona un Veterinario</option>
              <option value="Molinari Pablo">Dr. Molinari Pablo</option>
              <option value="Kuc Damian">Dr. Kuc Damian</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid" className="fw-bold">
              Seleccione un veterinario de la lista
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="font-celeste-crud" htmlFor="inputDetail">
              Detalle de Cita*
            </Form.Label>
            <Form.Control
              required
              id="inputDetail"
              as="textarea"
              type="text"
              placeholder="Ej: Control"
              minLength={4}
              maxLength={500}
              style={{ height: "100px" }}
              onChange={({ target }) => {
                setDetalleCita(target.value.trimStart());
                testDetail();
              }}
            ></Form.Control>
            <Form.Control.Feedback type="invalid" className="fw-bold">
              Ingrese el detalle de la cita (min. 4 caracteres, max. 500
              caracteres)
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label className="font-celeste-crud" htmlFor="inputDate">
              Seleccione fecha y hora (los turnos se reservan con 2 dias de
              anticipacion)
            </Form.Label>

            <DatePicker
              required
              id="inputDate"
              locale={es}
              selected={startDate}
              onChange={(date) => {
                handleDate(date);
                testDate();
              }}
              onClickOutside={testDate}
              minDate={minDate}
              filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
              showTimeSelect
              excludeTimes={excTimes}
              includeTimes={incTimes}
              dateFormat="Pp"
              className="container-fluid form-control mb-3"
            ></DatePicker>
          </Form.Group>
          <div className="d-flex justify-content-end">
            <button className="btn-celeste-crud mx-1 text-center">
              Guardar
            </button>
            <Link
              to="/Adm/turnos"
              className="btn-red-crud text-decoration-none text-center mx-1"
            >
              Cancelar
            </Link>
          </div>
        </Form>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default CrearTurno;
