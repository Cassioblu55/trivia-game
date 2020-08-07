import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Header extends Component {
	render() {
		return (
			<Container>
				<Row>
					<Col className='text-center'>
						<h1>Cassio Trivia</h1>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Header;
