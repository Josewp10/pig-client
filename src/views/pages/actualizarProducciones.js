import React from "react";
import axios from 'axios';
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
import TernerasDestetadasHeader from "../../components/Headers/controlCelo.js";


class actualizarProducciones extends React.Component {
    constructor() {
        super();
        this.state = {
            id_TProduccion: "",
            id_lecheria: "",
            id_bovino: "",
            nombre: "",
            fecha: "",
            cantidad_dia: "",
            encargado: "",
            listaProducciones: [],
            lactantes: [],
            encargado: [],
            lecherias: [],
            notificationModal: false,
            errorModal: false,
        };
        this.onInputChange = this.onInputChange.bind(this);
    }


    async componentDidMount() {

        this.state.id_TProduccion = localStorage.getItem("id_Tproducccion");
        const res = await axios.get('http://vache-server.herokuapp.com/produccionLeche/' + this.state.id_Tproduccion);
        this.setState({
            id_bovino: res.data.info[0].id_bovino,
            id_lecheria: res.data.info[0].id_lecheria,
            fecha: res.data.info[0].fecha,
            cantidad_dia: res.data.info[0].cantidad_dia,
        });

        axios
            .get("http://vache-server.herokuapp.com/lecherias")
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
            .get("http://vache-server.herokuapp.com/bovinos/tipo/8")
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
            .get("http://vache-server.herokuapp.com/usuarios/NombreId")
            .then(response => {
                console.log(response)
                this.setState({
                    encargado: response.data.info
                });
                console.log("Registro Encargado")
                console.log(this.state.control);
            })
            .catch(error => {
                console.log(error);
            });
    }

    onSubmit = async (e) => {


        e.preventDefault();


        const res = await axios.put('http://vache-server.herokuapp.com/produccionLeche/' + this.state.id_Tproduccion, {
            id_bovino: this.state.id_bovino,
            id_lecheria: this.state.id_macho,
            fecha: this.state.id_hembra,
            cantidad_dia: this.state.cantidad_dia,
        }).then((response) => {
            console.log(this.state.id_macho);
            console.log("actualizacion" + response)
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
        }); console.log(res);


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
            encargado: [],
            lecherias: [],
        });



    };

    toggleModal = state => {
        this.setState({
            [state]: !this.state[state]
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
                                <Form onSubmit={this.onSubmit}>
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
                                                className="modal-dialog-centered modal-danger"
                                                contentClassName="bg-gradient-danger"
                                                isOpen={this.state.notificationModal}
                                                toggle={() => this.toggleModal("notificationModal")}
                                            >
                                                <div className="modal-header">
                                                    <h4 className="modal-title" id="modal-title-notification">
                                                        Producción de Leche Actualizada
                                                        </h4>
                                                    <button
                                                        aria-label="Close"
                                                        className="close"
                                                        data-dismiss="modal"
                                                        type="button"
                                                    >
                                                        <span aria-hidden={true}>X</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="py-3 text-center">
                                                        <i className="ni ni-bell-55 ni-3x" />
                                                        <h4 className="heading mt-4">¡ Genial !</h4>
                                                        <p>
                                                            Tu producción de leche para esta lecheria ha sido ha sido actualizada
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="modal-footer center">
                                                    <Button className="btn-white" text="center" color="default" type="button" href="/admin/controlCelo/">
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
                                                        Producción de leche no actualizada
                                                        </h4>
                                                    <button
                                                        aria-label="Close"
                                                        className="close"
                                                        data-dismiss="modal"
                                                        type="button"
                                                    >
                                                        <span aria-hidden={true}>X</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="py-3 text-center">
                                                        <i className="ni ni-bell-55 ni-3x" />
                                                        <h4 className="heading mt-4">¡Ops!</h4>
                                                        <p>
                                                            Por Favor Revisa los campos y selecciona correctamente las opciones
                                                        </p>
                                                    </div>
                                                </div>

                                            </Modal>
                                        }
                                    </div>
                                    <div className="text-center">
                                        <Button
                                            type="submit"
                                            className="btn-neutral btn-icon mr-4"
                                            color="default"

                                        >
                                            <i className="ni ni-fat-add" />
                                            <span className="btn-inner--text">Guardar</span>
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

export default actualizarProducciones;