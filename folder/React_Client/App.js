import { Routes, Route} from 'react-router-dom';
import './App.css';
import Home   from  './Home'
import About   from  './About'
import Contact  from  './Contact'
import Navbar   from  './Navbar'
import Departments   from  './Departments'
function App =()=>{ 
 return (
   <>      
<Navbar />   
 <Routes>       
 <Route path='/' element={<Home />} />       
   <Route path='About' element={<About />} />          
 <Route path='Contact' element={<Contact />} />  
 <Route path='Departments'  element={<Departments /> } />    
        </Routes>   
  </>  
  )
  }
export default App;


