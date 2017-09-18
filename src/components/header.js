import React, { Component } from 'react';
import { connect } from 'react-redux';
import FileSaver from 'file-saver';

let blob = new Blob();

class Header extends Component {
	handleDownload = () => {
		FileSaver.saveAs(blob, 'preview.html');
	};

	render() {
		blob = new Blob([this.props.data], { type: 'text/html' });
		return (
			<nav className="navbar">
				<h1>
					HTML Creator
					<br />
					<small>Write html code and see the preview right there</small>
				</h1>
				<button onClick={this.handleDownload}>Download File </button>
			</nav>
		);
	}
}

function mapStateToProps(state) {
	return {
		data: state.preview.data ? state.preview.data : ''
	};
}

export default connect(mapStateToProps, null)(Header);
