import React from "react";
import axios from 'axios';
import moment from 'moment';
import ReactDatetime from "react-datetime";
import { Link } from "react-router-dom";

import {
    FormGroup,
    Form,
    Input,
    Row,
    Card,
    Button,
    Container,
    Col,
    Modal,
    InputGroupAddon,
    InputGroupText,
    InputGroup
} from "reactstrap";

import TernerasDestetadasHeader from "../../components/Headers/produccion";

class insertarProduccionLechera extends React.Component {

    constructor() {
        super();
        this.state = {
            token: "",
            id_TProduccion: "",
            id_lecheria: "",
            id_bovino: "",
            nombre: "",
            fecha: "",
            cantidad_dia: "",
            id_usuario: "",
            listaProducciones: [],
            lactantes: [],
            encargados: [],
            lecherias: [],
            notificationModal: false,
            errorModal: false,
        };
        this.onInputChange = this.onInputChange.bind(this);
    }



    componentDidMount() {
        this.token = localStorage.getItem("token");
        axios
            .get("https://vache-server.herokuapp.com/lecherias",{ headers: { token: this.token } })
            .then(response => {
                console.log(response)
                this.setState({
                    lecherias: response.data.info
                });
                console.log("Registro Lecherias")
                console.log(this.state.control);
            })
            .catch(error => {
                console.log(error);
            });

        axios
            .get("https://vache-server.herokuapp.com/bovinos/tipo/8",{ headers: { token: this.token } })
            .then(response => {
                console.log(response)
                this.setState({
                    lactantes: response.data.info
                });
                console.log("Registro Lactantes")
                console.log(this.state.control);
            })
            .catch(error => {
                console.log(error);
            });
        axios
            .get("https://vache-server.herokuapp.com/usuarios/idnombre",{ headers: { token: this.token } })
            .then(response => {
                console.log(response)
                this.setState({
                    encargados: response.data.info
                });
                console.log("Registro Encargado")
                console.log(this.state.control);
            })
            .catch(error => {
                console.log(error);
            });
    }


    toggleModal = state => {
        this.setState({
            [state]: !this.state[state]
        });
    };

