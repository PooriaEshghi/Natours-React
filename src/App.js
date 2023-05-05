import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navbar from "./routes/navigation/Navbar";
import SignUp from "./sign-in/SignUp";
import LogIn from "./sign-in/LogIn";
import TourView from "./component/TourView";
const Shop = () => {
  return <h1>I ame the chop component</h1>;
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<LogIn />} />
        <Route path="tour-view" element={<TourView />} />
      </Route>
    </Routes>
  );
};

export default App;
