import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
          tipodosis: "",
          bovino: "",
          usuario: ""
        }
    }

    componentDidMount() {
        this.listarControlTratamientos();
        localStorage.setItem("edit", "");
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

    EliminarTratamientos = async (id) => {
		const res = await axios.delete('http://localhost:3001/controlTratamientos/' + id);
		console.log(res);
		this.listarControlTratamientos();
    };

   cargarInformacion = (controlTratamientos) => {
       console.log("ESTE ES"+controlTratamientos);
       console.log("ESTA ES FECHA"+controlTratamientos.fecha_inicio);
        localStorage.setItem("id_tratamiento",controlTratamientos.id_tratamiento);
        localStorage.setItem("fecha_inicio",controlTratamientos.fecha_inicio);
        localStorage.setItem("fecha_fin",controlTratamientos.fecha_fin);
        localStorage.setItem("hora",controlTratamientos.hora);
        localStorage.setItem("enfermedad",controlTratamientos.enfermedad);
        localStorage.setItem("detalles",controlTratamientos.detalles);
        localStorage.setItem("tipodosis",controlTratamientos.tipodosis);
        localStorage.setItem("bovino",controlTratamientos.bovino);
        localStorage.setItem("usuario",controlTratamientos.usuario);
        localStorage.setItem("edit","si");
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
                        {this.state.controldeTratamientos.map((controlTratamientos,i)=> {
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
                                    <td><Link className="btn btn-outline-dark btn-sm " key={i} onClick={this.cargarInformacion.bind(this,controlTratamientos)} to={'/actualizar/' + controlTratamientos.id_tratamiento}>
									<button>Editar</button>
								    </Link></td>
                                    <td><button className="btn btn-danger" onClick={() => this.EliminarTratamientos(controlTratamientos.id_tratamiento)}>Eliminar</button></td>
                                
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
                <br/>
                <br/>
                <center>
                <Link to="/insertarControlTratamientos">
                  <button>Insertar</button>
                </Link>
                </center>
                
            </div>
        )
    }
}
