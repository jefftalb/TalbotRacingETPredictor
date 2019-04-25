import React from 'react';
import ReactTable from 'react-table';
import {fetch} from 'whatwg-fetch';
import 'react-table/react-table.css';

class PassTable extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      passes: [],
    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.loadPasses();
  }

  loadPasses() {
    fetch('/api/passes')
    .then(response => response.json())
    .then(json => {
      this.setState({ passes: json });
    });
  }

  handleDelete(id) {
    fetch('/api/passes', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    })
    .then(() => {
      this.loadPasses();
    });
  }

  render() {
    const { passes } = this.state;

    return (
      <ReactTable
        data={passes}
        columns={[
          {
            Header: 'Race Data',
            columns: [
              {
                Header: 'Date',
                accessor: 'timestamp',
                Cell: ({ value }) => (value ? value.toLocaleString() : ''),
              },
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
                Header: 'Full Pass?',
                accessor: 'full_pass',
                Cell: ({ value }) => (value ? 'Yes' : 'No'),
              },
              {
                Header: 'Notes?',
                accessor: 'note',
                Cell: ({ value }) => (value ? 'Yes' : 'No'),
              },
            ],
          },
          {
            Header: 'Elapsed Times',
            columns: [
              {
                Header: '60\'',
                accessor: 'et_60',
              },
              {
                Header: '330\'',
                accessor: 'et_330',
              },
              {
                Header: '660\'',
                accessor: 'et_660',
              },
              {
                Header: '1000\'',
                accessor: 'et_1000',
              },
              {
                Header: '1320\'',
                accessor: 'et_1320',
              },
            ],
          },
          {
            Header: 'Speed (MPH)',
            columns: [
              {
                Header: '660\'',
                accessor: 'mph_660',
              },
              {
                Header: '1320\'',
                accessor: 'mph_1320',
              },
            ],
          },
          {
            'Header': 'Weather',
            columns: [
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
            ],
          },
          {
            Header: 'Delete',
            accessor: 'id',
            Cell: ({ value }) => (
              <a
                href="#delete"
                onClick={() => {
                  this.handleDelete(value);
                }}
              >
                Delete Pass
              </a>
            ),
          }
        ]}
      />
    );
  }
}

export default PassTable;
