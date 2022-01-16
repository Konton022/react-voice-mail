import React from 'react';
import Header from './components/Header';
import './App.css';

import Messages from './components/Messages';
import Footer from './components/Footer';

function App() {
    return (
        <div className='App'>
            <Header />
            <Messages />
            <Footer />
        </div>
    );
}

export default App;
