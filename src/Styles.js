import logo from './logo.svg';
import styles from './App.module.css';
import  Test from "./TestComponenet.js";
import { Title } from './StyledComponenetsExample';

function Styles(){
return (
    <div className={styles.App}>
    <Title>{process.env.NODE_ENV} </Title>
    <Title theme="dark">{process.env.NODE_ENV} </Title>
    <h3>{process.env.NODE_ENV} </h3>
    {process.env.NODE_ENV==='production' && (
    <>     
        <p> {process.env.REACT_APP_API_URL}  </p>   
    </>
    )}
    <Test/>
    <img src={logo} className="App-logo" alt="logo" />
    </div>
)}

export default Styles