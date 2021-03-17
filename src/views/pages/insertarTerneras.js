import React from "react";
import { Link } from "react-router-dom";
import {
    FormGroup,
    Form,
    Input,
    Row,
    Card,
    Button,
    Container,
    Col
} from "reactstrap";
import TernerasDestetadasHeader from "../../components/Headers/insertarBovino.js";


class insertarTerneras extends React.Component {
    render() {
        return (
            <>
                <TernerasDestetadasHeader />
                <br />
                <Container className="mt--7" fluid>
                    <Row>
                        <div className="col">
                            <Card className="shadow">
                                <Form>
                                    <Row>
                                        <Col md="5">
                                            <FormGroup>
                                                <span> Chapeta </span>
                                                <Input
                                                    className="form-control-alternative"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Número Chapeta"
                                                    type="number"
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
                                                >
                                                <option>Ternera de Levante</option>
                                                <option>Ternera Destetada</option>
                                                <option>Novillona</option>
                                                <option>Vaca Lactante</option>
                                                <option>Vaca Orra</option>
                                                <option>Ternero</option>
                                                <option>Toro</option>
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
                                                >
                                                <option>Holstein</option>
                                                <option>Jersey</option>
                                                <option>Pardosuiza</option>
                                                <option>Jerholl</option>
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
                                                >
                                                <option>La Primavera</option>
                                                <option>La Palma</option>
                                                <option>El Caunce</option>
                                                <option>La China</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <div className="text-center">
                                        <Button
                                            className="btn-neutral btn-icon mr-4"
                                            color="default"
                                            to="/admin/Bovinos" tag={Link}
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