    onSubmit = async (e) => {


        e.preventDefault();

        await axios.post('https://vache-server.herokuapp.com/produccionLeche/', {           
            lecheria: this.state.id_lecheria,
            fecha: this.state.fecha,
            cantidad_dia: this.state.cantidad_dia,
            id_bovino: this.state.id_bovino,
        },{ headers: { token: this.token } }).then((response) => {
            console.log(response);
            if (response.status === 200 && response.data.ok === true) {
                setTimeout(() => {
                    this.setState({ notificationModal: true });
                }, 200)
            }
            else {
                setTimeout(() => {
                    this.setState({ errorModal: true });
                }, 200)
            }

        });

        /*
        const celular = await axios.get('https://vache-server.herokuapp.com/usuarios/celular/' + this.state.id_usuario)
            .catch(error => { console.log(error); });
        this.setState({
            celularUser: celular.data.info[0].celular
        });
        console.log("ACA COGIO EL CELULAR: " + this.state.celularUser);

        let mensaje = {
            to: this.state.celularUser,
            body: `Señor Usuario,se registro un control de celo con fecha de inicio:  ${moment(this.state.fecha_inicio).format('DD-MM-YYYY')} para la vaca con chapeta : ${this.state.id_hembra} y nombre: ${"(aca nombre de la vaca)"}
        estuvo en celo con el toro: ${"(aca nombre del toro)"}, la fecha de la vaca para su posible parto será el dia:  ${moment(this.state.listaControlCelo.fecha_posible_parto).format('DD-MM-YYYY')} `
        }
        const twilio = await axios.post('https://vache-server.herokuapp.com/sms', mensaje).catch(error => { console.log(error); });
        */


        this.setState({
            id_TProduccion: "",
            id_lecheria: "",
            id_bovino: "",
            nombre: "",
            fecha: "",
            cantidad_dia: "",
            encargado: "",
            listaProducciones: [],
            lactantes: [],
            encargados: [],
            lecherias: [],
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
            <>
                <TernerasDestetadasHeader />
                <br />
                <Container className="mt--7" fluid>
                    <Row>
                        <div className="col">
                            <Card className="shadow">
                                <br></br>
                                <Form onSubmit={this.onSubmit} className="text-center">
                                    <Row>

                                        <Col md="5">
                                            <FormGroup>
                                                <span> Lecheria </span>
                                                <Input
                                                    className="form-control-alternative"
                                                    id="exampleFormControlInput1"
                                                    type="select"
                                                    name="id_lecheria"
                                                    onChange={this.onInputChange}
                                                    required
                                                >
                                                    <option value={"Seleccione la lecheria"} onChange={this.onInputChange}>Seleccione la lecheria</option>
                                                    {this.state.lecherias.map(lecherias => (
                                                        <option key={lecherias.id_lecheria} value={lecherias.id_lecheria} onChange={this.onInputChange}>{lecherias.id_lecheria}</option>
                                                    )

                                                    )}

                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col md="5">
                                            <span> Nombre Lactante</span>
                                            <FormGroup>
                                                <Input
                                                    className="form-control-alternative"
                                                    id="exampleFormControlInput1"
                                                    type="select"
                                                    name="id_bovino"
                                                    onChange={this.onInputChange}
                                                    required
                                                >
                                                    <option value={"Seleccione la vaca lactante"} onChange={this.onInputChange}>Seleccione la vaca lactante</option>
                                                    {this.state.lactantes.map(lactantes => (
                                                        <option key={lactantes.chapeta} value={lactantes.chapeta} onChange={this.onInputChange}>{lactantes.nombre}</option>
                                                    )

                                                    )}
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="5">
                                            <FormGroup>
                                                <span> Fecha Registro Producción</span>
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-calendar-grid-58" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <ReactDatetime
                                                        inputProps={{
                                                            placeholder: "Fecha Registro Producción"
                                                        }}
                                                        dateFormat={'DD-MM-YYYY'}
                                                        timeFormat={false}
                                                        value={new Date(this.state.fecha)}
                                                        onChange={e => this.setState({ fecha: e })}
                                                        name="fecha_inicio"
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                        </Col>
                                        <Col md="5">
                                            <span> Cantidad Dia </span>
                                            <FormGroup>
                                                <Input
                                                    className="form-control-alternative"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Detalles"
                                                    type="number"
                                                    value={this.state.detalles}
                                                    name="cantidad_dia"
                                                    onChange={this.onInputChange}
                                                    required
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="5">
                                            <span>Encargado</span>
                                            <FormGroup>
                                                <FormGroup>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="exampleFormControlInput1"
                                                        type="select"
                                                        name="id_usuario"
                                                        onChange={this.onInputChange}
                                                        required
                                                    >
                                                        <option value={"Seleccione el encargado de la lecheria"} onChange={this.onInputChange}>Seleccione el encargado de la lecheria</option>
                                                        {this.state.encargados.map(encargado => (
                                                            <option key={encargado.id_usuario} value={encargado.id_usuario} onChange={this.onInputChange}>{encargado.nombre}</option>
                                                        )

                                                        )}
                                                    </Input>
                                                </FormGroup>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <div>
                                        {
                                            this.state.notificationModal &&
                                            <Modal
                                                className="modal-dialog-centered modal-success"
                                                contentClassName="bg-gradient-success"
                                                isOpen={this.state.notificationModal}
                                                toggle={() => this.toggleModal("notificationModal")}
                                            >
                                                <div className="modal-header">
                                                    <h4 className="modal-title" id="modal-title-notification">
                                                        Producción de Leche Registrada
                                                        </h4>
                                                    <button
                                                        aria-label="Close"
                                                        className="close"
                                                        data-dismiss="modal"
                                                        type="button"
                                                        onClick={() => this.toggleModal("notificationModal")}
                                                    >
                                                        <span aria-hidden={true}>X</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="py-3 text-center">
                                                        <i className="ni ni-bell-55 ni-3x" />
                                                        <h4 className="heading mt-4">¡ Genial !</h4>
                                                        <p>
                                                            Tu producción de leche para esta lecheria ha sido registrado
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="modal-footer center">
                                                    <Button className="btn-white" text="center" color="default" type="button" href="/admin/lecherias">
                                                        Entendido
                                                    </Button>
                                                </div>
                                            </Modal>
                                        }
                                    </div>
                                    <div>
                                        {
                                            this.state.errorModal &&
                                            <Modal
                                                className="modal-dialog-centered modal-warning"
                                                contentClassName="bg-gradient-warning"
                                                isOpen={this.state.errorModal}
                                                toggle={() => this.toggleModal("errorModal")}
                                            >
                                                <div className="modal-header">
                                                    <h4 className="modal-title" id="modal-title-notification">
                                                        Producción de leche no registrada
                                                        </h4>
                                                    <button
                                                        aria-label="Close"
                                                        className="close"
                                                        data-dismiss="modal"
                                                        type="button"
                                                        onClick={() => this.toggleModal("errorModal")}
                                                    >
                                                        <span aria-hidden={true}>X</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="py-3 text-center">
                                                        <i className="ni ni-bell-55 ni-3x" />
                                                        <h4 className="heading mt-4">¡Opss!</h4>
                                                        <p>
                                                            Por favor revisa los campos y selecciona correctamente las opciones
                                                        </p>
                                                    </div>
                                                </div>
                                            </Modal>
                                        }
                                    </div>
                                    <div className="text-center">
                                        <Button
                                            type="submit"
                                            className="btn-success btn-icon mr-4"
                                            color="success"

                                        >
                                            <i className="ni ni-fat-add" />
                                            <span className="btn-inner--text">Insertar</span>
                                        </Button>
                                    </div>
                                </Form>
                            </Card>
                        </div>
                    </Row>
                </Container>
            </>
        );
    }
}

export default insertarProduccionLechera;