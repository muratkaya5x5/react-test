//import { createElement } from "react";

function Button(props) {
  return <button>{props.text}</button>
 }
 function JsxDers4() {
   const todos = ['todo1', 'todo2', 'todo3']
   const style={color: 'red', backgroundColor: 'yellow'}
   const outAlertFunction = ()=> {alert('outAlert')}
   const numara=5
 
 
 
 
   //const hMurat = createElement('h1', null, 'h murat')
   //const ulMurat = createElement('ul', null, todos.map(todo=>createElement('li',null,todo)))
 //  const button = createElement(Button, {
   //  text: 'Buton Text'
   //},null)
 
   return (   
     <main id="main" className="test">
     <h1 style={style}>Murat</h1>
     <h1 style={{color: 'red', backgroundColor: 'yellow'}}>KAYA</h1>
     <label htmlFor="search" tabIndex="2">Ara</label>
     <input type="araInline" id="search" tabIndex="1" onClick={()=>alert('inline')}></input>
     <input type="araOut" id="searchOut" tabIndex="1" onClick={outAlertFunction}></input>
  <Button text="merhaba btn"></Button>
      <ul>
      {numara+4}
       {todos.map((todo,index)=>(
         <li key={index}>
           {todo}
         </li>))
       }
      </ul>
     </main>
   );
 }
 
 export default JsxDers4;
  