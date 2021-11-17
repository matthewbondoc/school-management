import React from "react"
import { Component } from "react";
import {
    Button,
    Col,
    Form,
    Modal,
    ModalBody,
    ModalHeader,
    Row,
}  from "reactstrap"; 
 


type MyProps = {
isOpen : boolean
toggle

}


export class CreationModal extends Component <MyProps> {


    handleSubmit = (event) => {

        event.preventDefault()
        const data = new FormData(event.target)

        const student = {
            firstName : data.get("firstName"),
            lastName : data.get("lastName"),
            class : data.get("class"),
            idNumber : data.get("idNumber"),
            email : data.get("email"),
            age : data.get("age"),


        }

        axios.post("http://localhost:9090/add", student) 
        this.props.toggle();
    }

    

render () {

return (<Modal isOpen = {this.props.isOpen} toggle = {this.props.toggle}>
    <ModalHeader toggle = {this.props.toggle}>
            Adding new wise Student 
    </ModalHeader>

    <ModalBody>

    <Form onSubmit = {this.handleSubmit}>
        
            <Row>
    <Col>
    <Label> FirstName </Label>
    </Col>


    <Col>
<input id = "firstName" name = "firstName" type = "text" />
    </Col> 
        </Row>





        <Row>
    <Col>
    <Label> LastName </Label>
    </Col>

    <Col>
    <input id = "lastName" name = "lastName" type = "text" />
    </Col> 
        </Row>




        <Row>
<Col>
<Label> Class </Label>
</Col>


<Col>
<input id = "class" name = "class" type = "text" />
</Col> 
        </Row>





        <Row>
<Col>
<Label> IdNumber </Label>
</Col>


<Col>
<input id = "idNumber" name = "idNumber" type = "number" />
</Col> 
        </Row>





        <Row>
<Col>
<Label> Email </Label>
</Col>


<Col>
<input id = "email" name = "email" type = "text" />
</Col> 
        </Row>





        <Row>
<Col>
<Label> Age </Label>
</Col>


<Col>
<input id = "age" name = "age" type = "number " />
</Col> 
        </Row>


<Button color = "primary" > Create New Student </Button>


    </Form>,

</ModalBody>




</Modal>);



}



}