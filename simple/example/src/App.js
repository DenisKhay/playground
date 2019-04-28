import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';
import 'spectre.css/dist/spectre.min.css'
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

    handleDelete(indx) {
        const items = [].concat(this.state.items);
        items.splice(indx, 1);
        this.setState({
            items
        })
    }

    render(){
        const { items } = this.state;
        return (
            <div className="App">
                <List items={items} onDelete={(i)=>this.handleDelete(i)}></List>
                <Form onSubmit={(results)=>this.handleSubmit(results)}></Form>
            </div>
        );
    }

}

function List({items, onDelete}) {

    const rows = items.map((v, i)=>{

        return (
            <tr key={i}>
                <td>{v.name}</td>
                <td>{v.job}</td>
               <td><button className={'btn'} onClick={()=>onDelete(i)}>Delete</button></td>
            </tr>
        )
    })

    if(!rows.length) {
        return null
    }

    return (
        <table className={'table'}>
            <thead>
            <tr>
                <th>Name</th>
                <th>Genre</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>);
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
            this.setState(this.initState);
        }

    }

    render() {
        const {job, name} = this.state;

        return (
            <form className="form-horizontal">
                <div className="form-group">
                    <div><input type="text" placeholder={'Name'} className={'form-input'} value={name} name={'name'} onChange={(e)=> this.handleChange(e)}/></div>
                    <div><input type="text" placeholder={'Job'} className={'form-input'} value={job} name={'job'} onChange={(e) => this.handleChange(e)}/></div>
                    <div><input type="button" className={'btn'} onClick={() => this.handleSubmit()} value={'Submit!'}/></div>
                </div>
            </form>

        );
    }
}

export default App;
