import React, { Component } from 'react';
import axios from 'axios';

export default class insertarTareas extends Component {
    constructor() {
        super();
        this.state = {           
            id_registro: '',
            id_tarea: '',
            id_usuario: '',
            fecha: '',
            edit: ''
        };
        this.onInputChange = this.onInputChange.bind(this);
    }

    async componentDidMount() {
        this.state.edit = localStorage.getItem("edit");
        console.log("Prueba" + this.state.edit);
        this.state.id_registro = localStorage.getItem("id_registro");
        console.log("PARA PROBAR" + this.state.id_registro);
        const res = await axios.get('http://localhost:3001/registroTareas/' + this.state.id_registro);
        console.log(res);
        if (this.state.edit === "si") {
            let fechaTarea = res.data.info[0].fecha.slice(0, 10);
            this.setState({
                fecha: fechaTarea,
                id_tarea: res.data.info[0].id_tarea,
                id_usuario: res.data.info[0].id_usuario,
                id_registro: res.data.info[0].id_registro,
            });
        }
        console.log(res);
    }

    onSubmit = async (e) => {
        
        e.preventDefault();

        if (this.state.edit) {
            const res = await axios.put('http://localhost:3001/registroTareas/' + this.state.id_registro, {
                fecha: this.state.fecha,
                id_tarea: this.state.id_tarea,
                id_usuario: this.state.id_usuario,
                id_registro: this.state.id_registro,
            }).then((response) => {
                window.location.href = '/Tareas';
                alert('Tareas para realizar en la Finca Actualizado');               
            }); console.log(res);
        } else {
            await axios.post('http://localhost:3001/registroTareas', {
                fecha: this.state.fecha,
                id_tarea: this.state.id_tarea,
                id_usuario: this.state.id_usuario,
            }).then((response) => {
                window.location.href = '/Tareas';
                alert('Tareas para realizar en la Finca Insertado');               
            });
        }

        this.setState({
            id_registro: '',
            id_tarea: '',
            id_usuario: '',
            fecha: ''
        });
    };


    onInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    };

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    {!(this.state.edit === "si") ? <h4>Crear Tarea</h4> : <h4>Actualizar Tarea:{this.state.id_registro}</h4>}
                    <form onSubmit={this.onSubmit} align="center">
                        <div className="form-group">
                            <input
                                value={this.state.fecha}
                                type="date"
                                className="form-control"
                                placeholder="fecha"
                                name="fecha"
                                onChange={(e) => this.onInputChange(e)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                value={this.state.id_usuario}
                                type="number"
                                className="form-control"
                                placeholder="id_usuario"
                                name="id_usuario"
                                onChange={this.onInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                value={this.state.id_tarea}
                                type="number"
                                className="form-control"
                                placeholder="id_tarea"
                                name="id_tarea"
                                onChange={this.onInputChange}
                                required
                            />
                        </div>
                        {(this.state.edit === "si") ? (
                            <button type="submit" className="btn btn-primary">
                                Actualizar
                            </button>
                        ) : (
                                <button type="submit" className="btn btn-primary">
                                    Guardar
                                </button>
                            )}
                    </form>
                </div>
            </div>
        );
    }
}