import logo from './logo.svg';
import './App.css';
import {Button} from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Chat from './pages/Chat';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={ <Chat/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
