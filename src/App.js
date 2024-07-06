import logo from './logo.svg';
import './App.css';
import Calculator from './Calculator';
import TextInput from './TextInput';
import CheckBox from './CheckBox';
import BioData from './BioData';

function App() {
  
  
  return (
    <div className="App">
      <header className="App-header">
      <h2>Welcome to Satishs' React Tutorial!</h2>
        <img src={logo} className="App-logo" alt="logo" />

        {/* <p>Sum of {a} and {b} is {addition(a,b)}</p>
        <p>Substraction of {a} and {b} is {substruction(a,b)}</p> */}

        {/* <p>Calculator Components here...</p>
        <Calculator /> */}
        {/* <p>Text Input Component</p> */}
        {/* <TextInput />
        <CheckBox /> */}

        <BioData />
        
       
      </header>
    </div>
  );
}

export default App;
