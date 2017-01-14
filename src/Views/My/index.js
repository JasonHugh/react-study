import React from 'react';

import FooterComp from '../../Components/footer'
import HeaderComp from '../../Components/header'

export default class My extends React.Component {
	render() {
      	return (
         	<div style={{display: 'flex',flex: 1,backgroundColor: '#eee'}}>
         		<HeaderComp title='我的' />
         		<FooterComp active='4' />
         	</div>
      	);
   	}
}