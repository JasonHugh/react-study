import React, { Component } from 'react'

export default class HeaderComponent extends Component {
	render() {
		return (
			<div style={styles.header}>
				<h1 style={styles.title}>React Study</h1>
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