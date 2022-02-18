import React from 'react'
import Icon from 'react-icons-kit';
import { trash } from 'react-icons-kit/feather/trash';
import { edit } from 'react-icons-kit/feather/edit';


export const View = () => {



  return JSON.parse(localStorage.getItem('user')).map(user => (


    <tr key={user.Name} >
      <td>{user.Name}</td>
      <td>{user.Age}</td>
      <td>{user.Email}</td>
      <td className='edit-btn'><Icon icon={edit} /></td>
      <td className='view-btn'>
        <button className='p-1 btn  btn-outline-primary' onClick={() => this.viewData(user.Name)} >View</button>

      </td>

      <td className='delete-btn'>
        <Icon icon={trash} />
      </td>
    </tr>
    
  ))
  // return <h1>View</h1>
}

export default View;
