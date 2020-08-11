import React from 'react';
import Comment from './Comment';
import Card from './Card';

const App = () => {
  return (
    <div className="ui comments" style = {{

      paddingTop : '95px',
      paddingLeft : "55px" 
    }}>

      <Card>
        <Comment name="Bilgehan Geçici" day="2" stars="5" />
      </Card>

      <Card>
        <Comment name="Steve Caroll" day="5" stars="4" />
      </Card>

    </div>
  )
}

export default App;