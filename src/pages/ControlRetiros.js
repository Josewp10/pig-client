import React from 'react'
import axios from 'axios'


export default class ControlRetiros extends React.Component {

    state = {
        control: [],
        controlRetiro: {
          id_retiro: "",
          hora_ingreso: "",
          fecha_ingreso: "",
          fecha_salida: "",
          num_ordenos_descartar: "",
          observaciones: "",
          bovino: "",
          usuario: ""
        }
    }

    componentDidMount() {
        this.listarControl();
    }


    listarControl() {
        axios
            .get("http://localhost:3001/controlRetiros")
            .then(response => {
                console.log(response)
                this.setState({
                    control: response.data.info
                });
                console.log("Control de Retiro")
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
                    <h2 align="center">Control de Retiro de Leche</h2>
                    <br />
                </div>
                <center>
                <table className="table" striped bordered hover responsive >
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Hora Ingreso</th>
                            <th>Fecha Ingreso</th>
                            <th>Fecha Salida</th>
                            <th>Número de Ordeños a descartar</th>
                            <th>Observaciones</th>
                            <th>Nombre Bovino</th>
                            <th>Nombre Usuario</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.control.map(controlRetiro => {
                            return (
                                <tr>
                                    <td>{controlRetiro.id_retiro}</td>
                                    <td>{controlRetiro.hora_ingreso}</td>
                                    <td>{controlRetiro.fecha_ingreso}</td>
                                    <td>{controlRetiro.fecha_salida}</td>
                                    <td align="center">{controlRetiro.num_ordenos_descartar}</td>
                                    <td>{controlRetiro.observaciones}</td>
                                    <td>{controlRetiro.bovino}</td>
                                    <td>{controlRetiro.usuario}</td>
                                    <td><button className="btn btn-primary">Editar</button></td>
                                    <td><button className="btn btn-danger">Eliminar</button></td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
                </center>
            </div>
        )
    }
}