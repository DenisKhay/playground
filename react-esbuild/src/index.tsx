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

class AppComp extends Component<any, any> {
    state = {
        one: 1,
        two: 2,
        three: 3,
    }
    constructor(props: any) {
        super(props);
        console.log('constructor!');
    }
    UNSAFE_componentWillMount() {
        console.log('componentWillMount')
    }
    UNSAFE_componentWillReceiveProps(nextProps: Readonly<any>, nextContext: any) {
        console.log('componentWillReceiveProps');
    }
    UNSAFE_componentWillUpdate(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any) {
        console.log('componentWillUpdate');
    }

    static getDerivedStateFromProps() {
        console.log('get derived state from props');
        return null;
    }
    shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): boolean {
        console.log('should component update');
        return true;
    }

    render() {
        console.log(JSON.parse(JSON.stringify(this.state)), 'render');
        return (
            <>Whoa!</>
        )
    }
    getSnapshotBeforeUpdate(prevProps: Readonly<any>, prevState: Readonly<any>): any {
        console.log('get snapshot before update');
        return null;
    }
    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        console.log('componentDidUpdate')
    }

    componentDidMount() {
        console.log('component did mount');
        this.setState({three: 2});
    }
}

/*
 * Добавить метод для работы с массивами котрый будет возвращать только
 * те значения которые в массиве являются уникальными
 * (то есть встречаются всего один раз) не меняя последовательность чисел
 * [10, 5, 6, 10, 6, 7, 2].findUnique() // [5, 7, 2]
 */
//
// Array.prototype.findUnique = function() {
//     return this.filter((item, i, a) => {
//         return a.lastIndexOf(item) === i && a.indexOf(item) === i;
//     });
// }
//
// console.log([10, 5, 6, 10, 6, 7, 2].findUnique(), " equals [5, 7, 2]")

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
            <AppComp/>
        </div>
    );
}
const root = (ReactDOM as any).createRoot(document.getElementById('react-root'))
root.render(<App/>)
