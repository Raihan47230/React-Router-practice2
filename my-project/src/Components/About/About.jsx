import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const About = () => {
     const users=useLoaderData()
     return (
          <div className="mt-10">
               <div className="grid grid-cols-4 gap-6">
               
               {
                    users.map(user=><User key={user.id} user={user}></User>)
               }
              
          </div>
          </div>
     );
};

export default About;