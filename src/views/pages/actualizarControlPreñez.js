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

import TernerasDestetadasHeader from "../../components/Headers/controlPrenez.js";
import { timers } from "jquery";

class actualizarControlesPrenez extends React.Component {

    constructor() {
        
        super();
        this.state = {
            token: "",
            id_control: "",
            fecha_palpacion: "",
            confirmacion_palpacion: false,
            num_parto: "",
            id_vaca: "",
            id_usuario: "",
            control: [],
            encargado: [],
            notificationModal: false,
            errorModal: false,
        };
        this.onInputChange = this.onInputChange.bind(this);
    }



    async componentDidMount() {

        this.token = localStorage.getItem("token");
        this.state.id_control = localStorage.getItem("id_control");
        const res = await axios
            .get("https://vache-server.herokuapp.com/controlPrenez/" + this.state.id_control,{ headers: { token: this.token } });
                this.setState({
                    fecha_palpacion: res.data.info[0].fecha_palpacion,
                    vaca: res.data.info[0].vaca,
                    confirmacion_palpacion: res.data.info[0].confirmacion_palpacion,
                    num_parto: res.data.info[0].num_parto,
                    id_usuario: res.data.info[0].id_usuario
                });
                

        
            axios
            .get("https://vache-server.herokuapp.com/usuarios/idnombre",{ headers: { token: this.token } })
            .then(response => {
                console.log(response)
                this.setState({
                    encargado: response.data.info
                });
                console.log("Registro Usuarios")
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


        await axios.put('https://vache-server.herokuapp.com/controlPrenez/' + this.state.id_control, {
            fecha_palpacion: this.state.fecha_palpacion,
            confirmacion_palpacion: this.state.confirmacion_palpacion,
            num_parto: this.state.num_parto,
            id_usuario: this.state.id_usuario,
            id_control: this.state.id_control
        },{ headers: { token: this.token } }).then((response) => {
            console.log(response + '--idcontrol' + this.state.id_control + '--palpacion' + this.state.confirmacion_palpacion);
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


        this.setState({
            id_control: "",
            fecha_palpacion: "",
            confirmacion_palpacion: false,
            num_parto: "",
            id_vaca: "",
            id_usuario: "",
            control: [],
            encargado: [],
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
                                                <span> Hembra en gestación </span>
                                                <Input
                                                    className="form-control-alternative"
                                                    id="exampleFormControlInput1"
                                                    type="select"
                                                    name="id_control"
                                                    onChange={this.onInputChange}
                                                    required
                                                >
                                                    <option value={this.state.id_control} onChange={this.onInputChange}>{this.state.vaca}</option>                  
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col md="5">
                                            <FormGroup>
                                                <span> Fecha palpación</span>
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-calendar-grid-58" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <ReactDatetime
                                                        inputProps={{
                                                            placeholder: "Fecha palpación"
                                                        }}
                                                        dateFormat={'DD-MM-YYYY'}
                                                        timeFormat={false}
                                                        value={new Date(this.state.fecha_palpacion)}
                                                        onChange={e => this.setState({ fecha_palpacion: e })}
                                                        name="fecha_palpacion"
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        
                                        <Col md="5">
                                            <span> Confirmación palpación </span>
                                            <FormGroup>
                                            <Input
                                                    className="form-control-alternative"
                                                    id="exampleFormControlInput2"
                                                    type="select"
                                                    name="confirmacion_palpacion"
                                                    onChange={this.onInputChange}
                                                    required
                                                >
                                                <option value={"Seleccione estado palpación"} onChange={this.onInputChange}>Seleccione estado palpación</option>
                                                <option value={true} onChange={this.onInputChange}>Confirmado</option>
                                                <option value={false} onChange={this.onInputChange}>No confirmado</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col md="5">
                                            <span> Número parto </span>
                                            <FormGroup>
                                                <Input
                                                    className="form-control-alternative"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Número parto"
                                                    type="number"
                                                    value={this.state.num_parto}
                                                    name="num_parto"
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
                                                        value={this.state.id_usuario}
                                                        required
                                                    >
                                                    <option value={"Seleccione el encargado del control"} onChange={this.onInputChange}>Seleccione el usuario que registra el control</option>
                                                    {this.state.encargado.map(encargado => (
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
                                                    className="modal-dialog-centered modal-info"
                                                    contentClassName="bg-gradient-info"
                                                    isOpen={this.state.notificationModal}
                                                   toggle={() => this.toggleModal("notificationModal")}
                                                >
                                                    <div className="modal-header">
                                                        <h4 className="modal-title" id="modal-title-notification">
                                                            Control de preñez Actualizado
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
                                                                Tu control de preñez ha sido actualizado
                                                        </p>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer center">
                                                        <Button className="btn-white" text="center" color="default" type="button" href="/admin/controlPreñez/">
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
                                                            Control de preñez No actualizado
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
                                            className="btn-info btn-icon mr-4"
                                            color="info"

                                        >
                                            <i className="ni ni-fat-add" />
                                            <span className="btn-inner--text">Actualizar</span>
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

export default actualizarControlesPrenez;