import React from 'react';
import styled from 'styled-components';
import { useTable, useSortBy } from 'react-table';

const Wrapper = styled.table`
  border-collapse: collapse;
  width: 100%;
`;
const Row = styled.tr`
  &:nth-child(even) {
    background: #f8fafb;
  }

  &:nth-child(odd) {
    background: white;
  }
`;
const Head = styled.thead`
  & ${Row} {
    background: #f8fafb;
  }
`;
const Header = styled.th`
  height: 56px;
  padding: 0px 20px;
  text-align: left;
`;
const Body = styled.tbody``;

const Column = styled.td`
  padding: 20px;
  color: #505050;
`;

function Table({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data
    },
    useSortBy
  );

  const firstPageRows = rows.slice(0, 20);

  return (
    <>
      <Wrapper {...getTableProps()}>
        <Head>
          {headerGroups.map(headerGroup => (
            <Row {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <Header {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
                </Header>
              ))}
            </Row>
          ))}
        </Head>
        <Body {...getTableBodyProps()}>
          {firstPageRows.map((row, i) => {
            prepareRow(row);
            return (
              <Row {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <Column {...cell.getCellProps()}>{cell.render('Cell')}</Column>;
                })}
              </Row>
            );
          })}
        </Body>
      </Wrapper>
    </>
  );
}

export default Table;
