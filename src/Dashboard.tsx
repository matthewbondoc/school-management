
import { Component } from "react";

interface MyState {

}

export class Dashboard extends Component<{}, MyState> {
    render(){
        return(
            <div>
                <Navbar color="maroon" light mb-2>
                    <NavbarBrand className="text-white">
                        <ToSchoolOutline className="font-size-xxl"/>
                        <span className="font-size-l ml-3">Excellence University</span>
                    </NavbarBrand>
                </Navbar>
            </div>
        );
    }
}