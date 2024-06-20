import Login from "./login";
import Users from "./Users";


export const Introduction = () =>{
  return(

   <h1> We are AdaLab</h1>

  )
}


const Pearl = () => {
  return (
    <div>
   
      <Login/>
   
      <Users/>
    </div>


  );
};
export default Pearl;
