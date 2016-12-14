import React from 'react';
import FooterComp from '../../Components/footer'
import HeaderComp from '../../Components/header'

class App extends React.Component {
   	render() {
      	return (
         	<div style={{display: 'flex',flex: 1}}>
         		<HeaderComp />
         		<FooterComp />
         	</div>
      	);
   	}
}

export default App;