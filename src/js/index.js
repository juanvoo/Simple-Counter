//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

function Contador(props) {
    return ( <
        div className = "Cuerpo text-center bg-black mt-3 ms-3 me-3" >
        <
        div className = "calendario" >
        <
        i className = "far fa-clock" / >
        <
        /div><
        div className = "seis" > {
            props.digitoSeis % 10
        } < /div> <
        div className = "cinco" > {
            props.digitoCinco % 10
        } < /div> <
        div className = "cuatro" > {
            props.digitoCuatro % 10
        } < /div> <
        div className = "tres" > {
            props.digitoTres % 10
        } < /div> <
        div className = "dos" > {
            props.digitoDos % 10
        } < /div> <
        div className = "uno" > {
            props.digitoUno % 10
        } < /div> < /
        div >
    );
}

Contador.propTypes = {
    digitoSeis: PropTypes.number,
    digitoCinco: PropTypes.number,
    digitoCuatro: PropTypes.number,
    digitoTres: PropTypes.number,
    digitoDos: PropTypes.number,
    digitoUno: PropTypes.number
};

let counter = 0;
setInterval(function() {
    const seis = Math.floor(counter / 500000);
    const cinco = Math.floor(counter / 50000);
    const cuatro = Math.floor(counter / 5000);
    const tres = Math.floor(counter / 500);
    const dos = Math.floor(counter / 50);
    const uno = Math.floor(counter / 5);
    //console.log(uno, dos, tres, cuatro, cinco, seis);
    counter++;


    //render your react application
    ReactDOM.render( <
        Contador digitoUno = {
            uno
        }
        digitoDos = {
            dos
        }
        digitoTres = {
            tres
        }
        digitoCuatro = {
            cuatro
        }
        Contador digitoCinco = {
            cinco
        }
        Contador digitoSeis = {
            seis
        }
        />,
        document.querySelector("#app")
    );
}, 300);