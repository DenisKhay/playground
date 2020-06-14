import React, { Component, useRef, Fragment, useState, useCallback } from 'react';
import './App.scss';

function App() {

    const ref = useRef<any>(null);
    const [st, setSt] = useState(false);
    const cb = useCallback((refin: any) => {console.log('ref binded ->', refin); ref.current = refin}, [])
  return (
      <Fragment>
        <div className="App">
          <HereWeGo refForSomething={cb}/>
        </div>
        <button onClick={() => {ref.current?.focus?.(); setSt((st) => !st)}}>Something</button>
      </Fragment>

  );
}

export default App;


class HereWeGo extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            foo: false
        };
    }
  sayHello() {
    console.log('hello!');
  }
  render() {
      return (
          <Fragment>
              {this.state.foo &&
              <input type={'text'} ref={this.props.refForSomething} />
              }
              <button onClick={() => this.setState(({ foo }: any) => ({foo: !foo}))}>{this.state.foo ? 'hide': 'show'}</button>
          </Fragment>
      )
  }
}