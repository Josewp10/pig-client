import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
                    <br />
                    <h1 align="center">PIG Plataforma de Gestion Ganadera</h1>
                    <br />
                    <h2 align="center">Eventos o Tareas para realizar en las fincas</h2>
                    <br />
                </div>
                <center>
                <table className="table" striped bordered hover responsive >
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Fecha Ingreso</th>
                            <th>Nombre Tarea</th>
                            <th>Nombre Usuario</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tarea.map((registroTareas,i) => {
                            return (
                                <tr>
                                    <td>{registroTareas.id_registro}</td>
                                    <td>{registroTareas.fecha}</td>
                                    <td>{registroTareas.tareas}</td>
                                    <td>{registroTareas.usuario}</td>
                                    <td><Link className="btn btn-outline-dark btn-sm " key={i} onClick={this.cargarInformacion.bind(this,registroTareas)} to={'/actualizarTareas/' + registroTareas.id_registro}>
									<button>Editar</button>
								    </Link></td>
                                    <td><button className="btn btn-danger" onClick={() => this.EliminarTarea(registroTareas.id_registro)}>Eliminar</button></td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
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