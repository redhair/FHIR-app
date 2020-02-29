import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Table from '../components/Table';
import { Container } from '../components/Grid';
import { setLoading } from '../actions/loading';

import { getConditionsById } from '../api';

function PatientInfo(props) {
  const dispatch = useDispatch();
  const patient = useSelector(state => state.patient);
  const loading = useSelector(state => state.loading);
  const { patient_id } = useParams();
  const [conditions, setConditions] = useState([]);

  useEffect(() => {
    dispatch(setLoading(true));
    getConditionsById(patient_id)
      .then(res => {
        setConditions(
          res.data.entry
            ? res.data.entry.map(entry => {
                return {
                  ...entry.resource,
                  name: entry.resource.code.text
                };
              })
            : []
        );
        dispatch(setLoading(false));
      })
      .catch(console.error);
  }, [dispatch, patient_id]);

  return (
    <Container>
      <h1>Conditions for {patient.name}</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : conditions.length > 0 ? (
        <Table
          columns={[
            {
              Header: 'Condition Name',
              accessor: 'name'
            },
            {
              Header: 'Date Recorded',
              accessor: 'dateRecorded'
            },
            {
              Header: 'More Information',
              accessor: 'info',
              Cell: e => {
                return (
                  <a rel="noopener noreferrer" target="_blank" href={e.row.original.info}>
                    {e.row.original.info}
                  </a>
                );
              }
            }
          ]}
          data={conditions.map(condition => {
            return {
              name: condition.name,
              dateRecorded: condition.dateRecorded,
              info: 'https://www.ncbi.nlm.nih.gov/pubmed/?term=' + condition.name
            };
          })}
        />
      ) : (
        <h1>No Information found</h1>
      )}
    </Container>
  );
}

export default PatientInfo;
