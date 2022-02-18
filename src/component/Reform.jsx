import React, { Component } from 'react';

class Formclass extends Component {

    userData;
    constructor(props) {
        super(props)



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

    }

    handleChangedata = (event) => {
        this.setState({ [event.target.name]: event.target.value })
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

        if (!localStorage.getItem('user')) //TODO : Look at falsey values in javascript
            localStorage.setItem('user', JSON.stringify([]));

    }



    render() {

        return (

            <>
                <form>

                    <h2>Sign Form :</h2>
                    <div >
                        <label >Name :-
                        </label>
                        <input type="text" name="name" id="name"
                            value={this.state.name}
                            onChange={this.handleChangedata}
                            placeholder='Your Name' />
                    </div>
                    <br></br>
                    <div >
                        <label >Address :-
                        </label>
                        <input type="text" name="Address" id="Address"
                            value={this.state.Address}
                            onChange={this.handleChangedata}
                            placeholder='Your Address' />
                    </div>
                    <br></br>
                    <div >
                        <label >City :-</label>
                        <select type="text" name="City" id="City"
                            value={this.state.City}
                            onChange={this.handleChangedata}
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
                            onChange={this.handleChangedata}
                            placeholder='Your Pincode' />
                    </div>
                    <br></br>
                    <div >
                        <label >Mobile :-
                        </label>
                        <input type="number" name="Mobile" id="Mobile"
                            value={this.state.Mobile}
                            onChange={this.handleChangedata}
                            placeholder='Your Mobile' />
                    </div>
                    <br></br>
                    <div >
                        <label >Age :-
                        </label>
                        <input type="number" name="Age" id="Age"
                            value={this.state.Age}
                            onChange={this.handleChangedata}
                            placeholder='Your Age' />
                    </div>
                    <br></br>
                    <div >
                        <label >Email :-
                        </label>
                        <input type="text" name="Email" id="Email"
                            value={this.state.Email}
                            onChange={this.handleChangedata}
                            placeholder='Your Email' />
                    </div>
                    <br></br>
                    <div >
                        <label >Active :-
                        </label>
                        <input type="radio" name="YES" id="YES"
                            value={this.state.Active}
                            onChange={this.handleChangedata}
                        />
                        <label>Yes</label>

                        <input type="radio" name="YES"
                            value={this.state.Active}
                            onChange={this.handleChangedata}
                        />
                        <label> No</label>
                    </div>
                    <br></br>
                    <div>
                        <button type="submit" className='btn btn-success' name="Submit" id="Submit" onClick={() => this.handleSubmit()}>Submit</button>
                        <button type="reset" className='btn btn-danger' name="Submit" id="Submit" onClick={() => this.resetform()}>reset</button>
                    </div>
                    <br></br>
                    <textarea rows="5" cols="50"
                        value={JSON.stringify(localStorage.getItem('user'))}> </textarea>
                </form>
            </>

        )
    }
}

export default Formclass;