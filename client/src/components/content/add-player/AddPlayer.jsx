import React, { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";

function AddPlayer({ show, handleClose, setPlayers }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExp] = useState("");
  const [lvl, setLevel] = useState("");

  const restForm = () => {
    setUsername("");
    setEmail("");
    setExp("");
    setLevel("");
  };

  const addNewPlayer = () => {
    if (!username || !email || !experience || !lvl) {
    } else {
      // prev adalah banyak player yang sekarang
      setPlayers((prevPlayer) => {
        // check apakah player sudah ada datanya
        if (prevPlayer.length > 0) {
          let id = Number(prevPlayer[prevPlayer.length - 1].id) + 1;
          // cara 1 via copy array
          // let playerListCopy = [...prevPlayer];
          // playerListCopy.push({ id: id, username, email, experience, lvl });
          // cara 2 spread operator
          restForm();
          handleClose();
          return [...prevPlayer, { id: id, username, email, experience, lvl }];
        } else {
          let id = 1;
          restForm();
          handleClose();

          return [...prevPlayer, { id: id, username, email, experience, lvl }];
        }
      });
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Form>
          <Modal.Header closeButton>
            <Modal.Title>Add New Player</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInputUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insert Player Username"
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
              controlId="exampleForm.ControlInputEmail"
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
              controlId="exampleForm.ControlInputExperience"
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
              controlId="exampleForm.ControlInputLevel"
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
            <Button variant="success" type="submit" onClick={addNewPlayer}>
              Add New Player
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default AddPlayer;
