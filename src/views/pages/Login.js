import React from "react";
import { Link } from 'react-router-dom'
import logo from "../../assets/img/brand/vache.png";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

const Login = () => {
  return (
    <>
      <Col lg="6" md="9">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Correo Electronico"
                    type="email"
                    autoComplete="new-email"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Contraseña"
                    type="password"
                    autoComplete="new-password"
                  />
                </InputGroup>
                <b><small>¿ Olvidaste tu contraseña ?</small></b>
              </FormGroup>
              <div className="text-center">
              <Link to={'/admin/Bovinos'}>
                <Button className="my-4" color="success" type="button"> 
                  Iniciar Sesión
                </Button>
                </Link>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-default"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <a
              className="text-default"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Regístrate</small>
            </a>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Login;
