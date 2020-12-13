import React from "react";
import logo from "./logo.png";
import "./App.css";
import { Stack } from "./Stack";

function App() {
  /* below contains Stack ADT */
  // create the Stack
  const stack = new Stack();

  console.log('after initialization');
  stack.print();

  // push data  
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  stack.push(5);

  console.log('after push');
  stack.print();

  // pop
  stack.pop();

  console.log('after pop');
  stack.print();

  // top
  console.log('top '+ stack.top());
  stack.print();

  // delete
  stack.delete()
  console.log('delete');
  stack.print();
  



  /* ------------------------------------- */

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{
          color: 'black',
          marginTop: '100px'
        }}>Check your console for Stack ADT using Linked List... visit <a href="https://www.gabruism.com">Gabruism</a></h1>
      </header>
    </div>
  );
}

export default App;
