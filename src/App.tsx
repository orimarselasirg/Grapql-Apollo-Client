import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Welcome } from './pages/Welcome'
import { CharacterList } from './pages/CharacterList'
import { CharacterDetails } from './pages/CharacterDetails'
import { About } from './pages/About'
import { ContactForm } from './pages/ContactForm'
import { TechStack } from './pages/TechStack'

function App() {

  return (
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/home' element={<CharacterList/>}/>
        <Route path='/character/:id' element={<CharacterDetails/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<ContactForm/>}/>
        <Route path='/techstack' element={<TechStack/>}/>
      </Routes>
  )
}

export default App
