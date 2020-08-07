import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import { categoryChoices } from './CategoryChoices';

class CategorySelect extends Component {
	constructor() {
		super();
		this.state = {
			showCategoryErrorMessage: false,
			categories: undefined,
			categoryChoices: categoryChoices,
		};
	}

	componentDidMount = () => {
		this.getRandomCatagories();
	};

	getRandomCatagories() {
		let categories = [];
		for (let i = 0; i < 3; i++) {
			let index = Math.floor(Math.random() * this.state.categoryChoices.length);
			categories.push(this.state.categoryChoices[index].key);
		}
		categories.push(undefined);
		let categoryChoices = this.state.categoryChoices;
		categoryChoices.unshift({
			key: undefined,
			text: 'Any Category',
		});
		this.setState({ categories: categories, categoryChoices: categoryChoices });
	}

	getValidCategories = () => {
		return this.state !== undefined && this.state.categories !== undefined
			? this.state.categories.filter((value, index, self) => {
					return self.indexOf(value) === index;
			  })
			: [];
	};

	toggleCategorySelect = () => {
		if (this.getValidCategories().length === 4) {
			this.handleSubmit();
		} else {
			this.setState({ showCategoryErrorMessage: true });
		}
	};

	handleSubmit = () => {
		this.props.setCategories(this.getValidCategories());
	};

	handleCategoryNameChange = (event) => {
		let index = event.target.name.split('-')[1];
		let categories = this.state.categories;
		categories[index] =
			event.target.value !== "Any Category"
				? parseInt(event.target.value)
				: undefined;
		this.setState({ categories: categories });
	};

	render() {
		let categories = this.state.categories;
		return (
			<Modal size='lg' show={this.props.showCategorySelect}>
				<Modal.Header closeButton onClick={this.toggleCategorySelect}>
					<Modal.Title>Choose Categories</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={this.handleSubmit}>
						<Form.Row>
							<Form.Group as={Col}>
								<Row>
									<Col>
										<Form.Label>Categories</Form.Label>
									</Col>
								</Row>
								<Row>
									{this.state.categories &&
										categories.map((category, index) => {
											return (
												<Col
													style={{ marginBottom: '5px' }}
													sm={12}
													lg={3}
													key={index}>
													<Form.Control
														as='select'
														name={`category-${index}`}
														onChange={this.handleCategoryNameChange}
														defaultValue={category}>
														{this.state.categoryChoices.map((element, i) => {
															return (
																<option key={i} value={element.key}>
																	{element.text}
																</option>
															);
														})}
													</Form.Control>
												</Col>
											);
										})}
								</Row>
								{this.state.showCategoryErrorMessage && (
									<Row style={{ marginTop: '10px', color: 'red' }}>
										<Col>Please choose four different categories.</Col>
									</Row>
								)}
							</Form.Group>
						</Form.Row>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.toggleCategorySelect} variant='secondary'>
						Close
					</Button>
					<Button
						onClick={this.handleSubmit}
						disabled={this.getValidCategories().length !== 4}
						variant='primary'>
						Save Categories
					</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}

export default CategorySelect;
