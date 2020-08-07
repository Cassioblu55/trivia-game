import axios from 'axios';

const TRIVIA = 'api.php';

function TriviaApi() {
	return axios.create({
		baseURL: `https://opentdb.com/`,
	});
}

export { TriviaApi, TRIVIA };
