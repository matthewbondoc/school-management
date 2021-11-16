
import { Component } from "react";
import { Button, Card, CardBody, CardFooter, CardText, CardTitle, Col, Container, Navbar, NavbarBrand, Row } from "reactstrap";
import {
    IoSchoolOutline,
    IoMan,
    IoSettings,
    IoWomanOutline,
} from "react-icons/io5";
import axios from "axios";

interface MyState {
students: []
}

export class Dashboard extends Component<{}, MyState> {

    state : MyState = {
        students: [],
    };

            componentDidMount (){
                axios.get('http://localhost:9090/list')
                .then(res => {
                    const students = res.data

                    this.setState({students})
                })
            }

    render(){
        return(
            <div>
                <Navbar color="dark" light mb-2>
                    <NavbarBrand className="text-white">
                        <IoSchoolOutline className="font-size-xxl"/>
                        <span className="font-size-l ml-3"> Excellence University</span>
                    </NavbarBrand>
                </Navbar>

                <Container className="mt-3">
                    <Row>
                        <Col sm="4">
                        <Card body>
                            <CardTitle tag="h5">
                                <IoMan className="font-size-xl"/> 86 Students
                            </CardTitle>
                            <CardText>
                                With supporting text below as a natural lead-in to additional content.
                            </CardText>
                            <Button>Manage Students</Button>
                            </Card>
                        </Col>

                        <Col sm="4">
                        <Card body>
                            <CardTitle tag="h5">
                                <IoSchoolOutline className="font-size-xl"/> 20 Teachers
                            </CardTitle>
                            <CardText>
                                With supporting text below as a natural lead-in to additional content.
                            </CardText>
                            <Button>Manage Teachers</Button>
                            </Card>
                        </Col>

                        <Col sm="4">
                        <Card body>
                            <CardTitle tag="h5">
                                <IoSettings className="font-size-xl"/> 13 Faculty
                            </CardTitle>
                            <CardText>
                                With supporting text below as a natural lead-in to additional content.
                            </CardText>
                            <Button>Manage Faculty</Button>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-4">
                    <Row>
                        <Col sm="12">
                            <Button block color="success">
                                <span className="font-size-l">Add New Student</span>
                            </Button>
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-4">
                    {this.state.students.map(student => renderStudent(student))}
                </Container>

            </div>
        );

    }
}

function renderStudent(st): any {
        return(
            <Row>
                <Col sm="12">
                    <Card body>
                        <CardTitle tag="h5">
                            <IoMan className="font-size-xl"/> {st.firstName + " " + st.lastName}
                        </CardTitle>
                        <CardBody>
                            <Row>
                                <Col sm="4" className="text-center">
                                    <span className="font-weight-bold">Class </span>
                                    <span> Second Year</span>
                                </Col>
                                <Col sm="4" className="text-center">
                                    <span className="font-weight-bold">idNumber </span>
                                    <span>{st.idNumber}</span>
                                </Col>
                                <Col sm="4" className="text-center">
                                    <span className="font-weight-bold">Email </span>
                                    <span>{st.email}</span>
                                </Col>
                                <Col sm="4" className="text-center">
                                    <span className="font-weight-bold">Age </span>
                                    <span>{st.age}</span>
                                </Col>
                            </Row>
                        </CardBody>
                        <CardFooter>
                            <Row>
                                <Col sm-6>
                                    <Button block outline color="primary">
                                        Edit
                                    </Button>
                                </Col>
                                <Col sm-6>
                                    <Button block outline color="danger" onClick={() => deleteStudent(st.id)}>
                                        Delete
                                    </Button>
                                </Col>
                            </Row>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        )
}

function deleteStudent(id: any): void {
    axios.post(`http://localhost:9090/delete/${id}`)
}