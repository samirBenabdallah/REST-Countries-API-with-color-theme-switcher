import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

export default function Navbar({ isDarkMode, setDarkModeStatus }) {
  return (
    <div
      className={`w-full h-[10vh] flex items-center justify-between px-10 xs2:px-5 ${
        isDarkMode ? "bg-dark-element" : "bg-light-element"
      }  `}
    >
      <h1 className="font-[800] text-xl">Where in the world?</h1>
      <div
        className="flex items-center cursor-pointer"
        onClick={() => setDarkModeStatus((curr) => !curr)}
      >
        <FontAwesomeIcon icon={faMoon} className="mr-2" />
        <p className="capitalize font-[600]">dark mode</p>
      </div>
    </div>
  );
}
