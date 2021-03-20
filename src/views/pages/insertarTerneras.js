import React from "react";
import axios from 'axios';
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
    CardHeader,
    Alert
} from "reactstrap";
import TernerasDestetadasHeader from "../../components/Headers/insertarBovino.js";


class insertarTerneras extends React.Component {

    constructor() {
        super();
        this.state = {
            id_Tbovinos: "",
            chapeta: "",
            id_tipo: "",
            tipos: [],
            nombre: "",
            id_raza: "",
            razas: [],
            finca: "",
        };
        this.onInputChange = this.onInputChange.bind(this);
    }


    componentDidMount() {



        axios
            .get("http://vache-server.herokuapp.com/registroTipos/")
            .then(response => {
                console.log(response)
                this.setState({
                    tipos: response.data.info
                });
                console.log("Registro tipos")
                console.log(this.state.control);
            })
            .catch(error => {
                console.log(error);
            });

        axios
            .get("http://vache-server.herokuapp.com/registroRazas/")
            .then(response => {
                console.log(response)
                this.setState({
                    razas: response.data.info
                });
                console.log("Registro razas")
                console.log(this.state.control);
            })
            .catch(error => {
                console.log(error);
            });
    }

    onSubmit = async (e) => {


        e.preventDefault();


        await axios.post('http://vache-server.herokuapp.com/bovinos', {
            chapeta: this.state.chapeta,
            id_tipo: this.state.id_tipo,
            nombre: this.state.nombre,
            id_raza: this.state.id_raza,
            finca: this.state.finca,
        }).then((response) => {
            console.log(response);
            < Alert color="success" >
                <span className="alert-inner--icon">
                    <i className="ni ni-like-2" />
                </span>{" "}
                <span className="alert-inner--text">
                    <strong>Bovino</strong> Insertado Correctamente
        </span>
            </Alert >
            window.location.href = '/admin/Bovinos';
        });


        this.setState({
            id_Tbovinos: "",
            chapeta: "",
            id_tipo: "",
            tipos: [],
            nombre: "",
            id_raza: "",
            razas: [],
            finca: "",
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
                                <CardHeader className="bg-transparent pb-5">
                                    <div className="text-right">
                                        <Button
                                            className="btn-neutral btn-icon mr-2"
                                            color="info"
                                        >
                                            <i className="ni ni-fat-add" />
                                            <span className="btn-inner--text">Añadir Genealogía</span>
                                        </Button>
                                    </div>
                                </CardHeader>
                                <br></br>
                                <Form onSubmit={this.onSubmit} className="text-center">
                                    <Row>
                                        <Col md="5">
                                            <FormGroup>
                                                <span> Chapeta </span>
                                                <Input
                                                    className="form-control-alternative"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Número Chapeta"
                                                    type="number"
                                                    value={this.state.chapeta}
                                                    name="chapeta"
                                                    onChange={this.onInputChange}
                                                    required
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md="5">
                                            <FormGroup>
                                                <span> Nombre Bovino </span>
                                                <Input
                                                    className="form-control-alternative"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Nombre Bovino"
                                                    type="text"
                                                    value={this.state.nombre}
                                                    name="nombre"
                                                    onChange={this.onInputChange}
                                                    required
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="5">
                                            <span> Tipo de Bovino</span>
                                            <FormGroup>
                                                <Input
                                                    className="form-control-alternative"
                                                    id="exampleFormControlInput1"
                                                    type="select"
                                                    name="id_tipo"
                                                    onChange={this.onInputChange}
                                                    required
                                                >
                                                    {this.state.tipos.map(tipo => (
                                                        <option key={tipo.id_tipo} value={tipo.id_tipo} onChange={this.onInputChange}>{tipo.nombre}</option>
                                                    )

                                                    )}
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col md="5">
                                            <span> Raza </span>
                                            <FormGroup>
                                                <Input
                                                    className="form-control-alternative"
                                                    id="exampleFormControlInput1"
                                                    type="select"
                                                    name="id_raza"
                                                    onChange={this.onInputChange}
                                                    required
                                                >
                                                    {this.state.razas.map(raza => (
                                                        <option key={raza.id_raza} value={raza.id_raza} onChange={this.onInputChange}>{raza.nombre}</option>
                                                    )

                                                    )}
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="5">
                                            <span> Finca </span>
                                            <FormGroup>
                                                <Input
                                                    className="form-control-alternative"
                                                    id="exampleFormControlInput1"
                                                    type="select"
                                                    name="finca"
                                                    onChange={this.onInputChange}
                                                    required
                                                >
                                                    <option value={"La Esperanza"} onChange={this.onInputChange}>La Esperanza</option>
                                                    <option value={"La Palma"} onChange={this.onInputChange}>La Palma</option>
                                                    <option value={"La Chinita"} onChange={this.onInputChange}>La Chinita</option>
                                                    <option value={"Cambure"} onChange={this.onInputChange}>Cambure</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <div className="text-center">
                                        <Button
                                            type="submit"
                                            className="btn-neutral btn-icon mr-4"
                                            color="default"

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

export default insertarTerneras;