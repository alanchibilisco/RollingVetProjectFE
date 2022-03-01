# **ROLLING CODE SCHOOL-PROYECTO FINAL**

## ***Nombre del Proyecto: "RollingVet"***

- Proyecto basado en un sitio ficticio de una veterinaria, en la cual se desarrolla un sistema de gestion de pacientes, turnos y manejo de comentarios, todos mediante CRUD (Create, Read, Update, Delete). Para acceder a dicho sistema se implemento un metodo de login para el administrador del sitio, el cual tiene total acceso y permisos.
- Incluye tambien un sistema de respuesta automatica por email para las consultas de los planes ofrecidos por el sitio y para las consultas desde la pagina de contacto.
 
## ***Comandos***
Cuando se clone este repositorio se deben ejecutar los siguientes comandos:
# ****Para instalar las dependencias****
npm i
# ****Para ejecutar nuestra app de react****
npm start
# ****Para ejecutar nuestra base de datos (Ejecutar en otra terminal/consola distinta a donde se esta ejecutando react)
json-server --watch db.json --port 3004

## ***Variables de Entonrno****

- REACT_APP_API_PACIENTES=http://localhost:3004/pacientes
- REACT_APP_API_TURNOS=http://localhost:3004/turnos
- REACT_APP_API_USER=http://localhost:3004/users
- REACT_APP_API_COMENTARIOS=http://localhost:3004/comentarios
- REACT_APP_KEY (NECESARIA PARA EL MANEJO DE LA API openWeather, la misma se obtiene registrando en el sitio de openweather)

## **Estructura general del sitio**
- Pagina principal
- Pagina quienes somos
- Pagina nuestros servicios
- Pagina contactanos
- Pagina login
- Pagina administracion
- Pagina plan primeros pasos
- Pagina plan madurando
- Pagina plan adultos
- Pagina error404 

## **DEMO**
- 
- Usuario Administrador (Usuario: admin, Password: rolling)

## **Librerias utilizadas**
- IPIFY2 = npm i ipify2
- npm install date-fns --save
- npm install react-datepicker --save
- npm install bcryptjs
- npm install react-router-dom@6
- npm i --save @fortawesome/fontawesome-svg-core
- npm install --save @fortawesome/free-solid-svg-icons
- npm install --save @fortawesome/react-fontawesome
- npm install sweetalert2
- npm install react-bootstrap bootstrap@5.1.3
- npm install @emailjs/browser --save

## **Fase de Desarrollo**
-Pagina de servicios, donde se visualizara todos los servicios ofrecidos por el sitio y los productos que comercializa el mismo.

## **Desarrollo**
-Chibilisco Alan Antonio y otros.

##VARIABLES DE ENTORNO:
EJECUTAR json-server --watch db.json --port 3004
EJECUTAR npm start
##librerias a instalar
npm install
IPIFY2 = npm i ipify2
npm install date-fns --save
npm install react-datepicker --save
npm install bcryptjs
npm install react-router-dom@6
npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome
npm install sweetalert2
npm install react-bootstrap bootstrap@5.1.3
npm install @emailjs/browser --save


##LOGIN
#USER: admin
#PASS: rolling

