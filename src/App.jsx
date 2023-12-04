
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Detail from './pages/Detail'

function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/article/:date' element={<Detail />}/>
      </Routes>
    </>
  )
}

export default App
