import React, { Component } from 'react'
import Form from './Form.jsx';
import View from './View.jsx';

export class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'list',
            usersData: [],
            editData: undefined
        }
    }

    componentDidMount() {
        if (!localStorage.getItem('user'))
            localStorage.setItem('user', JSON.stringify([]));
        else
            this.setState({ usersData: JSON.parse(localStorage.getItem('user')) });
    }

    handleMode = (mode) => {
        this.setState({ mode });
    }

    handleEdit = (editData) => {
        debugger;
        this.setState({ mode: "edit", editData });
    }
    render() {
        const { mode, usersData, editData } = this.state
        return (
            <div>
                <button className='btn btn-primary m-2' name="list" onClick={() => this.handleMode('list')}>User List</button>
                <button className='btn btn-primary m-2' name="list" onClick={() => this.handleMode('add')}>Add User</button>

                {mode === "list" && <View usersList={usersData} handleEdit={this.handleEdit} />}
                {(mode === "add" || mode === "edit") &&
                    <Form handleCancel={this.handleMode} editData={editData} />
                }
            </div>
        );
    }
}

export default Users