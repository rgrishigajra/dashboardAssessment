import React, { useState, useEffect } from 'react';
import Data from '../../components/homepage/Data';
import './Homepage.css';
import axios from 'axios';
import { getUserData } from '../../redux/selectors';
import { dataStore, dataDelete } from '../../redux/actionsFile';
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import ModalComponent from '../../components/homepage/ModalComponent';
function Homepage(props) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://astb-miner-v2.herokuapp.com/v2/18lJe-9fq5fHWr-9HuFTzhWnmfygeuXs2bbsXO8vh1FU/0`
      )
      .then((response) => {
        let arr = [];
        const map = new Map();
        response.data.data.forEach((element) => {
          element['anatomical_structures'].forEach((e) => {
            if (!map.has(e.name)) {
              map.set(e.name, true); // set any value to Map
              arr.push({
                id: e.id,
                name: e.name,
                rdfs_label: e.rdfs_label,
              });
            }
          });
        });
        console.log(arr);
        setData(arr);
        setLoading(false);
      });
  }, []);
  const listDisplay = data.map((listItem) => {
    return <Data data={listItem} handleOpen={handleOpen} />;
  });
  return (
    <div className="homepage-container">
      {loading ? (
        <div> loading </div>
      ) : (
        <div className="list-container">{listDisplay}</div>
      )}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        // className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        // BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <ModalComponent handleClose={handleClose}/>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => {
  const userData = getUserData(state);
  return { userData };
};
const mapDispatchToProps = { dataStore, dataDelete };

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
