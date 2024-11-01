import { useLoaderData } from "react-router-dom";

const Details = () => {
     const details=useLoaderData();
     const {name,email,id,body}=details
     return (
          <div className="border border-yellow-300 rounded-2xl p-4 bg-slate-400">
               <h1>id : {id}</h1>
               <h1>Name : {name}</h1>
               <h1>Email : {email}</h1>
               <h1>body : {body}</h1>
          </div>
     );
};

export default Details;