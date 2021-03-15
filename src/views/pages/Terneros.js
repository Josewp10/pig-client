
import React from "react";


import {
  Badge,
  Card,
  Button,
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


import TernerosHeader from "../../components/Headers/Terneros.js";


const Terneros = () => {
  return (
    <>
      <TernerosHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
      <Row>
          <div className="col">
            <Card className="shadow">
            <CardHeader className="bg-transparent pb-5">
            <div className="text-right">
              <Button
                className="btn-neutral btn-icon mr-4"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                 <i className="ni ni-fat-add" />
                <span className="btn-inner--text">Añadir</span>
              </Button>           
            </div>
          </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Chapeta</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Bovino</th>
                    <th scope="col">Raza</th>
                    <th scope="col">Genetica</th>
                    <th scope="col">Finca</th>
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
                            Actualizar
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                           Eliminar
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
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
                            Actualizar
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                           Eliminar
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
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
                            Actualizar
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
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

export default Terneros;
