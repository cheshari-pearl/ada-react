import Login from "./login";
import Users from "./Users";
import { Routes,Route, Link } from "react-router-dom";


export const Introduction = () =>{
  return(
   <h1> We are AdaLab</h1>
  )
}


const App =()=>{
  return (
    <div>
      
      
      <nav>
        <Link to={"/login"}>Login</Link>
      </nav>
      <Routes>
        <Route path = '/login' element={<Login/>}></Route>
        <Route path = '/users' element={<Users/>}></Route>
      </Routes>
      {/* <Login/>
      <Users/> */}
    </div>
  )
}
export default App;
