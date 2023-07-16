import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VideoCallPage from './Components/VideoPlayer/VideoCallPage';

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/travel-safe' element={<Home />} />
            <Route path='/videocall' element={<VideoCallPage />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
