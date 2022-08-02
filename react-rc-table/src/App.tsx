import React, { MutableRefObject, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import './App.scss';
import { randAbbreviation, randAddress, randCompanyName, randCountry, randFirstName, randLastName, randNumber, randWord } from '@ngneat/falso';
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
const data: DataType[] = [...Array(1000)].map(() => {
    return {
        key: randNumber({length: 10}),
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

const useScroll = (gridRef: any) => {
    const [scroll, setScroll] = useState({x: 0, y: 0})
    useLayoutEffect(() => {

        const scrollHandler = (e: any) => {
             setScroll((s) => {
                return {
                    x: e.target.scrollLeft,
                    y: e.target.scrollTop,
                }
            })
        }
        const grid = document.getElementsByClassName('virtual-grid')[0]
            grid.addEventListener('scroll', scrollHandler);
        return () => grid.removeEventListener('scroll', scrollHandler)
    }, [])
    return scroll;
}
const findNearestIndexTo = (target: number, iterable: {length: number; [key: number]: unknown}, selector: any) => {

    if(iterable.length === 0) {
        return null;
    }
    if(iterable.length === 1) {
        return 0;
    }
    let lookupSpan = [0, iterable.length - 1];
    while((lookupSpan[1] - lookupSpan[0]) > 1) {
        const pointerIndex = Math.floor((lookupSpan[1] - lookupSpan[0]) / 2) + lookupSpan[0];
        const value = selector(iterable[pointerIndex]);
        if(value === target) {
            return pointerIndex;
        } else if (value > target) {
            lookupSpan = [lookupSpan[0], pointerIndex];
        } else {
            lookupSpan = [pointerIndex, lookupSpan[1]];
        }
    }
    const [start, end] = lookupSpan;
    const value1 = target - selector(iterable[start]);
    const value2 = selector(iterable[end]) - target;
    return value1 > value2 ? end : start;
}

const findFirstAndLast = (list: NodeList, scrollTop: number, containerHeight: number): [top: number | null, bottom: number | null] => {
    const topTarget = scrollTop;
    const bottomTarget = scrollTop + containerHeight;
    const nearestIndexTop = findNearestIndexTo(topTarget, list, (el: HTMLElement) => el.offsetTop);
    const nearestIndexBottom = findNearestIndexTo(bottomTarget, list, (el: HTMLElement) => el.offsetTop);
    return [nearestIndexTop, nearestIndexBottom];
}

function App() {
  const tableRef = useRef(null);
  const [span, setSpan] = useState([0, 99])
  const internalData = useMemo(() => data.slice(span[0], span[1]), [span])

  useEffect(() => {
      const outerTableBody = document.getElementsByClassName('rc-table-body')[0];
      const innerTableBody = document.getElementsByClassName('rc-table-tbody')[0];
      let id: number;
      let scrollTop = outerTableBody.scrollTop;

      const listenerCallback = () => {
          cancelAnimationFrame(id);
          id = requestAnimationFrame(() => {
              const [topNearest, bottomNearest] = findFirstAndLast(innerTableBody.childNodes, outerTableBody.scrollTop, outerTableBody.clientHeight)
              const direction = outerTableBody.scrollTop < scrollTop ? 'up' : 'down';
              scrollTop = outerTableBody.scrollTop;
              console.log('run raf')
              if(direction === 'down') {
                  setSpan((span) => {
                      if((bottomNearest! + 5) > span[1]) {
                          console.log('set span')
                          return [
                              span[0],
                              span[1] + 10
                          ]
                      }
                      return span;
                  })
              } else {

              }
          })
      }
      outerTableBody.addEventListener('scroll', listenerCallback);
      return () => outerTableBody.removeEventListener('scroll', listenerCallback);
  }, []);
  console.log('rerender!')
  return (
    <div className="App">
      <h2>Rc-table virtual list testing</h2>
        <Table
            className={'container-rc-table'}
            columns={columns}
            data={internalData}
            sticky
            scroll={{y: 700}}
        />
    </div>
  );
}

export default App;
