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
    InputGroupAddon,
    InputGroupText,
    InputGroup
} from "reactstrap";

import TernerasDestetadasHeader from "../../components/Headers/controlPartos.js";

class insertarControlParto extends React.Component {

    constructor() {
        super();
        this.state = {
            id_bovino:"",
            fecha_parto:"",
            sexo_cria:"",
            pesaje:"",
            id_madre: "",
            id_padre:"",
            observaciones:"",
            id_usuario:"",
        }
        this.onInputChange = this.onInputChange.bind(this);
    }

    componentDidMount() {

    }

    onSubmit = async (e) => {


        e.preventDefault();


        await axios.post('http://vache-server.herokuapp.com/controlCelo', {
            id_celo:this.state.id_celo,
            id_macho:this.state.id_macho,
            id_hembra:this.state.id_hembra,
            fecha_inicio:this.state.fecha_inicio,
            detalles: this.state.detalles,
            id_usuario:this.state.id_usuario,
        }).then((response) => {
            console.log(response);
           
        });


        this.setState({
            id_bovino:"",
            fecha_parto:"",
            sexo_cria:"",
            pesaje:"",
            id_madre: "",
            id_padre:"",
            observaciones:"",
            id_usuario:"",
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
                                                <span> Código </span>
                                                <Input
                                                    className="form-control-alternative"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Código"
                                                    type="number"
                                                    value={this.state.codigo}
                                                    name="codigo"
                                                    onChange={this.onInputChange}
                                                    required
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md="5">
                                            <FormGroup>
                                                <span> Fecha Parto </span>
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-calendar-grid-58" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <ReactDatetime
                                                        inputProps={{
                                                            placeholder: "Fecha Parto"
                                                        }}
                                                        dateFormat={'DD-MM-YYYY'}
                                                        timeFormat={false}
                                                        value={new Date(this.state.fecha_parto)}
                                                        onChange={e => this.setState({ fecha_parto: e })}
                                                        name="fecha_parto"
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="5">
                                                <span> Sexo Cria</span>
                                                <FormGroup>
                                                <Input
                                                    className="form-control-alternative"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Sexo de la Cria"
                                                    type="text"
                                                    value={this.state.sexo_cria}
                                                    name="sexo_cria"
                                                    onChange={this.onInputChange}
                                                    required
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md="5">
                                            <FormGroup>
                                                <span> Pesaje</span>
                                                <Input
                                                    className="form-control-alternative"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Peso de la Cria"
                                                    type="number"
                                                    value={this.state.pesaje}
                                                    name="codigo"
                                                    onChange={this.onInputChange}
                                                    required
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="5">
                                            <span> Madre</span>
                                            <FormGroup>
                                            <Input
                                                    className="form-control-alternative"
                                                    id="exampleFormControlInput1"
                                                    type="select"
                                                    name="id_madre"
                                                    onChange={this.onInputChange}
                                                    required
                                                >
                                                     
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col md="5">
                                            <span> Padre</span>
                                            <FormGroup>
                                                <Input
                                                    className="form-control-alternative"
                                                    id="exampleFormControlInput1"
                                                    type="select"
                                                    name="id_padre"
                                                    onChange={this.onInputChange}
                                                    required
                                                >
                                                     
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                    <Col md="5">
                                            <span> Observaciones</span>
                                            <FormGroup>
                                            <Input
                                                    className="form-control-alternative"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Observaciones del Parto"
                                                    type="text"
                                                    value={this.state.observaciones}
                                                    name="detalles"
                                                    onChange={this.onInputChange}
                                                    required
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md="5">
                                            <span> Usuario</span>
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
                                                     
                                                </Input>
                                            </FormGroup>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <div className="text-center">
                                        <Button
                                            type="submit"
                                            className="btn-warning btn-icon mr-4"
                                            color="warning"

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

export default insertarControlParto;