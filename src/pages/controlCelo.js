import React from 'react'
import axios from 'axios'


export default class ControlCelo extends React.Component {

    state = {
        controldeCelo: [],
        controlCelo: {
          id_celo: "",
          fecha_inicio: "",
          detalles: "",
          NombreMacho: "",
          NombreHembra: "",
          nombre: ""
        }
    }

    componentDidMount() {
        this.listarControlTratamientos();
    }


    listarControlTratamientos() {
        axios
            .get("http://localhost:3001/celo")
            .then(response => {
                console.log(response)
                this.setState({
                    controldeCelo: response.data.info
                });
                console.log("Control Tratamientos")
                console.log(this.state.control);
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <br />
                    <h1 align="center">PIG Plataforma de Gestion Ganadera</h1>
                    <br />
                    <h2 align="center">Control de Celo</h2>
                    <br />
                </div>
                <table className="table" striped bordered hover responsive align="center">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Fecha Inicio</th>
                            <th>Detalles</th>
                            <th>Nombre Toro</th>
                            <th>Nombre Vaca</th>
                            <th>Nombre Usuario</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.controldeCelo.map(controlCelo=> {
                            return (
                                <tr>
                                    <td>{controlCelo.id_celo}</td>
                                    <td>{controlCelo.fecha_inicio}</td>
                                    <td>{controlCelo.detalles}</td>
                                    <td>{controlCelo.Nombre_Macho}</td>
                                    <td>{controlCelo.Nombre_Hembra}</td>
                                    <td>{controlCelo.nombre}</td>
                                    <td><button className="btn btn-primary">Actualizar</button></td>
                                    <td><button className="btn btn-danger">Eliminar</button></td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        )
    }
}
