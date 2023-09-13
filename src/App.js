import logo from './logo.svg';
import './App.css';

function App() {
  return (
   
    <div className="App">
    <h3>{process.env.NODE_ENV} </h3>
    {process.env.NODE_ENV==='production' && (
      <>     
     <p> {process.env.REACT_APP_API_URL}  </p>   
     </>
    )}
    <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
