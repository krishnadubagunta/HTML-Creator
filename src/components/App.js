import React, { Component } from 'react';
import Writer from './writer';
import Preview from './previewer';
import Header from './header';
import '../App.css';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<div className="flex-or-grid">
					<Writer />
					<Preview />
				</div>
			</div>
		);
	}
}

export default App;
