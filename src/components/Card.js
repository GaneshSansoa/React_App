import React from 'react';

class Card extends React.Component{
	constructor(){
		super();
		
	}
	render(props){
		const styles = {
			width: this.props.width ? this.props.width : '100%',
			height: this.props.height ? this.props.height : '100%',
			width: this.props.width ? this.props.width : '100%',
		
			
		}
		return(
			<div className="card" style={styles} >
					<img src={this.props.image_url ? this.props.image_url : ''} alt="Test Image" class="card-img-top" />
				<div className="card-body">
				<h5 className="card-title">{this.props.title ? this.props.title : 'Specify Card Title'}</h5>
					<p className="card-text">{this.props.description ? this.props.description : 'Specify Card Description'}</p>
				</div>
			</div>
		)
	}

}


export default Card;