import { Outlet } from "react-router-dom";
import Header from "../Hero/Header";

const Home = () => {
     return (
          <div>
               <h1 className="text-2xl font-bold">Home page</h1>
               <h1>Practice React Router </h1>
               <Header></Header>
               <Outlet></Outlet>

          </div>
     );
};

export default Home;