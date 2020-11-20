import React, { Component } from 'react';
import axios from 'axios';

export default class insertarControlRetiro extends Component {
    constructor() {
        super();
        this.state = {
            id_retiro: '',
            hora_ingreso: '',
            fecha_ingreso: '',
            fecha_salida: '',
            num_ordenos_descartar: '',
            observaciones: '',
            id_bovino: '',
            id_usuario: '',
            edit: ''
        };
        this.onInputChange = this.onInputChange.bind(this);
    }


    async componentDidMount() {
        this.state.edit = localStorage.getItem("edit");
        console.log("Prueba" + this.state.edit);
        this.state.id_retiro = localStorage.getItem("id_retiro");
        console.log("PARA PROBAR" + this.state.id_retiro);
        const res = await axios.get('http://localhost:3001/controlRetiros/' + this.state.id_retiro);
        if (this.state.edit === "si") {
            let fechaIngreso = res.data.info[0].fecha_ingreso.slice(0, 10);
            let fechaSalida = res.data.info[0].fecha_salida.slice(0, 10);
            this.setState({
                fecha_ingreso: fechaIngreso,
                fecha_salida: fechaSalida,
                hora_ingreso: res.data.info[0].hora_ingreso,
                num_ordenos_descartar: res.data.info[0].num_ordenos_descartar,
                observaciones: res.data.info[0].observaciones,
                id_bovino: res.data.info[0].id_bovino,
                id_usuario: res.data.info[0].id_usuario,
                id_retiro: res.data.info[0].id_retiro,
            });
        }

        console.log(res);
    }

    onSubmit = async (e) => {

        
        e.preventDefault();

        if (this.state.edit) {
            const res = await axios.put('http://localhost:3001/controlRetiros/' + this.state.id_retiro, {
                id_retiro: this.state.id_retiro,
                hora_ingreso: this.state.hora_ingreso,
                fecha_ingreso: this.state.fecha_ingreso,
                fecha_salida: this.state.fecha_salida,
                num_ordenos_descartar: this.state.num_ordenos_descartar,
                observaciones: this.state.observaciones,
                id_bovino: this.state.id_bovino,
                id_usuario: this.state.id_usuario,
            }).then((response) => {
                window.location.href = '/controlRetiros';
                alert('Control de Retiro Actualizado');               
            }); console.log(res);
        } else {
            await axios.post('http://localhost:3001/controlRetiros', {
                hora_ingreso: this.state.hora_ingreso,
                fecha_ingreso: this.state.fecha_ingreso,
                fecha_salida: this.state.fecha_salida,
                num_ordenos_descartar: this.state.num_ordenos_descartar,
                observaciones: this.state.observaciones,
                id_bovino: this.state.id_bovino,
                id_usuario: this.state.id_usuario,
            }).then((response) => {
                window.location.href = '/controlRetiros';
                alert('Control de Retiro Insertado');               
            });
        }

        this.setState({
            hora_ingreso: '',
            fecha_ingreso: '',
            fecha_salida: '',
            num_ordenos_descartar: '',
            observaciones: '',
            id_bovino: '',
            id_usuario: ''
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
                    {!(this.state.edit === "si") ? <h4 align="center">Crear Control Retiro</h4> : <h4 align="center">Actualizar Control Retiro Id Control Retiro:{this.state.id_retiro}</h4>}
                    <form onSubmit={this.onSubmit} align="center">
                        <div className="form-group">
                            <input
                                value={this.state.hora_ingreso}
                                type="time"
                                className="form-control"
                                placeholder="hora"
                                name="hora_ingreso"
                                onChange={this.onInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                value={this.state.fecha_ingreso}
                                type="date"
                                className="form-control"
                                placeholder="fecha_ingreso"
                                name="fecha_ingreso"
                                onChange={(e) => this.onInputChange(e)}
                                required

                            />
                        </div>
                        <div className="form-group">
                            <input
                                value={this.state.fecha_salida}
                                type="date"
                                className="form-control"
                                placeholder="fecha_salida"
                                name="fecha_salida"
                                onChange={this.onInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                value={this.state.num_ordenos_descartar}
                                type="number"
                                className="form-control"
                                placeholder="Número Ordeños a descartar"
                                name="num_ordenos_descartar"
                                onChange={(e) => this.onInputChange(e)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                value={this.state.observaciones}
                                className="form-control"
                                placeholder="observaciones"
                                name="observaciones"
                                onChange={this.onInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                value={this.state.id_bovino}
                                type="number"
                                className="form-control"
                                placeholder="id_bovino"
                                name="id_bovino"
                                onChange={this.onInputChange}
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