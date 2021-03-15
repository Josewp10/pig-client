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
import TernerasDestetadasHeader from "../../components/Headers/TernerasDestetadas.js";


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
                                <br />

                                <Form>
                                    <Row>
                                        <Col md="5">
                                            <FormGroup>
                                                <span> Nombre </span>
                                                <Input
                                                    className="form-control-alternative"
                                                    id="exampleFormControlInput1"
                                                    placeholder="text"
                                                    type="email"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md="5">
                                            <FormGroup>
                                                <span> Nombre </span>
                                                <Input
                                                    className="form-control-alternative"
                                                    id="exampleFormControlInput1"
                                                    placeholder="text"
                                                    type="email"
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="5">
                                            <span> Nombre </span>
                                            <FormGroup>
                                                <Input
                                                    className="form-control-alternative"
                                                    id="exampleFormControlInput1"
                                                    placeholder="text"
                                                    type="email"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md="5">
                                            <span> Nombre </span>
                                            <FormGroup>
                                                <Input
                                                    className="form-control-alternative"
                                                    id="exampleFormControlInput1"
                                                    placeholder="text"
                                                    type="email"
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="5">
                                            <span> Nombre </span>
                                            <FormGroup>
                                                <Input
                                                    className="form-control-alternative"
                                                    id="exampleFormControlInput1"
                                                    placeholder="text"
                                                    type="email"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md="5">
                                            <span> Nombre </span>
                                            <FormGroup>
                                                <Input
                                                    className="form-control-alternative"
                                                    id="exampleFormControlInput1"
                                                    placeholder="text"
                                                    type="email"
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <div className="text-center">
                                        <Button
                                            className="btn-neutral btn-icon mr-4"
                                            color="default"
                                            to="/terneras" tag={Link}
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