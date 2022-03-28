import React, {useState} from "react";
import BootstrapTable from "react-bootstrap-table-next";
// import { currencyFormatter } from "../../../utils/helper";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Card, Button, Tooltip, OverlayTrigger } from "react-bootstrap";

import { FaEdit, FaTrash } from "react-icons/fa";
import EditPlayer from "./edit-player/EditPlayer";
import DeletePlayer from "./delete-player/DeletePlayer";

function TableContent({ players, handleShow, setPlayers }) {
  const [currentId, setCurrentId] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExp] = useState("");
  const [lvl, setLevel] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };
  const handleShowEditModal = (id, username, email, experience, lvl) => {
    setCurrentId(id);
    setUsername(username);
    setEmail(email);
    setExp(experience);
    setLevel(lvl);
    setShowEditModal(true);
  };

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };
  const handleShowDeleteModal = (id) => {
    setCurrentId(id);
    setShowDeleteModal(true);
  };

  const editPlayer = () => {
    const playerList = [...players];
    const index = playerList.findIndex((item) => item.id === currentId);
    playerList[index].username = username;
    playerList[index].email = email;
    playerList[index].experience = experience;
    playerList[index].lvl = lvl;
    setPlayers(playerList);
    setShowEditModal(false);
  };

  const deletePlayer = () => {
    const playerDelete = players.filter((item) => item.id !== currentId);
    setPlayers(playerDelete);
    setShowDeleteModal(false);
  };
  const columns = [
    {
      dataField: "id",
      text: "Player ID",
    },
    {
      dataField: "username",
      text: "Username",
    },
    {
      dataField: "email",
      text: "Email",
    },
    {
      dataField: "experience",
      text: "Experience",
    },
    {
      dataField: "lvl",
      text: "Level",
    },
    {
      dataField: "",
      text: "Actions",
      formatter: (cell, row) => {
        return (
          <div>
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Edit Player</Tooltip>}
            >
              <Button
                variant="none"
                onClick={() => {
                  handleShowEditModal(row.id, row.username, row.email, row.experience, row.lvl);
                }}
              >
                <FaEdit color="orange" />
              </Button>
            </OverlayTrigger>

            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Delete Player</Tooltip>}
            >
              <Button
                variant="none"
                onClick={() => {
                  handleShowDeleteModal(row.id);
                }}
              >
                <FaTrash color="red" />
              </Button>
            </OverlayTrigger>
          </div>
        );
      },
    },
  ];

  return (
    <div className="mt-3">
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center">
          Player List
          <Button variant="success" onClick={handleShow}>
            Add New Player
          </Button>
        </Card.Header>
        <Card.Body>
          <BootstrapTable
            keyField="id"
            data={players}
            columns={columns}
            pagination={paginationFactory()}
          />
        </Card.Body>
      </Card>
      <EditPlayer
        show={showEditModal}
        handleClose={handleCloseEditModal}
        username={username}
        email={email}
        experience={experience}
        lvl={lvl}
        setUsername={setUsername}
        setEmail={setEmail}
        setExp={setExp}
        setLevel={setLevel}
        editPlayer={editPlayer}
      />

      <DeletePlayer
        show={showDeleteModal}
        handleClose={handleCloseDeleteModal}
        deletePlayer={deletePlayer}
      />
    </div>
  );
}

export default TableContent;
