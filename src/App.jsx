import { Navigate, Outlet } from 'react-router-dom'
import Nav from './components/Nav'
import './App.css'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <>
    <Nav />
    <Outlet />
    <div>
      <h1>Footer</h1>
    </div>
    </>
  )
}

export default App
