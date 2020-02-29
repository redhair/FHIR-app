import React from 'react';
import { render } from '@testing-library/react';
import Table from './Table';

describe('Table', () => {
  it('works', () => {
    const columns = [
      {
        Header: 'Conditions',
        columns: [
          {
            Header: 'Condition Name',
            accessor: 'name'
          },
          {
            Header: 'Date Recorded',
            accessor: 'dateRecorded'
          }
        ]
      }
    ];
    const data = [
      {
        name: 'test',
        dateRecorded: 'test'
      }
    ];
    render(<Table columns={columns} data={data} />);
  });
});
