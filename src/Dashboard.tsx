
import { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import {
    IoSchoolOutline,
    IoMan,
    IoSettings,
    IoWomanOutline,
} from "react-icons/io5";

interface MyState {

}

export class Dashboard extends Component<{}, MyState> {
    render(){
        return(
            <div>
                <Navbar color="dark" light mb-2>
                    <NavbarBrand className="text-white">
                        <IoSchoolOutline className="font-size-xxl"/>
                        <span className="font-size-l ml-3"> Excellence University</span>
                    </NavbarBrand>
                </Navbar>
            </div>
        );
    }
}