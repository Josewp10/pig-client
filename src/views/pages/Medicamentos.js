
import React from "react";


import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap";


import Medicine from "../../components/Headers/Medicine.js";


const Medicamentos = () => {
  return (
    <>
      <Medicine />
      {/* Page content */}
      <Container className="mt--7" fluid>
      <Row>
          <div className="col">
            <Card className="shadow">
            <CardHeader className="bg-transparent pb-5">
            <div className="text-right">
              <Button
                className="btn-warning btn-icon mr-4"
              >
                 <i className="ni ni-fat-add" />
                <span className="btn-inner--text">Añadir</span>
              </Button>           
            </div>
          </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Código</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Horas Retiro Leche</th>
                    <th scope="col">Fecha Compra</th>
                    <th scope="col">Fecha Vencimiento</th>
                    <th scope="col">Disponibilidad</th>
                    <th scope="col">Acciones</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                    <Media>
                          <span className="mb-0 text-sm">
                            text
                          </span>
                        </Media>
                    </th>
                    <td><Media>
                          <span className="mb-0 text-sm">
                            text
                          </span>
                        </Media></td>
                    <td>
                    <Media>
                          <span className="mb-0 text-sm">
                            text
                          </span>
                        </Media>
                    </td>
                    <td>
                    <Media>
                          <span className="mb-0 text-sm">
                            text
                          </span>
                        </Media>
                    </td>
                    <td>
                    <Media>
                          <span className="mb-0 text-sm">
                            text
                          </span>
                        </Media>
                    </td>
                    <td><Media>
                          <span className="mb-0 text-sm">
                            text
                          </span>
                        </Media></td>
                        <td><Media>
                          <span className="mb-0 text-sm">
                            text
                          </span>
                        </Media></td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                      
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                             <i className="ni ni-ui-04" />
                            Actualizar
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                              <i className="ni ni-fat-remove" />
                           Eliminar
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Medicamentos;
