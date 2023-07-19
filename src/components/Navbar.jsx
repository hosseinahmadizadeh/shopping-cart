import {Navbar as NavbarBs, Button} from "react-bootstrap"

function Navbar (){
    return (
        <NavbarBs className="border-bottom border-secondary">
            <NavbarBs.Collapse className="justify-content-end">
                <Button variant="btn btn-outline-secondary" className="text-white">Orders</Button>
            </NavbarBs.Collapse>
        </NavbarBs>
    )
}

export default Navbar