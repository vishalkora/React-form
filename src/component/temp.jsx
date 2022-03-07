import React, { Component } from "react";

import Model from './Model';

class View extends Component {
  constructor() {
    super();
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
      isEdit:false
    };
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
    return JSON.parse(localStorage.getItem('user')).map(user => (

<>
      <tr key={user.Name} >
        <td>{user.Name}</td>
        <td>{user.Age}</td>
        <td>{user.Email}</td>
        <td className='Edit-btn'>
          <button className='p-1 btn  btn-outline-primary' onClick={() => this.editUser(user.Name)} >Edit</button>


        </td>
        <td className='view-btn'>
          <button className='p-1 btn  btn-outline-primary' onClick={() => this.viewData(user.Name)} >View</button>

        </td>
        <td className='delete-btn' onClick={() => this.deleteUser(user.Name)} ><button className='p-1 btn btn-outline-danger'>Delete</button></td>
      </tr>
       <div>
                        {
                            this.state.isShowpopup && <Model title={this.state.title} body={this.state.body} handleClose={()=>this.setState({isShowpopup:false})}></Model>
                        }
                    </div>
      </>
    ))
  }
}

export default View;