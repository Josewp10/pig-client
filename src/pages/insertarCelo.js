import React, { Component } from 'react';
import axios from 'axios';

export default class insertarCelo extends Component {
    constructor() {
        super();
        this.state = {
            id_celo: '',
            fecha_inicio: '',
            detalles: '',
            id_macho: '',
            id_hembra: '',
            id_usuario: '',
            edit: ''
        };
        this.onInputChange = this.onInputChange.bind(this);
    }


    async componentDidMount() {
        this.state.edit = localStorage.getItem("edit");
        console.log("Prueba" + this.state.edit);
        this.state.id_celo = localStorage.getItem("id_celo");
        console.log("PARA PROBAR" + this.state.id_celo);
        const res = await axios.get('http://localhost:3001/celo/' + this.state.id_celo);
        if (this.state.edit === "si") {
            let fechaCelo = res.data.info[0].fecha_inicio.slice(0, 10);
            this.setState({
                fecha_inicio: fechaCelo,
                detalles: res.data.info[0].detalles,
                id_macho: res.data.info[0].id_macho,
                id_hembra: res.data.info[0].id_hembra,
                id_usuario: res.data.info[0].id_usuario,
                id_celo: res.data.info[0].id_celo,
            });
        }

        console.log(res);
    }

    onSubmit = async (e) => {

        
        e.preventDefault();

        if (this.state.edit) {
            const res = await axios.put('http://localhost:3001/celo/' + this.state.id_celo, {
                id_celo: this.state.id_celo,
                fecha_inicio: this.state.fecha_inicio,
                detalles: this.state.detalles,
                id_macho: this.state.id_macho,
                id_hembra: this.state.id_hembra,
                id_usuario: this.state.id_usuario,
            }).then((response) => {
                window.location.href = '/controlCelo';
                alert('Control de Celo Actualizado');               
            }); console.log(res);
        } else {
            await axios.post('http://localhost:3001/celo', {
                fecha_inicio: this.state.fecha_inicio,
                detalles: this.state.detalles,
                id_macho: this.state.id_macho,
                id_hembra: this.state.id_hembra,
                id_usuario: this.state.id_usuario,
            }).then((response) => {
                window.location.href = '/controlCelo';
                alert('Control de Celo Insertado');               
            });
        }

        this.setState({
            fecha_inicio: '',
            detalles: '',
            id_macho: '',
            id_hembra: '',
            id_usuario: '',
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
                    {!(this.state.edit === "si") ? <h4>Crear Control Celo</h4> : <h4>Actualizar Control Celo:{this.state.id_retiro}</h4>}
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
                                value={this.state.id_macho}
                                type="number"
                                className="form-control"
                                placeholder="id_macho"
                                name="id_macho"
                                onChange={(e) => this.onInputChange(e)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                value={this.state.id_hembra}
                                type="number"
                                className="form-control"
                                placeholder="id_hembra"
                                name="id_hembra"
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