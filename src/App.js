import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import CategorySelect from './components/CategorySelect';
import Players from './components/Players';
import Questions from './components/Questions';
import PlayerSelect from './components/PlayerSelect';

class App extends Component {
	constructor() {
		super();
		this.state = {
			//Players
			showPlayerSelect: true,
			players: undefined,

			//Catagories
			showCategorySelect: false,
			categories: undefined,
		};
	}

	setPlayers = (players) => {
		this.setState({
			showPlayerSelect: false,
			players: players,
			showCategorySelect: true,
		});
	};

	setCategories = (categories) => {
		this.setState({ showCategorySelect: false, categories: categories });
	};

	render() {
		return (
			<Container>
				<Header />
				<Players />
				<Questions />
				<PlayerSelect
					showPlayerSelect={this.state.showPlayerSelect}
					setPlayers={this.setPlayers}
				/>
				<CategorySelect
					showCategorySelect={this.state.showCategorySelect}
					setCategories={this.setCategories}
				/>
			</Container>
		);
	}
}
export default App;
