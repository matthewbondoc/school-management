import { Component } from "react";
import { render } from "react-dom";
import { FaSchool } from "react-icons/fa";
import { Navbar, NavbarBrand } from "reactstrap";

interface MyHome {
    isOpen : boolean;
    students: [];
    }

export class Home extends Component<{}, MyHome> {
    state : MyHome = {
        isOpen : false,
        students: []
    };

    toggle = () => {
        this.setState((prevState) => ({ isOpen: !prevState.isOpen}));
    }

    render () {
        return (
            <div>
            <Navbar color="dark">
                <NavbarBrand className="text-white" class="h-50">
                    <FaSchool className="font-size-xxl"/>
                    <span className="font-size-l ml-2"> Excellence University</span>
                </NavbarBrand>
            </Navbar>
        </div>
        );
    }
}
