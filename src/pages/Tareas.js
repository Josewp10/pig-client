import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import tareas from "../assets/tareas.png";
import {TableContainer, TableBody, Table, TableHead,TableRow, TableCell} from '@material-ui/core';

export default class Tareas extends React.Component {

    state = {
        tarea: [],
        registroTareas: {
            id_registro:"",
            tareas: "",
            usuario: "",
            fecha: ""
        }
    }

    componentDidMount() {
        this.listarTareas();
        localStorage.setItem("edit", "");
    }


    listarTareas() {
        axios
            .get("http://localhost:3001/registroTareas")
            .then(response => {
                console.log(response)
                this.setState({
                    tarea: response.data.info
                });
                console.log("Tarea")
                console.log(this.state.tarea);
            })
            .catch(error => {
                console.log(error);
            });
    }

    EliminarTarea = async (id) => {
		const res = await axios.delete('http://localhost:3001/registroTareas/' + id);
		console.log(res);
		this.listarTareas();
    };

    cargarInformacion = (registroTareas) => {
         localStorage.setItem("id_registro",registroTareas.id_registro);
         localStorage.setItem("tareas",registroTareas.tareas);
         localStorage.setItem("usuario",registroTareas.usuario);
         localStorage.setItem("fecha",registroTareas.fecha);
         localStorage.setItem("edit","si");
     }
     


    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                <center>
                    <img src={tareas} alt=""/>
                    <h2>Agenda de Tareas a Realizar</h2>
                    </center>
                </div>
                <center>
                    <TableContainer>
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Fecha Ingreso</TableCell>
                            <TableCell>Nombre Tarea</TableCell>
                            <TableCell>Nombre Usuario</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.tarea.map((registroTareas,i) => {
                            return (
                                <TableRow>
                                    <TableCell>{registroTareas.id_registro}</TableCell>
                                    <TableCell>{registroTareas.fecha}</TableCell>
                                    <TableCell>{registroTareas.tareas}</TableCell>
                                    <TableCell>{registroTareas.usuario}</TableCell>
                                    <TableCell><Link className="btn btn-outline-dark btn-sm " key={i} onClick={this.cargarInformacion.bind(this,registroTareas)} to={'/actualizarTareas/' + registroTareas.id_registro}>
									<button>Editar</button>
								    </Link></TableCell>
                                    <TableCell><button className="btn btn-danger" onClick={() => this.EliminarTarea(registroTareas.id_registro)}>Eliminar</button></TableCell>
                                </TableRow>
                            )
                        })}

                    </TableBody>
                </Table>
                </TableContainer>
                </center>
                <br/>
                <br/>
                <center>
                <Link to="/insertarTareas">
                  <button>Insertar</button>
                </Link>
                </center>
             
            </div>
            
        )
    }
}