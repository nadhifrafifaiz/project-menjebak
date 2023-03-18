import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import InfiniteLoop from './pages/InfiniteLoop';
import RenderList from './pages/RenderList';
function App() {
  return (
    <Routes>
      <Route path='/' element={<InfiniteLoop />} />
      <Route path='/list' element={<RenderList />} />
    </Routes>
  )
}

export default App;
