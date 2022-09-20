import 'antd/dist/antd.min.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './pages/login/login'
import Register from './pages/register/register'
import Home from './pages/home/Home';
import {routes} from './Global/routes'
import CrudOperation from './pages/crud/CrudOperation';

function App() {
  return (
   <Router>
    <Routes>
      <Route path={routes.login.path} element={<Login/>}></Route>
      <Route path={routes.register.path} element={<Register/>}></Route>
      <Route path={routes.home.path} element={<Home/>}></Route>
      <Route path={routes.crud.path} element={<CrudOperation/>}></Route>
    </Routes>
   </Router>
  );
}

export default App;
