import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home';
import Jobs from './components/pages/Jobs';
import Employers from './components/pages/Employers';
import SignUp from './components/pages/SignUp';
import LogIn from './components/pages/LogIn';




function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        {/* <Route path='/*'/>   */}
          <Route path='/*'  element={<Home />} />
          <Route path='/jobs'  element={<Jobs />} />
          <Route path='/employers'  element={<Employers />} />
          <Route path='/log-in'  element={<LogIn />} />
          <Route path='/sign-up'  element={<SignUp />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
