import React, { useState, useEffect } from 'react';
import './Components.css';
import Card from '@material-ui/core/Card';
import { getUserData } from '../../redux/selectors';
import { dataStore, dataDelete } from '../../redux/actionsFile';
import { connect } from 'react-redux';
import axios from 'axios';

function Data(props) {
  const renderModal = (data) => {
    if (!!data.id) {
    const id = data.id.replace(':', '_');
    axios
      .get(
        `https://www.ebi.ac.uk/ols/api/ontologies/uberon/terms?iri=http://purl.obolibrary.org/obo/${id}`
      )
      .then((response) => {
        let obj = {};
        console.log(response.data);
        obj.iri = response.data._embedded.terms[0].iri;
        obj.description = response.data._embedded.terms[0].description[0];
        obj.obo_id = response.data._embedded.terms[0].obo_id;
        obj.name = data.name;
        console.log(obj);
        props.dataStore(obj);
      });
    props.handleOpen();
    }
    else{
        alert("Error, No id found!");
    }
  };
  return (
    <Card
      className="data-container"
      variant="outlined"
      onClick={() => {
        renderModal(props.data);
      }}
    >
      <div>Name: {props.data.name} </div>
      <div>Id: {props.data.id}</div>
    </Card>
  );
}

const mapStateToProps = (state) => {
  const userData = getUserData(state);
  return { userData };
};
const mapDispatchToProps = { dataStore, dataDelete };

export default connect(mapStateToProps, mapDispatchToProps)(Data);
