import React, { Component } from 'react';



class Formone extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: "",
      age: "",
      address: "",
      city: "",
      pincode: "",
      email: "",
      mobile: "",
      message: "",
      active: ""
    }
  }
  handlechangeall = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  handlesubmit = (event) => {
    alert(JSON.stringify(this.state));
    event.preventDefault();
    localStorage.setItem('myData', [JSON.stringify(this.state)]);


  }

  resetForm = () => {
    this.setState({
      fullname: "",
      age: "",
      address: "",
      city: "",
      pincode: "",
      email: "",
      mobile: "",
      message: "",
      active: ""
    })
  }

  render() {
    return (
      <>
        <div className="App">
          <form autoComplete='off' className='form-group' onSubmit={this.handlesubmit}>
            <label>Name: </label>
            <input type="text" className='form-control' required name="fullname" value={this.state.fullname} onChange={this.handlechangeall} /><br />
            <label>Age: </label>
            <input type="number" className='form-control' required name="age" value={this.state.age} onChange={this.handlechangeall} /><br />
            <label>Address: </label>
            <input type="text" className='form-control' required name="address" value={this.state.address} onChange={this.handlechangeall} /><br />
            <label>city: </label>
            <input type="text" className='form-control' required name="city" value={this.state.city} onChange={this.handlechangeall} /><br />
            <label>Pincode: </label>
            <input type="number" className='form-control' required name="pincode" value={this.state.pincode} onChange={this.handlechangeall} /><br />
            <label>Email: </label>
            <input type="email" className='form-control' required name="email" value={this.state.email} onChange={this.handlechangeall} /><br />

            <label>Mobile: </label>
            <input type="number" className='form-control' required name="mobile" value={this.state.mobile} onChange={this.handlechangeall} /><br />
            <label>Message</label><br />
            <textarea name="message" className='form-control' required value={this.state.message} onChange={this.handlechangeall} /> <br />
            <label>Active: </label>
            <input type="text" className='form-control' required name="active" value={this.state.active} onChange={this.handlechangeall} /><br />
            <input type="submit" className='btn btn-success btn-md' value="submit" />
            <input type="reset" onClick={this.resetForm} className='btn btn-danger btn-md' />

            <textarea value={JSON.stringify(this.state)} />

          </form>
        </div>
      </>);
  }
}

export default Formone;
