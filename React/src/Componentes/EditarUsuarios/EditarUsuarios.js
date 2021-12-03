import { useState } from 'react'
import './App.css';


function RegistroEntradaSalidaComponent() {
    const [dni, setdni] = useState("1897171da")
  
    function cambiarDni(event) {
      setdni(event.target.value)
    }
  
    return (
      <div class="container" className="App">
        <label>DNI</label>
        <input type="text" value={dni} onChange={cambiarDni} />
        <button  onClick={() => registrarEntrada(dni)} >Entrada</button>
        <button onClick={() => registrarSalida(dni)} >Salida</button>
      </div>
    );
  }
  
async function updateEntrada(idUsuario, esEntrada) {
    let response = await fetch(`http://localhost:55434/actualizarUsuario`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ Id: idUsuario, estaEnOficina: esEntrada })
    })
    let respuesta = await response.json();
    console.log(respuesta)
    return respuesta;
  }

export default updateEntrada;