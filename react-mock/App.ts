import { React } from './React';

const ReactComponent = () => {
    const [state1, setState1] = React.useState(1);
    const [state2, setState2] = React.useState('state2');
    console.log('rerun component', {state1, state2});
    React.useEffect(() => {
        console.log('running use effect which depends on first state')
    }, [state1]);
    React.useEffect(() => {
        console.log('running use effect which depends on second state')
    }, [state2]);
    React.useEffect(() => {
        console.log('running use effect which depends on first and second state')
    }, [state2, state1]);
    React.useEffect(() => {
        console.log('now running use effect with no dependencies')
    }, []);
    return {
        click: () => {
            console.log('click and change state1')
            setState1(state1 + 1);
        },
        changeText: (text: string) => {
            console.log('change text in state2')
            setState2(text);
         }
    };

}

const component = React.render(ReactComponent);
console.log('render is done!')
component.click();
component.changeText('text')
