import React, { Component } from 'react';
// import { Button } from 'bootstrap';
import { Button , Modal} from 'react-bootstrap';






class Modalf extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    }
  }
  handleModal() {
    this.setState({ show: !this.state.show })
  }
  render() {
    return (
      <div>
        <Button onClick={() => this.handleModal()}>Click me !</Button>
        <Modal show={this.state.show} onHide={() => this.handleModal()}>
          <Modal.Header closeButton>Hi</Modal.Header>
          <Modal.Body>Hello Everyone</Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.handleModal()}>Close</Button>
            <Button onClick={() => this.handleModal()}>Save</Button>
          </Modal.Footer>

        </Modal>
      </div>
    );
  }
}

export default Modalf;