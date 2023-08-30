import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./Pages/Home";
import UnderConstruction from "./Pages/UnderConstruction";
import Bookings from "./Pages/Bookings";

function App() {
  return (
    <>
      <Layout>
      <Routes>
       <Route path = "/" element={<Home />} />
       <Route path = "/about" element={<UnderConstruction />} />
       <Route path = "/menu" element={<UnderConstruction />} />
       <Route path = "/reservations" element={<Bookings />} />
       <Route path = "/order-online" element={<UnderConstruction />} />
       <Route path = "/login" element={<UnderConstruction />} />
       </Routes>
      </Layout>
    </>
  );
}

export default App;
