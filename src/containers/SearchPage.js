import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setResults, setQuery } from '../actions/search';
import { setLoading, setInit } from '../actions/loading';
import Patient from '../components/Patient';
import Button from '../components/Button';
import Input from '../components/Input';

import { Container, Row, Column } from '../components/Grid';
import { getPatientByName } from '../api';

export default function SearchPage() {
  const dispatch = useDispatch();
  const init = useSelector(state => state.loading.init);
  const loading = useSelector(state => state.loading.loading);
  const results = useSelector(state => state.search.results);
  const query = useSelector(state => state.search.query);
  const [name, setName] = useState(query || '');

  function handleSearch(e) {
    e.preventDefault();
    if (!init) dispatch(setInit(true));
    dispatch(setLoading(true));
    dispatch(setQuery(name));
    getPatientByName(name)
      .then(res => {
        dispatch(
          setResults(
            res.data.entry
              ? res.data.entry.map(entry => {
                  return { ...entry.resource, name: entry.resource.name[0].given.join(' ') };
                })
              : []
          )
        );
        dispatch(setLoading(false));
      })
      .catch(console.error);
  }

  return (
    <Container>
      <Row justify="center">
        <form onSubmit={handleSearch}>
          <Input
            style={{ marginRight: '12px' }}
            placeholder="Search by name"
            defaultValue={query}
            type="text"
            onChange={e => setName(e.target.value)}
          />
          <Button type="submit">Search</Button>
        </form>
      </Row>

      <Row style={{ marginTop: '48px' }} justify="flex-start" canWrap>
        {!init ? (
          <h1>Please enter a name to search.</h1>
        ) : loading ? (
          <h1>Loading...</h1>
        ) : results.length > 0 ? (
          results.map((result, i) => {
            return (
              <Column key={i} xs={6} align="flex-start">
                <Patient patient={result} />
              </Column>
            );
          })
        ) : (
          <h1>No Results Found</h1>
        )}
      </Row>
    </Container>
  );
}
