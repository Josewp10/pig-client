import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
        localStorage.setItem("edit", "");
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

    EliminarControlRetiro = async (id) => {
		const res = await axios.delete('http://localhost:3001/controlRetiros/' + id);
		console.log(res);
		this.listarControl();
    };

    cargarInformacion = (controlRetiro) => {
         localStorage.setItem("id_retiro",controlRetiro.id_retiro);
         localStorage.setItem("hora_ingreso",controlRetiro.hora_ingreso);
         localStorage.setItem("fecha_ingreso",controlRetiro.fecha_ingreso);
         localStorage.setItem("fecha_salida",controlRetiro.fecha_salida);
         localStorage.setItem("num_ordenos_descartar",controlRetiro.num_ordenos_descartar);
         localStorage.setItem("observaciones",controlRetiro.observaciones);
         localStorage.setItem("bovibo",controlRetiro.bovino);
         localStorage.setItem("usuario",controlRetiro.usuario);
         localStorage.setItem("edit","si");
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
                        {this.state.control.map((controlRetiro,i) => {
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
                                    <td><Link className="btn btn-outline-dark btn-sm " key={i} onClick={this.cargarInformacion.bind(this,controlRetiro)} to={'/actualizarControlRetiro/' + controlRetiro.id_retiro}>
									<button>Editar</button>
								    </Link></td>
                                    <td><button className="btn btn-danger" onClick={() => this.EliminarControlRetiro(controlRetiro.id_retiro)}>Eliminar</button></td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
                </center>
                <br/>
                <br/>
                <center>
                <Link to="/insertarControlRetiro">
                  <button>Insertar</button>
                </Link>
                </center>
                
            </div>
        )
    }
}