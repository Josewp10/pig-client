import React from 'react'
import axios from 'axios'


export default class ControlTratamientos extends React.Component {

    state = {
        controldeTratamientos: [],
        controlTratamientos: {
          id_tratamiento: "",
          fecha_inicio: "",
          fecha_fin: "",
          hora: "",
          enfermedad: "",
          detalles: "",
          tipodosis: "Diaria",
          bovino: "",
          usuario: ""
        }
    }

    componentDidMount() {
        this.listarControlTratamientos();
    }


    listarControlTratamientos() {
        axios
            .get("http://localhost:3001/controlTratamientos")
            .then(response => {
                console.log(response)
                this.setState({
                    controldeTratamientos: response.data.info
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
                    <h2 align="center">Control de Tratamientos</h2>
                    <br />
                </div>
                <table className="table" striped bordered hover responsive align="center">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Fecha Inicio</th>
                            <th>Fecha Fin</th>
                            <th>Hora</th>
                            <th>Enfermedad</th>
                            <th>Detalles</th>
                            <th>Tipo dosis</th>
                            <th>Nombre Bovino</th>
                            <th>Nombre Usuario</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.controldeTratamientos.map(controlTratamientos=> {
                            return (
                                <tr>
                                    <td>{controlTratamientos.id_tratamiento}</td>
                                    <td>{controlTratamientos.fecha_inicio}</td>
                                    <td>{controlTratamientos.fecha_fin}</td>
                                    <td>{controlTratamientos.hora}</td>
                                    <td>{controlTratamientos.enfermedad}</td>
                                    <td>{controlTratamientos.detalles}</td>
                                    <td>{controlTratamientos.tipodosis}</td>
                                    <td>{controlTratamientos.bovino}</td>
                                    <td>{controlTratamientos.usuario}</td>
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
