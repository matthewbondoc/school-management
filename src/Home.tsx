interface MyHome {
    isOpen : boolean;
    students: [];
    }

export class Home extends Component<{}, MyHome> {
    state : MyHome = {
        isOpen : false,
        students: []
    };
}


toggle = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen}));
}

render (); {
    return (
        <div>
        <Navbar color="dark">
            <NavbarBrand className="text-white">
                <FaSchool className="font-size-xxl"/>
                <span className="font-size-l ml-2"> Excellence University</span>
            </NavbarBrand>
        </Navbar>
    </div>
    );
}
