import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import retiro from "../assets/retiros.png";
import {TableContainer, TableBody, Table, TableHead,TableRow, TableCell} from '@material-ui/core';


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
                    <center>
                    <img src={retiro} alt=""/>
                    <h2>Control de Retiro de Leche</h2>
                    </center>
 
                    <br />
                </div>
                
                <TableContainer>
                    <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Hora Ingreso</TableCell>
                            <TableCell>Fecha Ingreso</TableCell>
                            <TableCell>Fecha Salida</TableCell>
                            <TableCell>Número de Ordeños a descartar</TableCell>
                            <TableCell>Observaciones</TableCell>
                            <TableCell>Nombre Bovino</TableCell>
                            <TableCell>Nombre Usuario</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.state.control.map((controlRetiro,i) => {
                            return (
                                <TableRow>
                                    <TableCell>{controlRetiro.hora_ingreso}</TableCell>
                                    <TableCell>{controlRetiro.fecha_ingreso}</TableCell>
                                    <TableCell>{controlRetiro.fecha_salida}</TableCell>
                                    <TableCell align="center">{controlRetiro.num_ordenos_descartar}</TableCell>
                                    <TableCell>{controlRetiro.observaciones}</TableCell>
                                    <TableCell>{controlRetiro.bovino}</TableCell>
                                    <TableCell>{controlRetiro.usuario}</TableCell>
                                    <TableCell><Link className="btn btn-outline-dark btn-sm " key={i} onClick={this.cargarInformacion.bind(this,controlRetiro)} to={'/actualizarControlRetiro/' + controlRetiro.id_retiro}>
									<button>Editar</button>
								    </Link></TableCell>
                                    <TableCell><button className="btn btn-danger" onClick={() => this.EliminarControlRetiro(controlRetiro.id_retiro)}>Eliminar</button></TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                    </Table>                  
                </TableContainer>
                
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