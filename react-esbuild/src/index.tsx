import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
class List extends Component<{items: { id: string; text: string; }[]}, any> {
    static getDerivedStateFromProps() {

    }
    shouldComponentUpdate(nextProps: Readonly<{ items: { id: string; text: string }[] }>, nextState: Readonly<any>, nextContext: any): boolean {
        return nextProps !== this.props;
    }

    render() {
        console.log('render');
        return (
            <>
                {this.props.items.map((item, key) => {
                    return (
                        <div key={item.id}>{item.text}</div>
                    );
                })}
            </>
        );
    }
    getSnapshotBeforeUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>): any {
       console.log('get snapshot');
    }
    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any) {

    }
}
const App = () => {
    console.log('hey');
    const [items, setItems] = useState<any[]>([]);
    const [state, setToggle] = useState(false);
    const handleClick = () => {
        // setToggle((t) => !t);
        setItems((items) => {
            return [
                ...items,
                {
                    text: `item #${Date.now()}`,
                    id: ''
                }
            ]
        })
    }
    return (
        <div>foo {state ? 'yes' : 'no'}
            <button onClick={handleClick}>Add</button>
            <List items={items}/>
        </div>
    );
}
const root = (ReactDOM as any).createRoot(document.getElementById('react-root'))
root.render(<App/>)
