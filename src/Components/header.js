import React, { Component } from 'react'

export default class HeaderComponent extends Component {
	_title() {
		if (this.props.title) {
			return this.props.title;
		}else {
			return "React Study";
		}
	}
	render() {
		return (
			<div style={styles.header}>
				<h1 style={styles.title}>{this._title()}</h1>
			</div>
		)
	}
} 

var styles = {
	header: {
		width: '100%',
		height: '45px',
		borderBottom: '1px solid #eee',
		position: 'fixed',
		left: 0,
		top: 0,
		backgroundColor: '#fff'
	},
	title: {
		fontSize: '20px',
		textAlign: 'center',
		lineHeight: '45px'
	}
}