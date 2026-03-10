import {Routes, Route} from 'react-router-dom'; 

import Home from './pages/home';  
import Exemplo01 from './pages/exemplos/ex-01'; 



function App() {

  return (
      <Routes> 
        <Route path = '/' element = {<Home />}/>
        <Route path = '/exemplo/1' element  = {<Exemplo01 />}/>
      
      </Routes>
  )
}

export default App
