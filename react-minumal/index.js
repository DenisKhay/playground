const root = ReactDOM.createRoot(document.getElementById('react-root'))
const {useEffect, useLayoutEffect} = React;

const ReactApp = () => {

    console.log('run react app!')

    useEffect(() => {
        console.log('run useEffect');
    }, []);

    useLayoutEffect(() => {
        console.log('run useLayoutEffect');
    }, []);

    console.log('render did happen')
    return React.createElement('div', null, 'Hello am here')
}

root.render(React.createElement(ReactApp, null, null));
