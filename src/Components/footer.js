import React,{Component} from 'react';

export default class FooterComponent extends Component {
	constructor(props) {
        super(props);
        this.text = [['icon-shouye','icon-shouyefill icon-fill'],
    			['icon-biaoxing','icon-biaoxingfill icon-fill'],
        		['icon-liuyan','icon-liuyanfill icon-fill'],
        		['icon-wode','icon-wodefill icon-fill']];
        this.state = {
        	text: [this.text[0][0],this.text[1][0],this.text[2][0],this.text[3][0]]
        }
        this.state.text[this.props.active-1] = this.text[this.props.active-1][1]
    }

	render() {

		return (
			<div style={styles.footer}>
				<div style={styles.navIcon}><a href="/#"><i className={"iconfont "+this.state.text[0]} onClick={this.handleIconClick.bind(this,0)}></i></a></div>
				<div style={styles.navIcon}><i className={"iconfont "+this.state.text[1]} onClick={this.handleIconClick.bind(this,1)}></i></div>
				<div style={styles.navIcon}><i className="iconfont icon-jiahao1 icon-add"></i></div>
				<div style={styles.navIcon}><i className={"iconfont "+this.state.text[2]} onClick={this.handleIconClick.bind(this,2)}></i></div>
				<div style={styles.navIcon}><a href="/#/my"><i className={"iconfont "+this.state.text[3]} onClick={this.handleIconClick.bind(this,3)}></i></a></div>
			</div>
		)
	}

	handleIconClick(index) {
		var text = [];
		for (var i = 3; i >= 0; i--) {
			if (index == i) {
				text[i] = this.text[i][1]
			}else{
				text[i] = this.text[i][0]
			}
		}
		this.setState({text: text});
	}
}

var styles = {
	footer: {display:'flex', position: 'fixed', bottom:0, left:0, width: '100%', height:'45px', 
		borderTop: '1px solid #aaa',
		backgroundColor: '#fff'
	},
	navIcon: {
		display: 'flex',
		flex: 1, 
		justifyContent: 'center',
		alignItems: 'center'
	},
	navIcon: {
		display: 'flex',
		flex: 1, 
		justifyContent: 'center',
		alignItems: 'center'
	},
}