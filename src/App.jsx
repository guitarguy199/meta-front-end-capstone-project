import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./Pages/Home";
import UnderConstruction from "./Pages/UnderConstruction/UnderConstruction";
import Bookings from "./Pages/Bookings";
import ConfirmationPage from "./Pages/Bookings/ConfirmationPage";

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
       <Route path = '/confirmation' element={<ConfirmationPage />} />
       </Routes>
      </Layout>
    </>
  );
}

export default App;
