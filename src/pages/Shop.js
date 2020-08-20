import React from 'react';

class Shop extends React.Component{
	constructor(){
		super();
		this.state = {
			email:"",
			password:"",
			check:true,
			style:{},
			validationMsgClasses:"",
			validationMsg:"",
			data:[],
			count:0,
		}
		let data = {};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	 handleSubmit(event){
		 console.log(this.state.data);
		const {email, password, check} = this.state;
		var newItem = {
			email:email,
			password:password,
			check:check,
		};
		if(email != "" && password != ""){
			console.log("dasda");
			this.setState(prevState => ({
				data: {...prevState.data.concat(newItem)}
		}))
		console.log(this.state.count);
		}
		else{
			this.setState({
				style:{
					borderColor:'red',				
				}
			})
		}
		event.preventDefault();
	}
		handleChange(event){
			const {name, type, checked, value} = event.target;
				
			console.log(value);
			type == "checkbox" ? this.setState({[name] : checked}) : this.setState({[name] : value})
			
		}
	render(){
		const styles = {
			width:'400px',
		}
		
		return(
		
			<div>
				<h1>Shop Page</h1>
				<div className="card mx-auto" style={styles} >
				
				<div className="card-body">
				<h5 className="card-title">Login</h5>
					<form onSubmit={this.handleSubmit} >
					  <div className="form-group">
						<label for="exampleInputEmail1" className="text-left">Email address</label>
						<input type="email" style={this.state.style} name="email" value={this.state.username} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={this.handleChange}/>
						<small id="emailHelp" className="form-text text-muted">{this.state.email != '' ? "Your entered Email: " + this.state.email : '' }</small>
					  </div>
					  <div className="form-group">
						<label for="exampleInputPassword1"  className="text-left">Password</label>
						<input type="password" style={this.state.style} name="password" value={this.state.password} className="form-control" id="exampleInputPassword1" onChange={this.handleChange}/>
					  </div>
					  <div className="form-group form-check">
						<input type="checkbox" name="check" checked={this.state.check} className="form-check-input" id="exampleCheck1" onChange={this.handleChange} />
						<label className="form-check-label" for="exampleCheck1">Check me out</label>
					  </div>
					  <button type="submit" className="btn btn-primary">Add</button>
					</form>
					{this.state.email}
					{this.state.password}
					{this.state.count}
					
					
				</div>
			</div>
			</div>
		)
	
	}

}
export default Shop;