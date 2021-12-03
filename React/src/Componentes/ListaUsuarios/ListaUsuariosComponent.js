import './ListaUsuariosComponent.css';

function ListaUsuariosComponent() {

    return (
        <table class="table">
            <thead class="table1">
                <tr>
                    <th class="text-center" scope="col">DNI</th>
                    <th class="text-center" scope="col">Nombre</th>
                    <th class="text-center" scope="col">Apellido</th>
                    <th class="text-center" scope="col">Última fecha entrada</th>
                    <th class="text-center" scope="col">Última fecha salida</th>
                    <th class="text-center" scope="col">Está en oficina</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th class="text-center" scope="row">12121212-F</th>
                    <td class="text-center">Markfdfgdsgsdfgsfssgd</td>
                    <td class="text-center">Otto</td>
                    <td class="text-center">@mdo</td>
                    <td class="text-center">@mdo</td>
                    <td class="text-center">@mdo</td>
                    <td>
                        <button class="btn btn-danger">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}


export default ListaUsuariosComponent;