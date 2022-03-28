import React from "react";
import { Form, Modal, Button } from "react-bootstrap";

function EditPlayer({
  show,
  handleClose,
  username,
  email,
  experience,
  lvl,
  setUsername,
  setEmail,
  setExp,
  setLevel,
  editPlayer,
}) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Form>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insert Username"
                autoFocus
                required
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insert Email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Experience</Form.Label>
              <Form.Control
                type="number"
                placeholder="Insert Experience"
                required
                value={experience}
                onChange={(e) => {
                  setExp(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Level</Form.Label>
              <Form.Control
                type="number"
                placeholder="Insert Level"
                required
                value={lvl}
                onChange={(e) => {
                  setLevel(e.target.value);
                }}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" onClick={editPlayer}>
              Edit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default EditPlayer;
