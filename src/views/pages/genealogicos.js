import React from "react";
import axios from 'axios';

import {
  Card,
  CardBody,
  Container,
  Row,
  Col,
  Button
} from "reactstrap";
// core components
import UserHeader from "../../components/Headers/genealogico.js";

export default class genealogicos extends React.Component {

  state = {
    listaGenealogicos: [],
    Genealogicos: {
      id_tbovino: "",
      id_mama: "",
      id_papa: "",
      mama: [],
      id_abuelo: "",
      id_abuela: "",
      papa: [],
      abuelo: [],
      abuela: [],
    }
  }

  async componentDidMount() {
    this.state.id_tbovino = localStorage.getItem("id_Tbovinos")
    console.log(this.state.id_tbovino);
    const res = await axios.get('http://vache-server.herokuapp.com/genealogicos/' + this.state.id_tbovino);
    this.setState({
      id_tbovino: res.data.info[0].id_tbovino,
      id_mama: res.data.info[0].id_mama,
      id_papa: res.data.info[0].id_papa,
      id_abuela: res.data.info[0].id_abuela,
      id_abuelo: res.data.info[0].id_abuelo,
    });

  }



  render() {
    return (
      <>
        <UserHeader />
        {/* Page content */}
        <Container className="mt--8" fluid>
          <Row>
            <Col className="order-xl-6 mb-8 mb-xl-0 center" xl="8" >
              <Card className="card-profile shadow center">
                <CardBody className="pt-0 pt-md-4">
                 
                      <div className="text-center">
                        <h3>
                          Bovino
                          <span className="font-weight-light"></span>
                        </h3>
                        <div className="h5 font-weight-300">
                          <i className="ni location_pin mr-2" />
                          {this.state.id_tbovino}
                        </div>
                        <br></br>
                        <h3>
                          Mamá
                          <span className="font-weight-light"></span>
                        </h3>
                        <div className="h5 font-weight-300">
                          <i className="ni location_pin mr-2" />
                          {this.state.id_mama}
                        </div>
                        <br></br>
                        <h3>
                          Papá
                          <span className="font-weight-light"></span>
                        </h3>
                        <div className="h5 font-weight-300">
                          <i className="ni location_pin mr-2" />
                          {this.state.id_papa}
                        </div>
                        <br></br>
                        <h3>
                          Abuelo
                          <span className="font-weight-light"></span>
                        </h3>
                        <div className="h5 font-weight-300">
                          <i className="ni location_pin mr-2" />
                         
                          {this.state.id_abuelo}
                         
                          
                        </div>
                        <br></br>
                        <h3>
                          Abuela
                          <span className="font-weight-light"></span>
                        </h3>
                        <div className="h5 font-weight-300">
                          <i className="ni location_pin mr-2" />
                          {this.state.id_abuela}
                        </div>
                      </div>
                  
                  <br></br>
                  <div className="text-center">
                    <span> En caso de que el bovino no tenga información sobre su genealogía ¿Desea ingresarla?</span>
                    <br></br>
                    <Button
                      className="btn-neutral btn-icon mr-2"
                      color="info"
                      href="/admin/insertarGenealogia"
                    >
                      <i className="ni ni-fat-add" />

                      <span className="btn-inner--text">Agregar Genealogía</span>
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>

          </Row>
        </Container>
      </>
    );
  }

};


