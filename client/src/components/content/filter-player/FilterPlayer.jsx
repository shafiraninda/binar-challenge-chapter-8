import React from "react";
import { Card, Form } from "react-bootstrap";

function FilterPlayer({ setFilter, filter }) {
  return (
    <div className="mt-3">
      <Card>
        <Card.Header>Filter Player List</Card.Header>
        <Card.Body>
          <Form>
            <div className="row">
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Search By Player Username"
                    onChange={(e) => {
                      setFilter({ ...filter, username: e.target.value });
                    }}
                  />
                  <Form.Text className="text-muted">
                    Search By Player Username
                  </Form.Text>
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Search By Email"
                    onChange={(e) => {
                      setFilter({ ...filter, email: e.target.value });
                    }}
                  />
                  <Form.Text className="text-muted">
                    Search By Email
                  </Form.Text>
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Experience</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Search By Player Experience"
                    onChange={(e) => {
                      setFilter({ ...filter, experience: e.target.value });
                    }}
                  />
                  <Form.Text className="text-muted">
                    Search By Player Experience
                  </Form.Text>
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Level</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Search By Player Level"
                    onChange={(e) => {
                      setFilter({ ...filter, lvl: e.target.value });
                    }}
                  />
                  <Form.Text className="text-muted">
                    Search By Player Level
                  </Form.Text>
                </Form.Group>
              </div>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default FilterPlayer;
