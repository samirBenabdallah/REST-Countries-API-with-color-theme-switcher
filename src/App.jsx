import { useEffect, useState } from "react";
import Navbar from "./pages/Navbar";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Details from "./pages/Details";
import axios from "axios";

async function getINfo() {
  const link = "./data.json";
  const res = await axios.get(link);
  return res.data;
}
// todo: mobile design for details page
export default function App() {
  const [data, setData] = useState([]);
  const [isDarkMode, setDarkModeStatus] = useState(true);
  useEffect(() => {
    getINfo().then((ele) => setData(ele));
  }, []);

  return (
    <div
      className={`overflow-x-hidden w-[100vw] h-[100vh] font-font ${
        isDarkMode ? "bg-dark-bg text-dark-text" : "text-light-text bg-light-bg"
      }  `}
    >
      <Navbar isDarkMode={isDarkMode} setDarkModeStatus={setDarkModeStatus} />
      <div className="w-full h-[90vh]">
        <Routes>
          <Route
            path="/"
            element={<Main data={data} darkMode={isDarkMode} />}
          />
          <Route
            path="/details/:name"
            element={<Details data={data} darkMode={isDarkMode} />}
          />
        </Routes>
      </div>
    </div>
  );
}
