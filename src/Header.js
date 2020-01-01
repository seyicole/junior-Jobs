import React, {Component} from 'react';
import './Header.css';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Subscribe from './Subscribe.js';



class Header extends Component {
	render() {
		return (
			
			<Navbar fixed="top"  expand="lg">
				 <Container>
			    <Navbar.Brand href="#home" className='display-3'><span className="font-weight-bold">Hacker</span>Jobs</Navbar.Brand>
				  <Navbar.Toggle aria-controls="basic-navbar-nav" />
				  <Navbar.Collapse id="basic-navbar-nav">
				 
				    <Nav className="mr-auto">
				      <Nav.Link href="#home" className='display-3'></Nav.Link>
				     
				    </Nav>
				    <Subscribe />
				</Navbar.Collapse>
				 </Container>
			</Navbar>
			
		);
	}
}

export default Header;