import React, { Component } from 'react';
import { connect } from 'react-redux';
import { build } from '../actions';
import { bindActionCreators } from 'redux';

class Writer extends Component {
	state = { data: '', builder: '' };

	build = text => {
		this.props.build(text);
	};

	handleSpecial = e => {
		this.setState({ data: e.target.value }, () => {
			this.build(this.state.data);
		});
	};

	render() {
		return (
			<textarea
				className="text-area-default"
				name="text"
				onChange={e => this.handleSpecial(e)}
				placeholder="Write your HTML code here"
			/>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ build }, dispatch);
}

export default connect(null, mapDispatchToProps)(Writer);
