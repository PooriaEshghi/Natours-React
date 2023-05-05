import Tours from "../../component/Tours";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Outlet />
      <Tours />
    </>
  );
};

export default Home;
