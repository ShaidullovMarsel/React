import { Component } from 'react';
import './App.css';

const Header = () => {
  return <h2>Hello World</h2>
}

/* const Field = () => {
  const holder = 'enter here';
  const styledField = {
	width: '300px'
  };
  return <input 
  			placeholder={holder}
			type="text"
			style={styledField} />
} */

class Field extends Component {
	render() {
		const holder = 'enter here';
		const styledField = {
		  width: '300px'
		};

		return <input 
		placeholder={holder}
	  	type="text"
	  	style={styledField} />
	}
}

function Btn() {
  const text = 'Log in';
  const logged = true;
  return <button>{logged ? 'Okay' : text}</button>
}

function App() {
  return (
    <div className="App">
      <Header />
      <Field />
      <Btn />
    </div>
  );
}

export {Header};
export default App;
