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
      body: '',
      isShowpopup: false,
      isEdit: false
    };
  }

  viewData = (Name) => {
    this.setState({ title: "view user", body: this.viewUser(Name), isShowpopup: true })
  }

  viewUser = (Name) => {
    let userdata = this.props.usersList.filter(x => x.Name === Name)[0];
    return <>
      <div>
        <span>Name:{userdata.Name}</span>
        <hr />
        <span>{userdata.Age}</span>
      </div>
    </>
    // console.log(userdata);
  }
  editUser = (Name) => {
    let data = this.props.usersList.find((x) => { return x.Name === Name });
    console.log(data);
    this.setState({ Name: data.Name, Address: data.Address, City: data.City, Age: data.Age, Email: data.Email, Pincode: data.Pincode, Mobile: data.Mobile });
    this.setState({ isEdit: Name });
  }
  deleteUser = (Name) => {
    this.setState({ title: "Delete user", body: this.viewDelete(Name), isShowpopup: true })

  }
  viewDelete = (Name) => {
    let filterdata = this.props.usersList.filter(x => x.Name === Name)[0];
    console.log(filterdata);
    return <div>
      <h6>{filterdata.Name}Are you want to delete ?</h6>
      <button className='btn btn-danger mt-1' onClick={() => this.deletedata(Name)}>Yes</button>
      <button className='btn btn-success mt-1' onClick={() => this.setState({ isShowpopup: false })}>No</button>
    </div>
  }
  deletedata = (Name) => {
    let user = this.props.usersList.filter(x => x.Name !== Name)
    localStorage.setItem('user', JSON.stringify(user));
    this.setState({ isShowpopup: false })
  }
  render() {
    return (
      <div className='view-container  class-sm-6 shadow-lg p-3 mb-5 bg-body rounded'>
        <div className='table-responsive'>
          <div className='wrapper mb-5 text-center '>
            <h1 className='text-dark shadow-lg p-3 mb-5 bg-body rounded'>User List</h1>
          </div>
          <table className='table'>
            <thead>
              <tr className='h5'>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Edit</th>
                <th>View</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody>
              {this.props.usersList.map(user => (

                <>
                  <tr key={user.Name} >
                    <td>{user.Name}</td>
                    <td>{user.Age}</td>
                    <td>{user.Email}</td>
                    <td className='Edit-btn'>
                      <button className='p-1 btn  btn-outline-primary' onClick={() => this.props.handleEdit(user)} >Edit</button>
                    </td>
                    <td className='view-btn'>
                      <button className='p-1 btn  btn-outline-primary' onClick={() => this.viewData(user.Name)} >View</button>

                    </td>
                    <td className='delete-btn' onClick={() => this.deleteUser(user.Name)} ><button className='p-1 btn btn-outline-danger'>Delete</button></td>
                  </tr>
                  <div>
                    {
                      this.state.isShowpopup && <Model title={this.state.title} body={this.state.body} handleClose={() => this.setState({ isShowpopup: false })}></Model>
                    }
                  </div>
                </>
              ))
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default View;