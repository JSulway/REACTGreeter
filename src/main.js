import React from 'react';
import ReactDOM from 'react-dom';

// The effect of the virtual dom is that only the html element that requires updating is refreshed. React keeps track of an internal DOM tree
// which it compares against the actual DOM tree and keeps updated when required.

// Class Header
class Header extends React.Component {
		render(){
			return <h1 style={{color: 'red'}}>{this.props.children}</h1>;
		}
}

// Class Greeter
class Greeter extends React.Component{
	
		// Class constructor
		constructor(props){
				super(props);
				this.state = { name: 'Bruce Wayne' };
		}
	
		// JSX render method of class
		render(){
			return (
				<div>
					// make sure to output this.state.name since the name is now control by state instead of props
					<Header>Hello {this.state.name}</Header>
					// Adding a ref with a value of name. Special prop in react that allows us 
					// to access the element in different methods on our component
					<input type='text' ref='name' />
					<button onClick={this.handleGreet.bind(this)}>Greet!</button>
				</div>
			);
		}
		
		// Handler method to bind to onClick of button
		handleGreet() {
			this.setState({ name: this.refs.name.value });
		}
}		

const GreeterFactory = React.createFactory(App);

class App extends React.Component {
    render(){
        return <Greeter name="Bruce Wayne" />;
    }
}

ReactDOM.render(<App />, document.getElementById('app'));