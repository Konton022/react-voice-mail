import React, {useEffect} from 'react';

import './App.css';
import { xmlData } from './xml_data';


function App() {
  //let convert = xml2json;

  useEffect(() => {
    let convert = require('xml-js');
    let result = convert.xml2js(xmlData, {compact: true, spaces: 4})
    console.log(result);
  }, []);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
