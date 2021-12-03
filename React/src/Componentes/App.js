import React from "react";
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import RegistroEntradaSalidaComponent from './RegistroEntradaSalida/RegistrarEntradaSalidaComponent';
import ListaUsuariosComponent from './ListaUsuarios/ListaUsuariosComponent';
import AñadirUsuarios from './AñadirUsuarios/AñadirUsuarios';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<RegistroEntradaSalidaComponent />} />
                    <Route path="/listaUsuarios" element={<ListaUsuariosComponent />} />
                    <Route path="/crearUsuarios" element={<AñadirUsuarios />} />
                </Routes>
            </Router>
        </div>

    );
}

export default App;