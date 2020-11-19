import React, { Component } from 'react';
import axios from 'axios';

export default class insertarControlTratamientos extends Component {
    constructor() {
        super();
        this.state = {
            id_tratamiento: '',
            fecha_inicio: '',
            fecha_fin: '',
            hora: '',
            enfermedad: '',
            detalles: '',
            tipo_dosis: '',
            id_bovino: '',
            id_usuario: '',
            edit: ''
        };
        this.onInputChange = this.onInputChange.bind(this);
    }


    async componentDidMount() {
        this.state.edit = localStorage.getItem("edit");
        console.log("Prueba" + this.state.edit);
        this.state.id_tratamiento = localStorage.getItem("id_tratamiento");
        console.log("PARA PROBAR" + this.state.id_tratamiento);
        const res = await axios.get('http://localhost:3001/controlTratamientos/' + this.state.id_tratamiento);

        if(this.state.edit === "si"){
            let fechaInicioModificada = res.data.info[0].fecha_inicio.slice(0, 10);
            let fechaFinModificada = res.data.info[0].fecha_fin.slice(0, 10);
            this.setState({
                fecha_inicio: fechaInicioModificada,
                fecha_fin: fechaFinModificada,
                hora: res.data.info[0].hora,
                enfermedad: res.data.info[0].enfermedad,
                detalles: res.data.info[0].detalles,
                tipo_dosis: res.data.info[0].tipo_dosis,
                id_bovino: res.data.info[0].id_bovino,
                id_usuario: res.data.info[0].id_usuario,
                id_tratamiento: res.data.info[0].id_tratamiento,
            });
        }
       
        console.log(res);
    }

    onSubmit = async (e) => {

        console.log(this.state.bovino);
        e.preventDefault();

        if (this.state.edit) {
            const res = await axios.put('http://localhost:3001/controlTratamientos/' + this.state.id_tratamiento, {
                id_tratamiento: this.state.id_tratamiento,
                fecha_inicio: this.state.fecha_inicio,
                fecha_fin: this.state.fecha_fin,
                hora: this.state.hora,
                enfermedad: this.state.enfermedad,
                detalles: this.state.detalles,
                tipo_dosis: this.state.tipo_dosis,
                id_bovino: this.state.id_bovino,
                id_usuario: this.state.id_usuario,
            }).then((response) => {
                window.location.href = '/controlTratamientos';
                alert('Control de Tratamiento Actualizado');               
            }); console.log(res);
        } else {
            await axios.post('http://localhost:3001/controlTratamientos', {
                fecha_inicio: this.state.fecha_inicio,
                fecha_fin: this.state.fecha_fin,
                hora: this.state.hora,
                enfermedad: this.state.enfermedad,
                detalles: this.state.detalles,
                tipo_dosis: this.state.tipo_dosis,
                id_bovino: this.state.id_bovino,
                id_usuario: this.state.id_usuario,
            }).then((response) => {
                window.location.href = '/controlTratamientos';
                alert('Control de Tratamiento Insertado');               
            });
        }

        this.setState({
            fecha_inicio: '',
            fecha_fin: '',
            hora: '',
            enfermedad: '',
            detalles: '',
            tipo_dosis: '',
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
                    {!(this.state.edit === "si") ? <h4>Crear Control</h4> : <h4>Actualizar Control :{this.state.id_tratamiento}</h4>}
                    <form onSubmit={this.onSubmit} align="center">
                        <div className="form-group">
                            <input
                                value={this.state.fecha_inicio}
                                type="date"
                                className="form-control"
                                placeholder="fecha_inicio"
                                name="fecha_inicio"
                                onChange={(e) => this.onInputChange(e)}
                                required

                            />
                        </div>
                        <div className="form-group">
                            <input
                                value={this.state.fecha_fin}
                                type="date"
                                className="form-control"
                                placeholder="fecha_fin"
                                name="fecha_fin"
                                onChange={this.onInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                value={this.state.hora}
                                type="time"
                                className="form-control"
                                placeholder="hora"
                                name="hora"
                                onChange={this.onInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                value={this.state.enfermedad}
                                type="text"
                                className="form-control"
                                placeholder="enfermedad"
                                name="enfermedad"
                                onChange={(e) => this.onInputChange(e)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                value={this.state.detalles}
                                className="form-control"
                                placeholder="detalles"
                                name="detalles"
                                onChange={this.onInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                value={this.state.tipo_dosis}
                                type="number"
                                className="form-control"
                                placeholder="tipo_dosis"
                                name="tipo_dosis"
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