import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import AddPlayer from "./add-player/AddPlayer";
import FilterPlayer from "./filter-player/FilterPlayer";
import TableContent from "./table-content/TableContent";

function Content() {
  const [players, setPlayers] = useState(
    new Array(3).fill(null).map((data, index) => {
      const key = index + 1;
      return {
        id: key,
        username: `Product ${key}`,
        email: "email@gmail.com",
        experience: key * 10000,
        lvl: key * 10,
      };
    })
  );

  // untuk modal add player
  const [showAddModal, setShowAddModal] = useState(false);
  const handleCloseAddModal = () => setShowAddModal(false);
  const handleShowAddModal = () => setShowAddModal(true);

  const [filter, setFilter] = useState({
    username: "",
    email: "",
    experience: "",
    lvl: "",
  });

  const [filteredPlayers, setFilteredPlayers] = useState([]);

  const filteredSearch = () => {
    if (filter.username && filter.email && filter.experience && filter.lvl) {
      setFilteredPlayers(
        players.filter(
          (item) => item.username === filter.username && item.email === filter.email && item.experience === filter.experience && item.lvl === filter.lvl
        )
      );
    } else if (filter.username && filter.email && filter.experience) {
        setFilteredPlayers(
            players.filter(
              (item) => item.username === filter.username && item.email === filter.email && item.experience === filter.experience
            )
          );
    } else if(filter.username && filter.email && filter.lvl){
        setFilteredPlayers(
            players.filter(
              (item) => item.username === filter.username && item.email === filter.email && item.lvl === filter.lvl
            )
          );
    } else if(filter.username && filter.experience && filter.lvl){
        setFilteredPlayers(
            players.filter(
              (item) => item.username === filter.username && item.experience === filter.experience && item.lvl === filter.lvl
            )
          );
    } else if(filter.email && filter.experience && filter.lvl){
        setFilteredPlayers(
            players.filter(
              (item) => item.email === filter.email && item.experience === filter.experience && item.lvl === filter.lvl
            )
          );
    } else if(filter.username && filter.email){
        setFilteredPlayers(
            players.filter(
              (item) => item.username === filter.username && item.email === filter.email
            )
          );
    } else if(filter.email && filter.experience){
        setFilteredPlayers(
            players.filter(
              (item) => item.email === filter.email && item.experience === filter.experience
            )
          );
    } else if(filter.experience && filter.lvl){
        setFilteredPlayers(
            players.filter(
              (item) => item.experience === filter.experience && item.lvl === filter.lvl
            )
          );
    } else if(filter.username && filter.experience){
        setFilteredPlayers(
            players.filter(
              (item) => item.username === filter.username && item.experience === filter.experience
            )
          );
    } else if(filter.username && filter.lvl){
        setFilteredPlayers(
            players.filter(
              (item) => item.username === filter.username && item.lvl === filter.lvl
            )
          );
    } else if(filter.email && filter.lvl){
        setFilteredPlayers(
            players.filter(
              (item) => item.email === filter.email && item.lvl === filter.lvl
            )
          );
    } else if(filter.username){
        setFilteredPlayers(
            players.filter((item) => item.username === filter.username)
          );
    } else if(filter.email){
        setFilteredPlayers(
            players.filter((item) => item.email === filter.email)
          );
    } else if(filter.experience){
        setFilteredPlayers(
            players.filter((item) => item.experience === filter.experience)
          );
    } else if (filter.lvl) {
      setFilteredPlayers(
        players.filter((item) => item.lvl === filter.lvl)
      );
    } else {
      setFilteredPlayers(players);
    }
  };

  useEffect(() => {
    filteredSearch();
  }, [filter, players]);

  return (
    <div>
      <Container fluid="md">
        <FilterPlayer setFilter={setFilter} filter={filter} />
        <TableContent
          players={filteredPlayers}
          handleShow={handleShowAddModal}
          setPlayers={setPlayers}
        />
      </Container>
      <AddPlayer
        show={showAddModal}
        handleClose={handleCloseAddModal}
        setPlayers={setPlayers}
      />
    </div>
  );
}

export default Content;
