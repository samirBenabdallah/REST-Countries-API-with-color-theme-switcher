import {
  faAngleDown,
  faAngleUp,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Main({ data, darkMode }) {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setOpenValue] = useState(false);

  function onchange(e) {
    setInputValue(e.target.value);
  }
  function regionChange(e) {
    setRegion(e.target.innerText);
  }
  useEffect(() => {
    let value = inputValue.toUpperCase();
    let arr = data;
    if (region) {
      arr = data.filter(
        (ele) => ele.region.toUpperCase() === region.toUpperCase()
      );
    }
    let result = [];
    if (!value) {
      setCountries(arr.slice(0, 8));
      return;
    }
    result = arr.filter(
      (ele) =>
        ele.name.toUpperCase().startsWith(value) ||
        ele.alpha2Code.toUpperCase().startsWith(value) ||
        ele.alpha3Code.toUpperCase().startsWith(value) ||
        //   ele.translations.indexOf(value) !== -1 ||
        //   ele.altSpellings.includes(value) ||
        ele.nativeName.toUpperCase().startsWith(value)
    );
    setCountries(result);
  }, [inputValue, region]);
  useEffect(() => {
    setCountries(data.slice(0, 8));
  }, [data]);
  return (
    <div className="px-10 h-full ">
      <header className="flex items-center justify-between py-5 w-full xs:flex-col">
        <section
          className={`w-72 h-10 shadow-md ${
            darkMode ? "bg-dark-element" : "bg-light-element"
          } rounded-sm flex items-center`}
        >
          <FontAwesomeIcon icon={faSearch} className="mx-4" />
          <input
            type="text"
            onChange={onchange}
            placeholder="Search for a country..."
            className={`h-full grow bg-tr outline-none`}
          />
        </section>
        <section
          className={`flex items-center xs:mt-4 xs2:mr-auto xs2:ml-2 ${
            darkMode ? "bg-dark-element" : "bg-light-element"
          }  shadow-md w-52 h-10 p-2 rounded-md relative`}
        >
          <div
            className="flex items-center justify-between w-full "
            onClick={() => setOpenValue((curr) => !curr)}
          >
            <p className="capitalize font-[600] text-sm">
              {region || "filter by region"}
            </p>
            <FontAwesomeIcon
              icon={isOpen ? faAngleUp : faAngleDown}
              className="text-black bg-dark-element"
            />
          </div>
          <div
            className={`w-full px-4 absolute duration-500 shadow-md rounded-md -bottom-2 left-0 translate-y-full ${
              isOpen ? " min-h-20 py-4" : "h-0 overflow-hidden p-0"
            }  ${darkMode ? "bg-dark-element" : " bg-light-element"} `}
          >
            <div
              onClick={regionChange}
              className="pb-2 font-[600] hover:opacity-80 duration-300 cursor-pointer"
            >
              Africa
            </div>
            <div
              onClick={regionChange}
              className="pb-2 font-[600] hover:opacity-80 duration-300 cursor-pointer"
            >
              Americas
            </div>
            <div
              onClick={regionChange}
              className="pb-2 font-[600] hover:opacity-80 duration-300 cursor-pointer"
            >
              Asia
            </div>
            <div
              onClick={regionChange}
              className="pb-2 font-[600] hover:opacity-80 duration-300 cursor-pointer"
            >
              Europe
            </div>
            <div
              onClick={regionChange}
              className="font-[600] hover:opacity-80 duration-300 cursor-pointer"
            >
              Oceania
            </div>
          </div>
        </section>
      </header>
      <div className="grid grid-cols-4 gap-x-16 gap-y-5 pb-5 l:gap-x-4 md:grid-cols-3 s:grid-cols-2 s:gap-x-16 xs:gap-x-8 xs2:grid-cols-1 place-items-center">
        {countries.map((ele, index) => (
          <Link
            className={`shadow-md w-full h-[280px] rounded-md xs2:w-[250px] ${
              !darkMode ? "bg-light-element" : "bg-dark-element"
            }`}
            to={`/details/${ele.alpha2Code}`}
            key={index}
          >
            <img
              src={ele.flags.png}
              alt={`${ele.name} flag`}
              className="w-full h-1/2 rounded-tl-md rounded-tr-md"
            />
            <div className="p-5">
              <h2 className="mb-3 font-[800]">{ele.name}</h2>
              <div className="flex">
                <p className="font-[600] pr-1">Population:</p>
                <p className="font-[300]">{ele.population}</p>
              </div>
              <div className="flex">
                <p className="font-[600] pr-1">Region:</p>
                <p className="font-[300]">{ele.region}</p>
              </div>
              <div className="flex">
                <p className="font-[600] pr-1">Capital:</p>
                <p className="font-[300]">{ele.capital}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
