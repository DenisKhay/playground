import React, { MutableRefObject, useLayoutEffect, useMemo, useRef, useState } from 'react';
import './App.scss';
import { randAbbreviation, randAddress, randCompanyName, randCountry, randFirstName, randLastName, randWord } from '@ngneat/falso';
import { VariableSizeGrid as Grid } from 'react-window';
import Table from 'rc-table';
import classNames from 'classnames';
interface DataType {
    name: string;
    lastName: string;
    company: string;
    address: string;
    country: string;
    code: string;
}
const data: DataType[] = [...Array(10000)].map(() => {
    return {
        name: randFirstName(),
        lastName: randLastName(),
        company: randCompanyName(),
        address: randAddress().toString(),
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
const bindRef = (el: MutableRefObject<Grid | null>) => {
    const obj = {};
    Object.defineProperty(obj, 'scrollLeft', {
        get: () => (el.current?.state as any)?.scrollLeft || null,
        set: (scrollLeft: number) => el.current?.scrollTo({ scrollLeft }),
    });
    return obj;
}
function App() {

    const gridRef = useRef<Grid | null>(null);
    const boundScrollLeftHandler = useMemo(() => bindRef(gridRef), []);
    const [gridBodyHeight, setGridBodyHeight] = useState(300);
    const [gridWidth, setGridWidth] = useState(columns.reduce((acc, {width}) => acc + width,0));
    const renderVirtualList = (rawData: object[], { scrollbarSize, ref, onScroll }: any) => {
        ref.current = boundScrollLeftHandler;

        return (
            <Grid
                ref={gridRef}
                className="virtual-grid"
                columnCount={columns.length}
                columnWidth={index => {
                    const { width } = columns[index];
                    return index === columns.length - 1 ? width - scrollbarSize - 1 : width;
                }}
                height={gridBodyHeight}
                rowCount={rawData.length}
                rowHeight={() => 50}
                width={gridWidth}
                onScroll={({ scrollLeft }) => {
                    onScroll({ scrollLeft });
                }}
            >
                {({ columnIndex, rowIndex, style }) => (
                    <div
                        className={classNames('virtual-cell', {
                            'virtual-cell-last': columnIndex === columns.length - 1,
                        })}
                        style={style}
                    >
                        r{rowIndex}, c{columnIndex}
                    </div>
                )}
            </Grid>
        );
    };
  useLayoutEffect(() => {
      const table = document.getElementsByClassName('container-rc-table')[0];
      const tableHeader = document.getElementsByClassName('rc-table-header')[0];
      console.log('heeey', table.clientHeight, tableHeader.clientHeight);
      setGridBodyHeight(table.clientHeight - tableHeader.clientHeight);
  }, [])
  return (
    <div className="App">
      <h2>Rc-table virtual list testing</h2>
        <Table
            className={'container-rc-table'}
            columns={columns}
            data={data}
            scroll={{ y: 0, x: gridWidth }}
            components={{
                body: renderVirtualList as any
            }}
        />
    </div>
  );
}

export default App;
