import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
                        {this.state.controldeCelo.map((controlCelo,i)=> {
                            return (
                                <tr>
                                    <td>{controlCelo.id_celo}</td>
                                    <td>{controlCelo.fecha_inicio}</td>
                                    <td>{controlCelo.detalles}</td>
                                    <td>{controlCelo.Nombre_Macho}</td>
                                    <td>{controlCelo.Nombre_Hembra}</td>
                                    <td>{controlCelo.nombre}</td>
                                    <td><Link className="btn btn-outline-dark btn-sm " key={i} onClick={this.cargarInformacion.bind(this,controlCelo)} to={'/actualizarCelo/' + controlCelo.id_celo}>
									<button>Editar</button>
								    </Link></td>
                                    <td><button className="btn btn-danger" onClick={() => this.EliminarCelo(controlCelo.id_celo)}>Eliminar</button></td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
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
