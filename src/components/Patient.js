import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setActivePatient } from '../actions/patient';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
  width: 50%;
  box-shadow: 0px 13px 38px -15px rgba(24, 38, 107, 0.49);
`;

Patient.propTypes = {
  patient: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    birthDate: PropTypes.string,
    gender: PropTypes.string
  }).isRequired
};

export default function Patient({ patient }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id, name, birthDate, gender } = patient;

  return (
    <Wrapper>
      <p>Name: {name}</p>
      <p>DOB: {birthDate}</p>
      <p>Gender: {gender}</p>
      <button
        onClick={() => {
          dispatch(setActivePatient(patient));
          history.push(`/patient/${id}`);
        }}
      >
        See Conditions
      </button>
    </Wrapper>
  );
}
