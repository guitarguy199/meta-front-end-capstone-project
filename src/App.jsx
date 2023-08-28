import { Route, Routes } from "react-router-dom";
import pages from "./utils/pages";
import Layout from "./components/layout/Layout";
import Home from "./components/Home";
import UnderConstruction from "./Pages/UnderConstruction";

function App() {
  return (
    <>
    
      <Layout>
      <Routes>
       <Route path = "/" element={<Home />} />
       <Route path = "/about" element={<UnderConstruction />} />
       <Route path = "/" element={<Home />} />
       <Route path = "/" element={<Home />} />
       <Route path = "/" element={<Home />} />
       <Route path = "/" element={<Home />} />

       </Routes>
      </Layout>
      
    </>
  );
}

export default App;
