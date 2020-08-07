import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, InputGroup } from 'react-bootstrap';

class PlayerSelect extends Component {
	constructor() {
		super();
		this.state = { showPlayerErrorMessage: false, players: ['Player1'] };
	}

	togglePlayerSelect = () => {
		if (this.getPlayers().length > 0) {
			this.handleSubmit();
		} else {
			this.setState({ showPlayerErrorMessage: true });
		}
	};

	addPlayer = (event) => {
		event.preventDefault();
		let players = this.state.players;
		players.push(undefined);
		this.setState({ players: players });
	};

	handleSubmit = () => {
		this.props.setPlayers(this.getPlayers());
	};

	handlePlayerNameChange = (event) => {
		let index = event.target.name.split('-')[1];
		let players = this.state.players;
		players[index] = event.target.value;
		this.setState({ players: players });
	};

	getPlayers() {
		return this.state.players.filter((player) => {
			return player !== undefined && player !== '';
		});
	}

	render() {
		let players = this.state.players;
		return (
			<Modal show={this.props.showPlayerSelect}>
				<Modal.Header closeButton onClick={this.togglePlayerSelect}>
					<Modal.Title>Add Player</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={this.handleSubmit}>
						<Form.Row>
							<Form.Group as={Col}>
								<Row>
									<Col>
										<Form.Label>Player</Form.Label>
									</Col>
									<Col>
										<Button className='float-right' onClick={this.addPlayer}>
											Add Player
										</Button>
									</Col>
								</Row>
								{players.map((player, index) => {
									return (
										<InputGroup key={index} style={{ margin: '5px' }}>
											<Form.Control
												type='text'
												placeholder='Player Name'
												name={`player-${index}`}
												value={player}
												onChange={this.handlePlayerNameChange}
											/>
										</InputGroup>
									);
								})}
								{this.state.showPlayerErrorMessage && (
									<Row style={{ marginTop: '10px', color: 'red' }}>
										<Col>Please add a player.</Col>
									</Row>
								)}
							</Form.Group>
						</Form.Row>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.togglePlayerSelect} variant='secondary'>
						Close
					</Button>
					<Button
						onClick={this.handleSubmit}
						disabled={this.getPlayers().length === 0}
						variant='primary'>
						Save Players
					</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}

export default PlayerSelect;
