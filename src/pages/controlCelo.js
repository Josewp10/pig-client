import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import celo from "../assets/celo.png";
import {TableContainer, TableBody, Table, TableHead,TableRow, TableCell} from '@material-ui/core';

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
        this.listarControlCelo();
        localStorage.setItem("edit", "");
    }


    listarControlCelo() {
        axios
            .get("http://localhost:3001/celo")
            .then(response => {
                console.log(response)
                this.setState({
                    controldeCelo: response.data.info
                });
                console.log("Control Celo")
                console.log(this.state.control);
            })
            .catch(error => {
                console.log(error);
            });
    }

    EliminarCelo= async (id) => {
		const res = await axios.delete('http://localhost:3001/celo/' + id);
		console.log(res);
		this.listarControlCelo();
    };

    cargarInformacion = (controlCelo) => {
        console.log("ESTE ES"+controlCelo);
         localStorage.setItem("id_celo",controlCelo.id_celo);
         localStorage.setItem("fecha_inicio",controlCelo.fecha_inicio);
         localStorage.setItem("detalles",controlCelo.detalles);
         localStorage.setItem("id_bovino",controlCelo.id_bovino);
         localStorage.setItem("id_bovino",controlCelo.id_bovino);
         localStorage.setItem("usuario",controlCelo.usuario);
         localStorage.setItem("edit","si");
     }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                <br />
                    <center>
                    <img src={celo} alt=""/>
                    <h2>Control de Celo </h2>
                    </center>
                </div>
                <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Fecha Inicio</TableCell>
                            <TableCell>Detalles</TableCell>
                            <TableCell>Nombre Toro</TableCell>
                            <TableCell>Nombre Vaca</TableCell>
                            <TableCell>Nombre Usuario</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.controldeCelo.map((controlCelo,i)=> {
                            return (
                                <TableRow>
                                    <TableCell>{controlCelo.fecha_inicio}</TableCell>
                                    <TableCell>{controlCelo.detalles}</TableCell>
                                    <TableCell>{controlCelo.Nombre_Macho}</TableCell>
                                    <TableCell>{controlCelo.Nombre_Hembra}</TableCell>
                                    <TableCell>{controlCelo.nombre}</TableCell>
                                    <TableCell><Link className="btn btn-outline-dark btn-sm " key={i} onClick={this.cargarInformacion.bind(this,controlCelo)} to={'/actualizarCelo/' + controlCelo.id_celo}>
									<button>Editar</button>
								    </Link></TableCell>
                                    <TableCell><button className="btn btn-danger" onClick={() => this.EliminarCelo(controlCelo.id_celo)}>Eliminar</button></TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
                </TableContainer>
                <br/>
                <br/>
                <center>
                <Link to="/insertarCelo">
                  <button>Insertar</button>
                </Link>
                </center>
            </div>
        )
    }
}
