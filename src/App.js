import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import VideoPage from "./components/VideoPage";

import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/login" element={<HomePage />}></Route>
      <Route path="/video" element={<VideoPage />}></Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
