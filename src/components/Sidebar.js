import React from "react";
import styled from "styled-components";
import logo from "../assets/log.png";
import Input from "./Input";
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <Container>
      <center>
      <LogoWrapper>
        <img src={logo} alt=""/>
        <h3>
          PIG 
          
        </h3>
        <span>Plataforma de Gestión Ganadera</span>
      </LogoWrapper>
      </center>
      <Form>
        <h3>Ingresa</h3>
        <Input placeholder="Usuario" />
        <Input type="password" placeholder="Contraseña" />
        <Link  to="/home"><button>Ingresar</button></Link>
        
      </Form>
      <div>
        <Terms>
         Al registrarme acepto la politica de calidad <br /> y los términos
         del servicio
        </Terms>
        <h4>
        ¿ No tienes una cuenta ? <span>Regístrate</span>
        </h4>
      </div>
    </Container>
  );
};

const Terms = styled.p`
  padding: 0 1rem;
  text-align: center;
  font-size: 12px;
  color: #808080;
  font-weight: 300;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: #666666;
    margin-bottom: 2rem;
  }

  button {
    width: 75%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #008f39;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const LogoWrapper = styled.div`
  img {
    height: 12rem;
  }

  h3 {
    color: #008f39;
    text-align: center;
    font-size: 22px;
  }

  span {
    color: #008f39;
    font-weight: 300;
    font-size: 18px;
  }
`;

const Container = styled.div`
  min-width: 400px;
  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255, 0.8);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }

  h4 {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
    margin-top: 2rem;

    span {
      color: #008f39;
      cursor: pointer;
    }
  }
`;

export default Sidebar;
