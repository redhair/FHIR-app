import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setResults, setQuery } from '../actions/search';
import Patient from '../components/Patient';
import { getPatientByName } from '../api';

export default function SearchPage() {
  const dispatch = useDispatch();
  const results = useSelector(state => state.search.results);
  const query = useSelector(state => state.search.query);
  const [name, setName] = useState('');

  function handleSearch() {
    dispatch(setQuery(name));
    getPatientByName(name)
      .then(res => {
        dispatch(
          setResults(
            res.data.entry.map(entry => {
              return { ...entry.resource, name: entry.resource.name[0].given.join(' ') };
            })
          )
        );
      })
      .catch(console.error);
  }

  return (
    <div>
      <input defaultValue={query} type="text" onChange={e => setName(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      {results.length > 0 &&
        results.map(result => {
          return <Patient patient={result} />;
        })}
    </div>
  );
}
