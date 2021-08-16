import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button1 from './Button1';

function App() {

  
  const getData = ()=> {
  fetch('http://localhost:8080/view')
  .then(response => response.json())
  .then(data => setAccounts(data))
  console.log("I got called :)")
  };


  const [accounts, setAccounts] = useState<any>([])
  useEffect(()=> {getData()},[]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Account ID</th>
            <th>Account Holder</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((element:any) => 
            <tr key={element.id}>
              <td>{element.id}</td>
              <td>{element.fullName}</td>
              <td>${element.balance}</td>
            </tr> 
          )}
        </tbody>
      </table>
      <br />
      <button onClick={getData}>click for them updates</button>
    </div>
  );
}

export default App;
