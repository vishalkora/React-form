import React, { Component } from 'react';
import Model from './Model';


class Form extends Component {

    userData;
    constructor(props) {
        super(props)



        this.state = {
            Name: '',
            City: '',
            Address: '',
            Pincode: '',
            Age: '',
            Mobile: '',
            Email: '',
            Active: '',
            body:'',
            isShowpopup:false,
            isEdit:false,
            // modeldata: {
            //     Name: 'sample',
            //     City: 'sample',
            //     Address: 'sample',
            //     Pincode: '53453',
            //     Age: '33',
            //     Mobile: '345343',
            //     Email: '23423@2234.eg',
            //     Active: ''
            // }
        }

    }

    handleChangedata = (event) => {
        this.setState({ ...this.state,[event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        debugger;
        let isEditEnabled = this.state.isEdit ? true : false;


        let userData=JSON.parse(localStorage.getItem('user'));
            if(isEditEnabled)
            {
                userData= userData.filter(x=>x.Name !==this.state.isEdit)

            }

        let data = {
            ...this.state
        }

        // let userData = JSON.parse(localStorage.getItem('user'));

        userData.push(data);
        localStorage.setItem('user', JSON.stringify(userData));
        debugger;
        

    }

    resetform = () => {
        this.setState({
            Name: '',
            City: '',
            Address: '',
            Pincode: '',
            Age: '',
            Mobile: '',
            Email: '',
            Active: '',
          
            // modeldata: null
        })
    }

    componentDidMount() {

        if (!localStorage.getItem('user')) //TODO : Look at falsey values in javascript
            localStorage.setItem('user', JSON.stringify([]));

    }
    viewData=(Name)=>{
        this.setState({title:"view user",body:this.viewUser(Name),isShowpopup:true})
    }

    viewUser = (Name) => {
        let userdata = JSON.parse(localStorage.getItem('user')).filter(x => x.Name === Name)[0];
        return <>
            <div>
                <span>Name:{userdata.Name}</span>
                <hr/>
                <span>{userdata.Age}</span>
            </div>
        </>
        // console.log(userdata);
    }
    editUser = (Name) =>{
        let data = JSON.parse(localStorage.getItem('user')).find((x)=>{return x.Name === Name});
        debugger;
        console.log(data);
        this.setState({Name:data.Name,Address:data.Address,City:data.City,Age:data.Age,Email:data.Email,Pincode:data.Pincode,Mobile:data.Mobile});
debugger;       
         this.setState({isEdit:Name});
    }
    deleteUser=(Name)=>
    {
        this.setState({title:"Delete user",body:this.viewDelete(Name),isShowpopup:true})
        
    }
    viewDelete=(Name)=>{
        let filterdata=JSON.parse(localStorage.getItem('user')).filter(x=>x.Name===Name)[0];
        console.log(filterdata);
        return <div>
            <h6>{filterdata.Name}Are you want to delete ?</h6>
            <button className='btn btn-danger mt-1'  onClick={()=>this.deletedata(Name)}>Yes</button>
            <button className='btn btn-success mt-1' onClick={()=>this.setState({isShowpopup:false})}>No</button>
        </div>
    }
    deletedata=(Name)=>{
        let user=JSON.parse(localStorage.getItem('user')).filter(x=>x.Name!==Name)
        localStorage.setItem('user',JSON.stringify(user));
        this.setState({isShowpopup:false})
    }
    render() {
        return (
            <>
                <div className="App">
                    <form autoComplete='off' className='form-group h4 ' >
                        <label>Name: </label>
                        <input type="text" className='form-control todo' name="Name" id="Name" onChange={this.handleChangedata} value={this.state.Name} /><br />
                        <label>Age: </label>
                        <input type="number" className='form-control' name="Age" id="Age" onChange={this.handleChangedata} value={this.state.Age} /><br />
                        <label>Address: </label>
                        <input type="text" className='form-control' name="Address" id="Address" onChange={this.handleChangedata} value={this.state.Address} /><br />
                        <label>city: </label>
                        <input type="text" className='form-control' name="City" id="City" onChange={this.handleChangedata} value={this.state.city} /><br />
                        <label>Pincode: </label>
                        <input type="number" className='form-control' name="Pincode" id="Pincode" onChange={this.handleChangedata} value={this.state.Pincode} /><br />
                        <label>Email: </label>
                        <input type="email" className='form-control' name="Email" id="Email" onChange={this.handleChangedata} value={this.state.Email} /><br />
                        <label>Mobile: </label>
                        <input type="number" className='form-control' name="Mobile" id="Mobile" onChange={this.handleChangedata} value={this.state.Mobile} /><br />
                        <label>Message</label><br />
                        <textarea name="message" className='form-control' name="Message" id="Message" onChange={this.handleChangedata} value={this.state.Message} /> <br />
                        <label>Active: </label>
                        <input type="text" className='form-control' name="Active" id="Active" onChange={this.handleChangedata} value={this.state.Active} /><br />
                         <div>
                        <button type="submit" className='btn btn-primary' style={{marginRight : "5px"}} name="Submit" id="Submit" onClick={() => this.handleSubmit()}>Submit</button>
                        <button type="reset" className='btn btn-danger' name="Submit" id="Submit" onClick={() => this.resetform()}>reset</button>
                        </div>

                    </form>
                </div>
                

                        {JSON.parse(localStorage.getItem('user')).length > 0?
                    <div className='table-responsive mt-4'>
                        <table className='table h4'>
                            <thead>
                                <tr className=''>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Email</th>
                                    <th>Edit</th>
                                    <th>View</th>
                                    <th>delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {JSON.parse(localStorage.getItem('user')).map(user => (
                                    <tr key={user.Name} >
                                        <td>{user.Name}</td>
                                        <td>{user.Age}</td>
                                        <td>{user.Email}</td>
                                        <td className='Edit-btn'>
                                            <button className='p-1 btn  btn-outline-primary' onClick={()=>this.editUser(user.Name)} >Edit</button>

                                                
                                        </td>
                                        <td className='view-btn'>
                                            <button className='p-1 btn  btn-outline-primary' onClick={()=>this.viewData(user.Name)} >View</button>
                                                
                                        </td>
                                        <td className='delete-btn' onClick={() => this.deleteUser(user.Name)} ><button className='p-1 btn btn-outline-danger'>Delete</button></td>
                                    </tr>
                                ))
                                }
                            </tbody>
                        </table> 
                    </div> : <div className='border border-secondary mt-2 p-2  text-center display-6'>no data availabe</div>}
                    <div>
                        {
                            this.state.isShowpopup && <Model title={this.state.title} body={this.state.body} handleClose={()=>this.setState({isShowpopup:false})}></Model>
                        }
                    </div>
                    

                           </>)

    }
}

export default Form;


