import React, { useState, useEffect } from 'react';
import './Components.css';
import Card from '@material-ui/core/Card';
import { getUserData } from '../../redux/selectors';
import { dataStore, dataDelete } from '../../redux/actionsFile';
import { connect } from 'react-redux';
import axios from 'axios';

function ModalComponent(props) {
  return (
    <Card className="modal-container" variant="outlined">
      <div>
        <div className='header'>
          Name:{props.userData.name}
          <div className="close-btn" onClick={props.handleClose}>X</div>
        </div>
        <p>Description:{props.userData.description}</p>
        <p>iri:{props.userData.iri}</p>
        <p>obo_id:{props.userData.obo_id}</p>
      </div>
    </Card>
  );
}

const mapStateToProps = (state) => {
  const userData = getUserData(state);
  return { userData };
};
const mapDispatchToProps = { dataStore, dataDelete };

export default connect(mapStateToProps, mapDispatchToProps)(ModalComponent);
