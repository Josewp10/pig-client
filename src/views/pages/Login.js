import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import { Router } from "react-history-router";
import { useHistory } from "react-router-dom";
    

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
    Col,
} from "reactstrap";


const Login = () => {

    const [usuario, guardarUsuario] = useState({
        correo: "",
        contrasena: "",
    });
    //Extraccion de datos
    const { correo, contrasena } = usuario;

    const onChange = (e) => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = e => {
        e.preventDefault();
    }
    const history = useHistory();
    const manejadorLogin = async () => {
      console.log("correcto");
      const res = await axios.post('http://vache-server.herokuapp.com/login', usuario)
          console.log(res);
          if (res.data.ok) {
            localStorage.setItem("token", res.data.info);           
            history.push('/admin/Bovinos');
          }
       
    }

    return (
        <>
            <Col lg="6" md="9">
                <Card className="bg-white shadow border-0">
                    <CardBody className="px-lg-5 py-lg-5">
                        <Form onSubmit={onSubmit} className="text-center">
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
                                        name="correo"
                                        onChange={onChange}
                                        required
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
                                        name="contrasena"
                                        onChange={onChange}
                                        required
                                    />
                                </InputGroup>
                                <small>¿ Olvidaste tu contraseña ?</small>
                            </FormGroup>
                            <div className="text-center">
                                <Link >
                                    <Button className="my-4" color="success" type="button" onClick={manejadorLogin} >
                                        Iniciar Sesión
                    </Button>
                                </Link>
                            </div>
                            <Col className="text-center" xs="12">
                                <Link to={'/auth/register'}>
                                    <a
                                        className="text-default"
                                    >
                                        <small>¿No tienes una cuenta ? Regístrate</small>
                                    </a>
                                </Link>
                            </Col>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </>
    );
}

export default Login;
