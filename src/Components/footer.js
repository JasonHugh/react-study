import React,{Component} from 'react';

export default class FooterComponent extends Component {
	render() {

		return (
			<div style={styles.footer}>
				<div style={styles.navIcon}><i className="iconfont icon-viewlist" style={styles.iconfont}></i></div>
				<div style={styles.navIcon}><i className="iconfont icon-viewlist" style={styles.iconfont}></i></div>
				<div style={styles.navIcon}><i className="iconfont icon-viewlist" style={styles.iconfont}></i></div>
				<div style={styles.navIcon}><i className="iconfont icon-viewlist" style={styles.iconfont}></i></div>
				<div style={styles.navIcon}><i className="iconfont icon-viewlist" style={styles.iconfont}></i></div>
			</div>
		)
	}
}

const styles = {
	footer: {display:'flex', position: 'fixed', bottom:0, left:0, width: '100%', height:'45px', background:'#0af'},
	navIcon: {
		display: 'flex',
		flex: 1, 
		justifyContent: 'center',
		alignItems: 'center'
	},
	iconfont: {
		fontSize: 20
	}
}