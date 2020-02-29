import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setActivePatient } from '../actions/patient';
import Button from './Button';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  box-sizing: border-box;
  margin: 16px 0;
  border-radius: 8px;
  width: 100%;
  box-shadow: 0px 10px 23px -10px rgba(63, 71, 111, 0.49);
`;

const Body = styled.div`
  padding: 16px 24px;

  ul {
    padding-left: 24px;
  }

  li {
    margin-bottom: 8px;
  }
`;

const Header = styled.h3`
  margin: 0;
  border-bottom: 1px solid #eee;
  padding: 16px 24px;
  text-transform: capitalize;
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
      <Header>{name.toLowerCase()}</Header>
      <Body>
        <ul>
          <li>
            <b>Name:</b> {name}
          </li>

          <li>
            <b>DOB:</b> {birthDate}
          </li>

          <li>
            <b>Gender:</b> {gender}
          </li>
        </ul>
        <Button
          onClick={() => {
            dispatch(setActivePatient(patient));
            history.push(`/patient/${id}`);
          }}
        >
          See Conditions
        </Button>
      </Body>
    </Wrapper>
  );
}
