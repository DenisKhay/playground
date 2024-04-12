
const root = ReactDOM.createRoot(document.getElementById('react-root'))
const {useEffect, useLayoutEffect, useState, useRef} = React;

const fetchData = (url) => {
    return new Promise((resolve) => {
        window.setTimeout(() => {
            resolve({url, data: 'data'});
        }, 5000);
    })
}


const ReactApp = () => {
    console.log('run react app!')
    const [state, setState] = useState({  });
    const [id, setId] = useState(0);
    const ref = useRef(id);
    ref.current = id;
    useEffect(() => {
        const myId = id;
        fetchData(`https://example.com/dome/${id}`)
            .then((d) => {
                if(myId === ref.current)
                setState(d.url);
            });
    }, [id]);


    console.log(state)
    return React.createElement('div', null, React.createElement('button', {onClick: () => {
        setId(prev => prev + 1);
        }, type: 'button'}, 'Change'))
}

root.render(React.createElement(ReactApp, null, null));
