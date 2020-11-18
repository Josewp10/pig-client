import React, { Component } from 'react';
import axios from 'axios';

export default class insertarControlTratamientos extends Component {
    state = {
        fecha_inicio: '',
        fecha_fin: '',
        hora: '',
        enfermedad: '',
        detalles: '',
        tipodosis: '',
        bovino: '',
        usuario: ''
    };

    async componentDidMount() {

        const res = await axios.get('http://localhost:3001/controlTratamientos');
        this.setState({
            fecha_inicio: res.data.fecha_inicio,
            fecha_fin: res.data.fecha_fin,
            hora: res.data.hora,
            enfermedad: res.data.enfermedad,
            detalles: res.data.detalles,
            tipodosis: res.data.tipodosis,
            bovino: res.data.id_bovino,
            usuario: res.data.id_usuario
        });
        console.log(res);
    }

    onSubmit = async (e) => {
        e.preventDefault();

        await axios.post('http://localhost:3001/controlTratamientos', {
            fecha_inicio: this.state.fecha_inicio,
            fecha_fin: this.state.fecha_fin,
            hora: this.state.hora,
            enfermedad: this.state.enfermedad,
            detalles: this.state.detalles,
            tipodosis: this.state.tipodosis,
            bovino: this.state.id_bovino,
            usuario: this.state.id_usuario,
            
        });
        
        this.setState({
            fecha_inicio: '',
            fecha_fin: '',
            hora: '',
            enfermedad: '',
            detalles: '',
            tipodosis: '',
            bovino: '',
            usuario: ''
        });

         //window.location.href = '/controlTratamientos';
         //alert('Control de Tratamiento Insertado');
    };

   

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>Crear Control Tratamientos</h4>
                    <form onSubmit={this.onSubmit} align="center">
                        <div className="form-group">
                            <input
                                value={this.state.fecha_inicio}
                                type="date"
                                className="form-control"
                                placeholder="Fecha Inicio"
                                name="Fecha Inicio"
                                required
                                onChange={this.onInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                value={this.state.fecha_fin}
                                type="date"
                                className="form-control"
                                placeholder="Fecha Fin"
                                name="Fecha Fin"
                                onChange={this.onInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                value={this.state.hora}
                                type="time"
                                className="form-control"
                                placeholder="Hora"
                                name="Hora"
                                onChange={this.onInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                value={this.state.enfermedad}
                                type="text"
                                className="form-control"
                                placeholder="Enfermedad"
                                onChange={this.onInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                value={this.state.detalles}
                                className="form-control"
                                placeholder="Detalles"
                                name="Detalles"
                                onChange={this.onInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                value={this.state.tipodosis}
                                type="number"
                                className="form-control"
                                placeholder="Tipo de Dosis"
                                name="Tipo de Dosis"
                                onChange={this.onInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                value={this.state.id_bovino}
                                type="number"
                                className="form-control"
                                placeholder="bovino"
                                name="bovino"
                                onChange={this.onInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                value={this.state.id_usuario}
                                type="number"
                                className="form-control"
                                placeholder="usuario"
                                name="usuario"
                                onChange={this.onInputChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Guardar
                            </button>
                    </form>
                </div>
            </div>
        );
    }
}