import React, { Component } from 'react';



class Form extends Component {
  constructor(props){
    super(props);

    this.state = {
      fullname:"",
      age:"",
      address:"",
      city:"",
      pincode:"",
      email:"",
      mobile:"",
      message:"",
      active:""
    }
  }
  handlechangeall = (event) => {
    this.setState ({[event.target.name]:event.target.value})
  }
  handlesubmit = (event) =>{
    // alert(JSON.stringify(this.state));
    event.preventDefault();
   
  }
  resetForm = () =>{
    this.setState ({
      fullname:"",
      age:"",
      address:"",
      city:"",
      pincode:"",
      email:"",
      mobile:"",
      message:"",
      active:""
    } )
  }
  
  render() {
    return(
    <>
      <h1>Registration  form</h1>

    <div className="App">
        <form onSubmit = {this.handlesubmit}>
                <label>Name: </label>
                <input type="text"name="fullname" value={this.state.fullname} onChange={this.handlechangeall}/><br/>
                <label>Age: </label>
                <input type="number"name="age" value={this.state.age} onChange={this.handlechangeall}/><br/>
                <label>Address: </label>
                <input type="text"name="address" value={this.state.address} onChange={this.handlechangeall}/><br/>
                <label>city: </label>
                <input type="text"name="city" value={this.state.city} onChange={this.handlechangeall}/><br/> 
                <label>Pincode: </label>
                <input type="number" name="pincode" value={this.state.pincode} onChange={this.handlechangeall}/><br/>
                <label>Email: </label>
                <input type="email" name="email" value={this.state.email} onChange={this.handlechangeall}/><br/>

                <label>Mobile: </label>
                <input type="number" name="mobile" value={this.state.mobile} onChange={this.handlechangeall}/><br/>
                <label>Message</label><br/>
                <textarea name="message" value={this.state.message} onChange={this.handlechangeall}/> <br/>
                <label>Active: </label>
                <input type="text" name="active" value={this.state.active} onChange={this.handlechangeall}/><br/>
                <input type="submit"  className='button' value="submit"/>
                <input type="reset" onClick={this.resetForm}  className='button button5'/>
                
                <textarea value={JSON.stringify(this.state)}/>
                
        </form>
     </div>
    </>);
  }
}


export default Form;
