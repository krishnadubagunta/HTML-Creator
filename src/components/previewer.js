import React, { Component } from 'react';
import { connect } from 'react-redux';

export let { data } = '';

class Preview extends Component {
	renderData = () => {
		data = this.props.data;
		return { __html: this.props.data };
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
