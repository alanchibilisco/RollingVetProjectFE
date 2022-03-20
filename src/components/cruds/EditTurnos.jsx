import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Container, Form } from "react-bootstrap";
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
  useEffect(() => {
    if (!session) {
      redirect("/");
    }
  }, []);
  //state
  const [turno, setTurno] = useState({});
  const [data, setData] = useState(setHours(setMinutes(new Date(), 0), 8));
  const [minDate, setMinDate] = useState(
    setHours(setMinutes(new Date(), 0), 8)
  );
  const [turnoStr, setTurnoStr]=useState("");

  const [turnoVetFilter, setTurnoVetFilter] = useState([]);

  //parametro
  const { id } = useParams();
  //efect
  useEffect(async () => {
    try {
      const res = await fetch(`${URLTurnos}/${id}`);
      const turnoApi = await res.json();
      setTurno(turnoApi);
      setData(
        addDays(setHours(setMinutes(new Date(turnoApi.startDate), 0), 8), 2)
      );
      setMinDate(
        addDays(setHours(setMinutes(new Date(turnoApi.startDate), 0), 8), 2)
      );
      const filter = turnos.filter(
        (turn) => turn.veterinario === turnoApi.veterinario
      );
      setTurnoVetFilter(filter);   
      setTurnoStr(new Date(turnoApi.startDate).toLocaleString());
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleVet = (target) => {
    setTurno({ ...turno, veterinario: target.value });
    const filter = turnos.filter(
      (turn) => turn.veterinario === target.value.trimStart()
    );
    setTurnoVetFilter(filter);
  };

  //manejo de turnos
  const mapTurnos = []; //aqui guardare los turnos en formato Date
  turnoVetFilter.map((turno) => mapTurnos.push(new Date(turno.startDate))); //recorro el array de turnos y los voy convirtiendo a formato Date y guardando en el array mapTurnos.
  const filterTurnos = mapTurnos.filter(
    (turno) => turno.getDate() === data.getDate()
  ); //filtro los turnos en funcion a la fecha
  const excTimes = []; //aqui se guardaran los excludes times del dia de la fecha
  filterTurnos.map((turno) =>
    excTimes.push(
      setHours(setMinutes(turno, turno.getMinutes()), turno.getHours())
    )
  ); //aqui mapeo los turnos filtrados
  const includesTimes = [
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
  //fin manejo de turnos
  //referencias
  const detalleCitaRef = useRef("");
  //navigate
  const navigate = useNavigate();
  //handle date
  const handleDate = (date) => {
    setData(date);
  };
  //gralValidate
  const gralValidate = () => {
    if (
      validateTextoEsp(turno.mascota) &&
      validateTextoEsp(turno.veterinario) &&
      validateTextoEsp(detalleCitaRef.current.value.trimStart())&&testDate()
    ) {
      return true;
    } else {
      return false;
    }
  };
  //validaciones
  const[inputMasc, setInputMasc]=useState("");
  const [inputVet, setInputVet]=useState("");
  const [inputDetail, setInputDetail]=useState("");
  const [inputDate, setInputDate]=useState("");
  useEffect(()=>{
    setInputMasc(document.getElementById("inputMasc"));
    setInputVet(document.getElementById("inputVet"));
    setInputDetail(document.getElementById("inputDetail"));
    setInputDate(document.getElementById("inputDate"));    
  },[]);  
  const testMasc=()=>{
    if (validateTextoEsp(inputMasc.value)&&inputMasc.value!=="") {
      inputMasc.className="form-control is-valid";
      return true;
    }else{
      inputMasc.className="form-control is-invalid"
      return false;
    }
  };

  const testVet=()=>{
    if (validateTextoEsp(inputVet.value)&&inputVet.value!=="") {
      inputVet.className="form-control is-valid";
      return true;
    }else{
      inputVet.className="form-control is-invalid";
      return false;
    }
  };

  const testDetail=()=>{
    if (validateTextoEsp(inputDetail.value)&&inputDetail.value.length>=4) {
      inputDetail.className="form-control is-valid";
      return true;
    }else{
      inputDetail.className="form-control is-invalid";
      return false;
    }
  };

  const testDate=()=>{    
    if (data.getDay()!==0&&data.getDay()!==6) {
      inputDate.className="form-control is-valid mb-3";
      return true;
    }else{
      inputDate.className="form-control is-invalid mb-3";
      return false;
    }
  };
  //

  //handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();    
    if (gralValidate()) {
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
    } else {      
      Swal.fire("Ops!", "Debe completar todos los campos correctamente", "error");
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
        <h1 className="font-celeste-crud">Editar Turno</h1>
        <hr />
        <Form
          className="my-5"
          onSubmit={handleSubmit}
          noValidate          
        >
          <Form.Group className="mb-3">
            <Form.Label className="font-celeste-crud" htmlFor="inputMasc">Mascota*</Form.Label>
            <Form.Select
              required
              id="inputMasc"
              value={turno.mascota}
              onChange={({ target }) => {
                setTurno({ ...turno, mascota: target.value });
                testMasc();
              }}
            >
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
            <Form.Label className="font-celeste-crud" htmlFor="inputVet">Veterinario*</Form.Label>
            <Form.Select
              required
              id="inputVet"
              value={turno.veterinario}
              onChange={({ target }) => {
                handleVet(target);
                testVet();
              }}
            >
              <option value="Molinari Pablo">Dr. Molinari Pablo D.</option>
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
              placeholder="Mascota"
              style={{ height: "100px" }}
              defaultValue={turno.detalleCita}
              ref={detalleCitaRef}
              minLength={4}
              maxLength={500}
              onChange={testDetail}
            ></Form.Control>
            <Form.Control.Feedback type="invalid" className="fw-bold">
              Ingrese el detalle de la cita (min. 4 caracteres, max. 500
              caracteres)
            </Form.Control.Feedback>
          </Form.Group>
          {/* inicio datepickery */}          
            <Form.Group>              
              <Form.Label className="font-celeste-crud" htmlFor="inputDate">
                Seleccione fecha y hora su turno era " {turnoStr} "          
              </Form.Label>
              <DatePicker
                required
                id="inputDate"
                locale={es}
                selected={data}
                onChange={(date) => {
                  handleDate(date);
                  testDate();
                }}
                onClickOutside={testDate}
                minDate={minDate}
                filterDate={(date) =>
                  date.getDay() !== 6 && date.getDay() !== 0
                }
                showTimeSelect
                excludeTimes={excTimes}
                includeTimes={includesTimes}
                dateFormat="Pp"
                className="container-fluid form-control mb-3"
              ></DatePicker>
            </Form.Group>
          <div className="d-flex justify-content-end">
            <button className="btn-celeste-crud text-center mx-1">
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

export default EditTurnos;
