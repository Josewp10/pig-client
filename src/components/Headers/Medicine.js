import React from "react";


import { Container, Row, Col } from "reactstrap";

const Medicine = () => {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "300px",
          backgroundImage:
            "url(" +
            require("../../assets/img/theme/medicamentos_ganaderias.jpg").default +
            ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
         {/* Mask */}
         <span className="mask bg-gradient-warning opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="7" md="10">
              <h1 className="display-2 text-white">Medicamentos</h1>
              <p className="text-white mt-0 mb-5">
                Gestión de medicamentos
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Medicine;
