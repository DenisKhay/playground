import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            items: []
        }
    }

    handleSubmit(results){
        this.setState({
            items: [...this.state.items, results]
        });
    }

    render(){
        const { items } = this.state;
        return (
            <div className="App">
                <List items={items}></List>
                <Form onSubmit={(results)=>this.handleSubmit(results)}></Form>
            </div>
        );
    }

}

function List({items, onDelete}) {

    const rows = items.map(v=>{
        return <div><span>{v.name}</span> <span>{v.job}</span> <button></button></div>
    })

    return (
        <div>
        </div>);
}

class Form extends Component {

    constructor(props) {
        super(props);
        this.initState = {
            name: '',
            job: ''
        };

        this.state = this.initState;

    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit() {
        console.log('submit!', this.state);

        if(this.state.name && this.state.job) {
            this.props.onSubmit(this.state);
        }

    }

    render() {
        const {job, name} = this.state;

        return (
            <form>
                <input type="text" value={name} name={'name'} onChange={(e)=> this.handleChange(e)}/>
                <input type="text" value={job} name={'job'} onChange={(e) => this.handleChange(e)}/>
                <input type="button" onClick={() => this.handleSubmit()} value={'Submit!'}/>
            </form>

        );
    }
}

export default App;
