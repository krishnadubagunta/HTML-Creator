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
		// let { data, builder } = this.state;
		// const lastChar = data.charAt(data.length - 1);
		// if (data.charAt(data.length - 1) === '\n') {
		// 	builder += lastChar + '<br />';
		// } else {
		// 	builder += lastChar;
		// }
	};

	render() {
		return <textarea name="text" onChange={e => this.handleSpecial(e)} />;
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ build }, dispatch);
}

export default connect(null, mapDispatchToProps)(Writer);
