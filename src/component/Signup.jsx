import React, { Component } from 'react';
// import { findRenderedDOMComponentWithClass } from 'react-dom/cjs/react-dom-test-utils.production.min';

class Signup extends Component {

    userData;
    constructor(props) {
        super(props)


        // this.onChangename = this.onChangename.bind(this);
        // this.onChangeAddress = this.onChangeAddress.bind(this);
        // this.onChangeCity = this.onChangeCity.bind(this);
        // this.onChangePincode = this.onChangePincode.bind(this);
        // this.onChangeAge = this.onChangeAge.bind(this);
        // this.onChangeMobile = this.onChangeMobile.bind(this);
        // this.onChangeEmail = this.onChangeEmail.bind(this);
        // this.onChangeActive = this.onChangeActive.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: '',
            City: '',
            Address: '',
            Pincode: '',
            Age: '',
            Mobile: '',
            Email: '',
            Active: ''
        }
        // this.handleSubmit=this.handleSubmit.bind(this)
    }

    handlenamechange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleAddresschange = event => {
        this.setState({
            Address: event.target.value
        })
    }
    handleCitychange = event => {
        this.setState({
            City: event.target.value
        })
    }
    handlePincodechange = event => {
        this.setState({
            Pincode: event.target.value
        })
    }
    handleAgechange = event => {
        this.setState({
            Age: event.target.value
        })
    }
    handleMobilechange = event => {
        this.setState({
            Mobile: event.target.value
        })
    }
    handleEmailchange = event => {
        this.setState({
            Email: event.target.value
        })
    }
    handleActivechange = (event) => {
        this.setState({
            [event.target.value]
            : event.target.value
        })
    }

    handleSubmit = event => {
        debugger;


        let data = {
            ...this.state
        }

        let userData = JSON.parse(localStorage.getItem('user'));

        userData.push(data);
        localStorage.setItem('user', JSON.stringify(userData));
        debugger;
    }

    resetform = () => {
        this.setState({
            name: '',
            City: '',
            Address: '',
            Pincode: '',
            Age: '',
            Mobile: '',
            Email: '',
            Active: '',
        })
    }

    componentDidMount() {
        //this.userData = JSON.parse(localStorage.getItem('user'));
        if (!localStorage.getItem('user')) //TODO : Look at falsey values in javascript
            localStorage.setItem('user', JSON.stringify([]));
        //if (userData.length>0) 
    }

    /* componentWillUpdate(nextProps,nextState){
        localStorage.setItem('user',JSON.stringify(nextState));
    } */


    render() {

        return (
            <>
                <form>

                    <h2>Customer Entry</h2>
                    <div >
                        <label >Name :-
                        </label>
                        <input type="text" name="name" id="name"
                            value={this.state.name}
                            onChange={this.handlenamechange}
                            placeholder='Your Name' />
                    </div>
                    <br></br>
                    <div >
                        <label >Address :-
                        </label>
                        <input type="text" name="Address" id="Address"
                            value={this.state.Address}
                            onChange={this.handleAddresschange}
                            placeholder='Your Address' />
                    </div>
                    <br></br>
                    <div >
                        <label >City :-</label>
                        <select type="text" name="City" id="City"
                            value={this.state.City}
                            onChange={this.handleCitychange}
                        >
                            <option>Select City</option>
                            <option>Ahmd</option>
                            <option>Surat</option>
                        </select>
                    </div>
                    <br></br>
                    <div >
                        <label >Pincode :-
                        </label>
                        <input type="number" name="Pincode" id="Pincode"
                            value={this.state.Pincode}
                            onChange={this.handlePincodechange}
                            placeholder='Your Pincode' />
                    </div>
                    <br></br>
                    <div >
                        <label >Mobile :-
                        </label>
                        <input type="number" name="Mobile" id="Mobile"
                            value={this.state.Mobile}
                            onChange={this.handleMobilechange}
                            placeholder='Your Mobile' />
                    </div>
                    <br></br>
                    <div >
                        <label >Age :-
                        </label>
                        <input type="number" name="Age" id="Age"
                            value={this.state.Age}
                            onChange={this.handleAgechange}
                            placeholder='Your Age' />
                    </div>
                    <br></br>
                    <div >
                        <label >Email :-
                        </label>
                        <input type="text" name="Email" id="Email"
                            value={this.state.Email}
                            onChange={this.handleEmailchange}
                            placeholder='Your Email' />
                    </div>
                    <br></br>
                    <div >
                        <label >Active :-
                        </label>
                        <input type="radio" name="YES" id="YES"
                            value={this.state.Active}
                            onChange={this.handleActivechange}
                        />
                        <label>Yes</label>

                        <input type="radio" name="YES"
                            value={this.state.Active}
                            onChange={this.handleActivechange}
                        />
                        <label> No</label>
                    </div>
                    <br></br>
                    <div>
                        <button type="submit" name="Submit" id="Submit" onClick={() => this.handleSubmit()}>Submit</button>
                        <button type="reset" name="Submit" id="Submit" onClick={() => this.resetform()}>reset</button>
                    </div>
                    <br></br>
                    <textarea rows="5" cols="50"
                        value={JSON.stringify(localStorage.getItem('user'))}></textarea>
                </form>
            </>

        )
    }
}

export default Signup;
