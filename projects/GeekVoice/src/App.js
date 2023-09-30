
import './App.css';
import  {BrowserRouter , Routes , Route , Navigate} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Navigation from './Components/shared/Navigation/Navigation';
import Authenticate from './Pages/Authenticate/Authenticate';
import Activate from './Pages/Activate/Activate'
import Rooms from './Pages/Rooms/Rooms';
const isAuth = false;
const user = {
  activated : true,
}


function App() {
  return (
      <BrowserRouter>
      <Navigation/>
    <Routes>
      <Route path='/' element= {isAuth ? (<Navigate replace to={"/rooms"} />) : (<Home/>)} exact />
      <Route path='/authenticate' element={isAuth ? (<Navigate replace to={"/rooms"} />) : (<Authenticate/>)} />
      <Route  path='/activate' element={ !isAuth ? (<Navigate replace to={"/"} />):isAuth && !user.activated ?(<Activate/>):(<Navigate replace to={"/rooms"} />)}/>
      <Route path='/rooms' element={!isAuth ? (<Navigate replace to={"/"}/>) :isAuth && !user.activated ?(<Navigate replace to={"/activate"}/>) :(<Rooms/>)} />
    </Routes>
    
    </BrowserRouter>
  );
}

 





export default App;
