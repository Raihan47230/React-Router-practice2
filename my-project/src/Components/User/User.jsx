import { Link, useNavigate } from "react-router-dom";

const User = ({user}) => {
     const {name,email,id}=user
     const navegate=useNavigate()
     const hendleClick=()=>{
          navegate(`/about/${id}`)
     }
     return (
          <div className="border border-yellow-400 p-5 rounded-2xl">
               <h1>Name : {name}</h1>
               <h1>Email : {email}</h1>
               <div className="flex gap-2">
               <Link className="bg-yellow-100 mt-6" to={`/about/${id}`} >Click Me</Link>
               <button className="bg-yellow-100 mt-6" onClick={hendleClick}>show Details</button>
               </div>
          </div>
     );
};

export default User;