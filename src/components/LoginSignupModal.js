import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function LoginSignUpModal(props){
    return(
        <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Welcome to Droplet</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Every stroke tells a story</p>
        </Modal.Body>

        <Modal.Footer>
          <Button>Log In</Button>
          <Button>Sign Up</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
    )
}
