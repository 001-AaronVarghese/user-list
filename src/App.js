import logo from './logo.svg';
import './App.css';
import AddPage from './component/AddPage';
import SearchPage from './component/SearchPage';
import ViewPage from './component/ViewPage';
import { BrowserRouter,Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddPage/>}/>
      <Route path="/searchpg" element={<SearchPage/>}/>
      <Route path="/viewpg" element={<ViewPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
