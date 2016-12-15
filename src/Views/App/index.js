import React from 'react';

import FooterComp from '../../Components/footer'
import HeaderComp from '../../Components/header'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [{
				userhead: '/public/img/userhead.png',
				username: '创业邦杂志',
				time: '2016年12月15日 17:59'
			}]
		}
	}

	getRows() {
		var items = [];
		for (var i = 10 - 1; i >= 0; i--) {
			items.push(
				<li style={styles.listBox}>
     				<div style={{padding:'0 10px',height: '50px'}}>
     					<img src='/public/img/userhead.png' style={styles.userhead}/>
     					<span style={styles.username}>创业邦杂志</span><br/>
     					<span style={styles.username}>2016年12月15日 17:59</span>
     				</div>
     			</li>
			)
		}
		return items;
	}

   	render() {
      	return (
         	<div style={{display: 'flex',flex: 1,backgroundColor: '#eee'}}>
         		<HeaderComp />
         		<ul style={styles.list}>
	         		{this.getRows()}
         		</ul>
         		<FooterComp />
         	</div>
      	);
   	}
}

var height = window.screen.height;
var styles = {
	list: {
		width: '100%',
		margin: '45px 0 45px 0',
		height: height - 100,
		overflowY: 'scroll'
	},
	listBox: {
		width:'100%',
		backgroundColor: '#fff',
		marginTop:'10px',
		padding: '10px 0'
	},
	userhead: {
		width: '40px',
		height: '40px',
		borderRadius: '20px',
		float: 'left',
		marginRight: '10px'
	},
	username: {
		fontSize: '13px',
		lineHeight: '20px'
	}
}

export default App;