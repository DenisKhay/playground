import React, { MutableRefObject, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import './App.scss';
import { randAbbreviation, randAddress, randCompanyName, randCountry, randFirstName, randLastName, randNumber, randWord } from '@ngneat/falso';
import { Table } from './components/Table';

interface DataType {
    name: string;
    lastName: string;
    company: string;
    address: string;
    country: string;
    code: string;
    key: any;
}
const data: DataType[] = [...Array(1000)].map(() => {
    return {
        key: randNumber({length: 10}),
        name: randFirstName(),
        lastName: randLastName(),
        company: randCompanyName(),
        address: randAddress().city,
        country: randCountry(),
        code: randAbbreviation()
    }
})


const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: 140,
        sticky: true
    },
    {
        title: 'Last Name',
        dataIndex: 'lastName',
        key: 'lastName',
        width: 140,
    },
    {
        title: 'Company',
        dataIndex: 'company',
        key: 'company',
        width: 140,
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        width: 140,
    },
    {
        title: 'Country',
        dataIndex: 'country',
        key: 'country',
        width: 140,
    },
    {
        title: 'Code',
        dataIndex: 'code',
        key: 'code',
        width: 140,
    }
]

function App() {

  return (
    <div className="App">
      <h2>Rc-table virtual list testing</h2>
        <Table

        />
    </div>
  );
}

export default App;
