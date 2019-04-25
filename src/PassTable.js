import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class PassTable extends React.PureComponent {
  render() {
    return (
      <ReactTable
        data={[]}
        columns={[
          {
            Header: 'Track',
            accessor: 'track',
          },
          {
            Header: 'Lane',
            accessor: 'lane',
          },
          {
            Header: 'R/T',
            accessor: 'reaction_time',
          },
          {
            Header: 'ET 60',
            accessor: 'et_60',
          },
          {
            Header: 'ET 330',
            accessor: 'et_330',
          },
          {
            Header: 'ET 660',
            accessor: 'et_660',
          },
          {
            Header: 'ET 1000',
            accessor: 'et_1000',
          },
          {
            Header: 'ET 1320',
            accessor: 'et_1320',
          },
          {
            Header: 'MPH 660',
            accessor: 'mph_660',
          },
          {
            Header: 'MPH 1320',
            accessor: 'mph_1320',
          },
          {
            Header: 'Full Pass?',
            accessor: 'full_pass',
          },
          {
            Header: 'Temperature',
            accessor: 'temperature',
          },
          {
            Header: 'Density Altitude',
            accessor: 'density_altitute',
          },
          {
            Header: 'Pressure',
            accessor: 'barametric_pressure',
          },
          {
            Header: 'Wind Speed',
            accessor: 'wind_speed',
          },
          {
            Header: 'Wind Direction',
            accessor: 'wind_direction',
          },
          {
            Header: 'Date',
            accessor: 'timestamp',
            Cell: ({ value }) => (value ? value.toLocaleString() : ''),
          },
          {
            Header: 'Notes?',
            accessor: 'note',
            Cell: ({ value }) => (value ? 'Yes' : 'No'),
          },
        ]}
      />
    );
  }
}

export default PassTable;
