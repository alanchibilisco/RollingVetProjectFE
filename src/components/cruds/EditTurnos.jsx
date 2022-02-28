import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../Footer";
import NavBar from "../NavBar";
import { validateTextoEsp } from "../Validaciones";
//datepickery
import DatePicker from "react-datepicker";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";
import { addDays, setHours, setMinutes } from "date-fns";

const EditTurnos = ({ URLTurnos, getApiTurnos, pacientes, turnos }) => {

  const redirect = useNavigate();
  const session = JSON.parse(sessionStorage.getItem("stateSession")) || false;
  useEffect(()=>{
    if (!session) {
      redirect("/");
    }
  },[]);
  
  //state
  const [turno, setTurno] = useState({});
  const [data, setData] = useState(setHours(setMinutes(new Date(), 0), 8));
  const [minDate, setMinDate]=useState(setHours(setMinutes(new Date(), 0), 8));

  const [turnoVetFilter, setTurnoVetFilter]=useState([]);
  const [veterinario, setVeterinario]=useState("");

  //parametro
  const { id } = useParams();
  //efect
  useEffect(async () => {
    try {
      const res = await fetch(`${URLTurnos}/${id}`);
      const turnoApi = await res.json();
      setTurno(turnoApi);
      setData(addDays(setHours(setMinutes(new Date(turnoApi.startDate),0),8), 2));
      setMinDate(addDays(setHours(setMinutes(new Date(turnoApi.startDate),0),8), 2));
      setVeterinario(turnoApi.veterinario);
      const filter=turnos.filter((turn)=>(turn.veterinario===turnoApi.veterinario));
      setTurnoVetFilter(filter);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleVet=(target)=>{
    setTurno({ ...turno, veterinario: target.value });
    const filter=turnos.filter((turn)=>(turn.veterinario===target.value.trimStart()));
    setTurnoVetFilter(filter);
  };

  //manejo de turnos
  const mapTurnos = []; //aqui guardare los turnos en formato Date
  turnos.map((turno) => mapTurnos.push(new Date(turno.startDate))); //recorro el array de turnos y los voy convirtiendo a formato Date y guardando en el array mapTurnos.
  const filterTurnos = mapTurnos.filter(
    (turno) => turno.getDate() === data.getDate()
  ); //filtro los turnos en funcion a la fecha
  const excTimes = []; //aqui se guardaran los excludes times del dia de la fecha
  filterTurnos.map((turno) =>
    excTimes.push(
      setHours(setMinutes(turno, turno.getMinutes()), turno.getHours())
    )
  ); //aqui mapeo los turnos filtrados
  const includesTimes=[setHours(setMinutes(new Date(), 0), 8),
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
  //fin manejo de turnos
  //referencias
  const detalleCitaRef = useRef("");
  //navigate
  const navigate = useNavigate();
  //handle date
  const handleDate = (date) => {
    setData(date);
  };
  //handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !validateTextoEsp(turno.mascota) ||
      !validateTextoEsp(turno.veterinario) ||
      !validateTextoEsp(detalleCitaRef.current.value.trimStart())
    ) {
      Swal.fire("Ops!", "Algunos de los campos es incorrectos", "Error");
      return;
    } else {
      const turnoUpdate = {
        detalleCita: detalleCitaRef.current.value,
        veterinario: turno.veterinario,
        mascota: turno.mascota,
        startDate: data.toString(),
      };

      Swal.fire({
        title: "Estas seguro?",
        text: "No puedes revertir esto",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Actualizar",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const res = await fetch(`${URLTurnos}/${id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(turnoUpdate),
            });
            if (res.status === 200) {
              Swal.fire(
                "Actualizado!",
                "Los datos fueron actualizados.",
                "success"
              );
              getApiTurnos();
              navigate("/Adm/turnos");
            }
          } catch (error) {
            console.log(error);
          }
        }
      });
    }
  };

  return (
    <div>
      <NavBar></NavBar>

      <Container className="py-5">
        <h1 className="font-celeste-crud">Editar Turno</h1>
        <hr />
        <Form className="my-5" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicMascota">
            <Form.Label className="font-celeste-crud">Mascota*</Form.Label>
            <Form.Select
              value={turno.mascota}
              onChange={({ target }) => {
                setTurno({ ...turno, mascota: target.value });
              }}
            >
              {pacientes.map((paciente) => (
                <option
                  value={`${paciente.nombreMascota} - ${paciente.nombreDueño} ${paciente.apellidoDueño}`}
                  key={paciente._id}
                >{`${paciente.nombreMascota} - ${paciente.nombreDueño} ${paciente.apellidoDueño}`}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicVet">
            <Form.Label className="font-celeste-crud">Veterinario*</Form.Label>
            <Form.Select
              value={turno.veterinario}
              onChange={({ target }) => {
                handleVet(target);
              }}
            >              
              <option value="Molinari Pablo">Dr. Molinari Pablo D.</option>
              <option value="Kuc Damian">Dr. Kuc Damian</option>
              
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDetalle">
            <Form.Label className="font-celeste-crud">
              Detalle de Cita*
            </Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              placeholder="Mascota"
              style={{ height: "100px" }}
              defaultValue={turno.detalleCita}
              ref={detalleCitaRef}
            ></Form.Control>
          </Form.Group>
          {/* inicio datepickery */}
          {turno.startDate !== undefined ? (
            <Form.Group>
              <Form.Label className="font-celeste-crud">
                Seleccione fecha y hora (su turno era: {new Date(turno.startDate).toLocaleString()})
              </Form.Label>
              <DatePicker
                locale={es}
                selected={data}
                onChange={(date) => {
                  handleDate(date);
                }}
                minDate={minDate}
                filterDate={(date) =>
                  date.getDay() !== 6 && date.getDay() !== 0
                }
                showTimeSelect
                excludeTimes={excTimes}
                includeTimes={includesTimes}
                dateFormat="Pp"
                className="container-fluid form form-control mb-3"
              ></DatePicker>
            </Form.Group>
          ) : (
            <></>
          )}
         
          <div className="d-flex justify-content-end">
            <button className="btn-celeste-crud text-center mx-1">Guardar</button>
            <Link to="/Adm/turnos" className="btn-red-crud text-decoration-none text-center mx-1">Cancelar</Link>  
          </div>
          
        </Form>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default EditTurnos;
