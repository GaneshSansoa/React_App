import React from 'react';
import Card from '../components/Card';
class Home extends React.Component{
	render(){
		return(
			<div>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-sm-6">
							<Card width="400px"  image_url="http://placekitten.com/300/300" title="Test Card" description="Test Description"/>
								
							
						</div>
					</div>
				</div>
			</div>
		)
	}
}



export default Home;