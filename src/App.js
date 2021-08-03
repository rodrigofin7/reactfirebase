import React from 'react'
import Links from './components/links'
import LinkForms from './components/linkform'


function App() {
  return (
    <div className="container p4">
      <div className="row">
         <Links/>
         <LinkForms/>
      </div>
    </div>
  );
}

export default App;
