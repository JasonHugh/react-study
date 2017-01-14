import React from 'react';

import FooterComp from '../../Components/footer'
import HeaderComp from '../../Components/header'

import style from './app.scss'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [{next: true}],
			nextLoadding: false,
			page: 1
		}
	}

	componentDidMount() {
		this._fetchData();
	}

	_getRows() {
		var items = [];
		for (var i = 0,max = this.state.data.length; i < max; i++) {
			if (this.state.data[i].next) {
				items.push(
	     			this._nextDom(i)
				)
			}else{
				items.push(
	     			this._rowDom(this.state.data[i],i)
				)
			}
			
		}
		return items;
	}

	_rowDom(data,i) {
		return (
			<li style={styles.listBox} key={i}>
 				<div style={{padding:'0 10px',height: '50px'}}>
 					<img src={data.userhead} style={styles.userhead}/>
 					<span style={styles.username}>{data.username}</span><br/>
 					<span style={styles.username}>{data.time}</span>
 				</div>
 				<div style={styles.cardbg}>
 					<h3 style={{textAlign:'center',marginTop:'30px',color:'#fff'}}>浙江&nbsp;&nbsp;&nbsp;杭州</h3>
 					<h3 style={{textAlign:'center',color:'#fff'}}>西湖</h3>
 					<p style={{ overflow:'hidden',color:'#eee',width:'240px',height:'110px',padding:'5px',margin:'5px auto',fontSize:'14px',lineHeight:'20px',backgroundColor:'rgba(0, 0, 0, 0.2)',borderRadius:'10px'}}>
 						背起行囊，跨过山河湖海。 又一年的烈日与寒风， 见证了你在路上的悲喜。 
 					</p>
 					<div className='card-bottom'>
						<h3>旅行笔记</h3>
						<h3 className='card-bottom-date'>12月16日 -- 12月18日</h3>
						<h4 className='sub-card'>费用说明<br/>&nbsp;AA</h4>
						<h4 className='sub-card'>人数限制<br/>&nbsp;1人</h4>
						<h4 className='sub-card'>性别限制<br/>&nbsp;女</h4>
 					</div>
 					
 				</div>
 				<div className='box-bottom'>
 					<div className='box-sub'><i className='iconfont icon-liuyan'></i></div>
 					<div className='box-sub'><i className='iconfont icon-liuyan'></i></div>
 					<div className='box-sub'><i className='iconfont icon-liuyan'></i></div>
 				</div>
 			</li>
		)
	}

	_nextDom(i) {
		var dom;
		if (this.state.nextLoadding) {
			dom = this._loadDom()
		}else {
			dom = <span style={{lineHeight:'40px',fontSize:'14px',color:'#aaa'}}>更多内容</span>;
		}
		return (
			<li key={i} onClick={this._fetchData.bind(this)} className='nextBtn' style={{height: '40px',width:'100%',textAlign:'center',backgroundColor:'#fff',marginTop:'5px'}}>
				{dom}
			</li>
		)
	}

	_fetchData() {
		this.setState({nextLoadding:true});
		var page = this.state.page;
		this.setState({page:page + 1});
		//setTimeout(() => {
			var data = this.state.data
				,next = data.pop();
			data.push({
				userhead: '/public/img/userhead.png',
				username: '创业邦杂志' + (page-1) * 3,
				time: '2016年12月15日 17:59'
			},{
				userhead: '/public/img/userhead.png',
				username: '创业邦杂志' + ((page-1) * 3 + 1),
				time: '2016年12月15日 17:59'
			},{
				userhead: '/public/img/userhead.png',
				username: '创业邦杂志' + ((page-1) * 3 + 2),
				time: '2016年12月15日 17:59'
			})
			data.push(next);
			this.setState({data:data,nextLoadding:false});
		//},1000);
	}

	_loadDom() {
		return (
			<div id="loading">
				<div id="loading-center">
					<div id="loading-center-absolute">
					<div className="object" id="object_one"></div>
					<div className="object" id="object_two"></div>
					<div className="object" id="object_three"></div>

					</div>
				</div>
			 
			</div>
		)
	}

   	render() {
      	return (
         	<div style={{display: 'flex',flex: 1,backgroundColor: '#eee'}}>
         		<HeaderComp />
         		<ul style={styles.list}>
	         		{this._getRows()}
         		</ul>
         		<FooterComp active='1'/>
         	</div>
      	);
   	}
}

var height = window.screen.height;
var styles = {
	list: {
		width: '100%',
		margin: '45px 0 45px 0',
		height: height - 90,
		overflowY: 'scroll'
	},
	listBox: {
		width:'100%',
		backgroundColor: '#fff',
		marginTop:'10px',
		paddingTop: '10px'
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
	},
	cardbg: {
		backgroundImage:"url(/public/img/cardbg.jpg)",
		backgroundSize:'contain',
		backgroundRepeat:'no-repeat',
		width:'300px',
		height:'400px',
		margin:'0 auto',
		padding:'1px',
		position:'relative'
	},
}

export default App;