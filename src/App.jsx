import React, {useEffect} from 'react';
import xml-js from 'xm'
import './App.css';
import { xmlData } from './xml_data';

function App() {

  useEffect(() => {
    console.log(xmlData);
    
    
  }, []);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
