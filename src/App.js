// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import Func from './component/Func.jsx';
// import User from './component/User.jsx';
// import Postlist from './component/Postlist.jsx';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Form from './component/Form.jsx';
import View from './component/View.jsx';


import './index.css';

class App extends React.Component {
  render() {
    return (
      <>
        <div className='wrapper mb-5 text-center '>
          <h1 className='text-dark shadow-lg p-3 mb-5 bg-body rounded'>Registration Form</h1>
        </div>
        <div className='main'>
          <div className='form-container class-sm-6 shadow-lg p-5 mb-5 bg-body rounded'>
           <Form/>
          </div>
          {/* <div className='view-container  class-sm-6 shadow-lg p-3 mb-5 bg-body rounded'>
            <div className='table-responsive'>
             
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
                    <View/>
                </tbody>
              </table>
            </div>
          </div> */}
        </div>
      </>
    );
  }

}

export default App;
