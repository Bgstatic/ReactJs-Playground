import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

 


class App extends Component {
  state={
    users:[],
    isLoading:true    
  };

  componentDidMount() {
    setTimeout(() =>
    
    {
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(can =>can.data).then(can =>
        {
          console.log(can);
          this.setState(
            {
              users:can,
              isLoading:false
            }
          );
  
        }
        
        
        )
    },2000
    
    
    )
   
  }
  
  render() {
   const{isLoading}=this.state;
    return (
      <div className={"App"}>
        <h1>Users</h1>
        {isLoading ? 'Loading...' : ''}
        {
          this.state.users.map(user =>
            <div key={user.id}> 
              {
                user.name
              }
              - @
              {
                user.username
              }
            </div>
            
            
            )
        }
      </div>
    );
  }
}

export default App;
