import { LaundryApp } from "./component/LaundryApp";
import {Routes, Route} from 'react-router-dom';
import { Login } from "./component/login/Login";
import { Registration } from "./component/login/Registration";
import { MainView } from "./component/mainView/MainView";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element= {<LaundryApp />}  />
        <Route path='/login' element= {<Login/>}  />
        <Route path='/registration' element= {<Registration/>}  />
        <Route path='/main' element= {<MainView/>}  />
        {/* have to do protected route MainView
        <Route element = {<RequiredAuth />}
            <Route path='/main' element= {<MainView/>}  />
        </ Route>
        */}

      </Routes>  
    </div>
  );
}
export default App;