import React, { Component } from 'react';
import { connect } from 'react-redux';

class Preview extends Component {
	renderData = () => {
		return {
			__html: `${this.props.data}`,
			__css: ''
		};
	};

	render() {
		return (
			<div className="previewer" dangerouslySetInnerHTML={this.renderData()} />
		);
	}
}

function mapStateToProps(state) {
	return {
		data: state.preview.data ? state.preview.data : ''
	};
}

export default connect(mapStateToProps, null)(Preview);
