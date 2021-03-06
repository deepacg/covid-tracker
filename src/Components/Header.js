import react, {Component} from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Header extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/covid-tracker">COVID-19 Status</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Link className='nav-link' to="/covid-tracker/india">India</Link>
                    <Link className='nav-link' to="/covid-tracker/world">World</Link>
                
                    </Nav>
                   
                </Navbar.Collapse>
                </Container>
                </Navbar>
            </>
        )
    }
}

export default Header
