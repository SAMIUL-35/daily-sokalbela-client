import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import Footer from "../../Pages/Shared/Footer/Footer";

const Main = () => {
  const location = useLocation();
  console.log(location);
  const noHeader = location.pathname.includes("login");
  const noFooter = location.pathname.includes("signup");


  return (
    <div>
      { (
        <h2 className="text-gray-950-400 uppercase text-center my-4 text-4xl">
          DAILY SOKALBELA
        </h2>
      )}
      {!noHeader && !noFooter && <Navbar />}
      <Outlet />
      {!noFooter && <Footer></Footer>}
    </div>
  );
};

export default Main;
